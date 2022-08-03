import { gql } from "apollo-server-micro";

const accountTypeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    phone: String
    test: String
  }

  type Query {
    getUser(id: ID): User
    getUsers: [User]
  }
`;

export default accountTypeDefs;
