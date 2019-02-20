import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

/**
 * Display all interest posts in list ordered alphabetically
 */
function InterestList() {
  return (
    <StaticQuery
      query={graphql`
        query InterestsQuery {
          allMarkdownRemark (
            filter: {
              frontmatter: {
                category: { eq: "interests" }
              }
            },
            sort: {
              fields: [frontmatter___title],
              order: ASC
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
        const interestItems = allMarkdownRemark.edges.map((edge) => {
          const { id, html } = edge.node;
          const { title } = edge.node.frontmatter;

          return (
            <li className="card" key={id}>
              <div className="card__header">
                <div className="card__title">{title}</div>
              </div>
              {/*
                The html inserted here is trusted as it is static content added by gatsby during
                build time.
              */}
              {/* eslint-disable-next-line react/no-danger */}
              <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
            </li>
          );
        });

        return <ul className="grid">{interestItems}</ul>;
      }}
    />
  );
}

export default InterestList;
