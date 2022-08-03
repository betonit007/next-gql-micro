import { gql } from "apollo-server-micro";

const projectTypeDefs = gql`
  type Project {
    id: ID
    clientId: String
    name: String
    description: String
    status: String
    client: User
  }

  type Query {
    getProject(id: ID): Project
    getProjects: [Project]
  }
`;

export default projectTypeDefs;
