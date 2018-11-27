import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../../styles/skill-list.scss';
import '../../styles/card.scss';

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
              <b className="card__header">{title}</b>
              {/*
                The html inserted here is trusted as it is static content added by gatsby during
                build time.
              */}
              {/* eslint-disable-next-line react/no-danger */}
              <div className="card__body" dangerouslySetInnerHTML={{ __html: html }} />
            </li>
          );
        });

        return <ul className="skill-list">{skillItems}</ul>;
      }}
    />
  );
}

export default SkillList;
