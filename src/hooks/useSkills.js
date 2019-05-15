import { graphql, useStaticQuery } from 'gatsby';

/**
 * Get all posts in the skills category.
 */
export default function useSkills() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SkillsQuery {
        allMarkdownRemark (
          filter: {
            frontmatter: {
              category: { eq: "skills" }
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

  return allMarkdownRemark.edges.map((edge) => {
    const { html, id } = edge.node;
    const { title } = edge.node.frontmatter;

    return {
      html,
      id,
      title,
    };
  });
}
