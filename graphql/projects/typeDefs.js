import { gql } from "apollo-server-micro";

const projectTypeDefs = gql`
  type Project {
    id: ID
    clientId: String
    name: String
    description: String
    status: String
  }

  type Query {
    getProject(id: ID): User
    getProjects: [Project]
  }
`;

export default projectTypeDefs;
