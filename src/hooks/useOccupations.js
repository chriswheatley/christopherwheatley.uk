import { graphql, useStaticQuery } from 'gatsby';

/**
 * Get all posts in the occupations category.
 */
export default function useOccupations() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query EmploymentHistoryQuery {
        allMarkdownRemark (
          filter: {
            frontmatter: {
              category: { in: ["jobs", "education"] }
            }
          }
          sort: {
            fields: [frontmatter___endYear]
            order: DESC
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                category
                organisation
                startYear
                endYear
              }
              id
              html
            }
          }
        }
      }
    `,
  );

  return allMarkdownRemark.edges.map((edge) => {
    const { html, id } = edge.node;

    return {
      ...edge.node.frontmatter,
      id,
      html,
    };
  });
}
