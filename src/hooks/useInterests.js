import { graphql, useStaticQuery } from 'gatsby';

/**
 * Get all posts in the 'interests' category.
 */
export default function useInterests() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query InterestsQuery {
        allMarkdownRemark (
          filter: {
            frontmatter: {
              category: { eq: "interests" }
            }
          }
          sort: {
            fields: frontmatter___order
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
    `,
  );

  return allMarkdownRemark.map((edge) => {
    const { html, id } = edge.node;
    return {
      ...edge.node.frontmatter,
      html,
      id,
    };
  });
}
