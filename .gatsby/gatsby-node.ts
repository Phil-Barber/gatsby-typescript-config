/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { kebabCase } = require('lodash')
import * as React from 'react'
import { MarkdownRemarkEdge, Query } from '../src/graphql-types'
import { CreatePagesArgs, CreateNodeArgs } from 'gatsby'

function groupCountBy(field: 'tags', edges: MarkdownRemarkEdge[]) {
  const groupCounts = edges.reduce((acc, { node }) => {
    const groups = node.frontmatter[field] || []
    groups.forEach((group) => {
      acc[group] = (acc[group] || 0) + 1
    })
    return acc
  }, {} as { [key: string]: number })

  return Object.entries(groupCounts)
}

exports.createPages = async ({ actions, graphql, reporter }: CreatePagesArgs) => {
  const { createPage } = actions

  function createContentListPages({
    itemTotal,
    prefix,
    component,
    context,
    limit = 10,
  }: {
    itemTotal: number
    prefix: string
    component: string
    context?: { tag: string }
    limit?: number
  }) {
    const pageTotal = Math.ceil(itemTotal / limit)

    for (let page = 1; page <= pageTotal; page++) {
      const path = page > 1 ? `${prefix}/${page}` : `${prefix}`
      const skip = (page - 1) * limit

      createPage({
        path,
        component,
        context: {
          ...context,
          itemTotal,
          limit,
          page,
          pageTotal,
          prefix,
          skip,
        },
      })
    }
  }

  const IndexTemplate = path.resolve('src/templates/IndexTemplate.tsx')
  const TagTemplate = path.resolve('src/templates/TagTemplate.tsx')
  const SingleTemplate: string = path.resolve('src/templates/SingleTemplate.tsx')

  const { data, errors }: { data?: Query; errors?: Error } = await graphql(`
    {
      allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('Error fetching data', errors)
    return
  }

  const edges: MarkdownRemarkEdge[] = data.allMdx.edges

  edges.forEach(({ node }) => {
    const { frontmatter, parent } = node
    const path = frontmatter.path || `/${parent.sourceInstanceName}/${parent.name}`
    createPage({
      path,
      component: SingleTemplate,
      context: { slug: 'slug' },
    })
  })

  reporter.info(`Articles (${edges.length})`)

  createContentListPages({
    itemTotal: edges.length,
    prefix: '/all',
    component: IndexTemplate,
  })

  reporter.info(`Index (${Math.ceil(edges.length / 10)})`)

  groupCountBy('tags', edges).forEach(([tag, itemTotal]) => {
    createContentListPages({
      itemTotal,
      prefix: `/tags/${kebabCase(tag)}`,
      component: TagTemplate,
      context: { tag },
    })

    reporter.info(`Tag: ${tag} (${Math.ceil(itemTotal / 10)})`)
  })
}
