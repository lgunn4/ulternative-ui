import gql from "graphql-tag";

const ALTERNATIVES_QUERY = gql`
  query Alternatives {
    alternatives {
      id
      name
      description
      url
      image {
        url
      }
    }
  }
`;

export default ALTERNATIVES_QUERY;