import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './SkillList.scss';

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
            <li key={id} className="SkillList__Item">
              <b>{title}</b>
              {/*
                The html inserted here is trusted as it is static content added by gatsby during
                build time.
              */}
              {/* eslint-disable-next-line react/no-danger */}
              <p dangerouslySetInnerHTML={{ __html: html }} />
            </li>
          );
        });

        return (
          <section>
            <h2>Skills</h2>
            <ul className="SkillList">{ skillItems }</ul>
          </section>
        );
      }}
    />
  );
}

export default SkillList;
