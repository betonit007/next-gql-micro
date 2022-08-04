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

  input userInput {
    name: String
    email: String
    phone: String
  }

  type Mutation {
    addUser(newUser: userInput): User
    removeUser(id: ID): User
  }
`;

export default accountTypeDefs;
