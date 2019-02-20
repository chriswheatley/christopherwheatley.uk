import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

/**
 * Display all posts in the skills category in a grid where each skill has a title and a
 * description.
 */
function SkillList() {
  return (
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          allMarkdownRemark (
            filter: {
              frontmatter: {
                category: { eq: "skills" }
              }
            }
          ) {
            edges {
              node {
                frontmatter {
                  title
                }
                id
                html
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark }) => {
        const skillItems = allMarkdownRemark.edges.map((edge) => {
          const { id, html } = edge.node;
          const { title } = edge.node.frontmatter;

          return (
            <li key={id} className="card card--primary">
              <span className="card__title">{title}</span>
              {/*
                The html inserted here is trusted as it is static content added by gatsby during
                build time.
              */}
              {/* eslint-disable-next-line react/no-danger */}
              <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
            </li>
          );
        });

        return <ul className="grid">{skillItems}</ul>;
      }}
    />
  );
}

export default SkillList;
