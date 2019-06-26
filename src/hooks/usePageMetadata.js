import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query PageMetadataQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return site.siteMetadata;
}
