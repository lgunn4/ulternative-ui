import gql from "graphql-tag";

const CATEGORY_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
        id
        name
        description
        image {
            url
        }
        items {
            id
            name
            description
            image {
                url
            }
            
        }
    }
  }
`;

export default CATEGORY_QUERY;
