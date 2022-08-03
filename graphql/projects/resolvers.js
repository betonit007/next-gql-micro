import { projects, clients } from "../sampleData";

const projectResolvers = {
  Project: {
    client: (parent) => {
      return clients.find((client) => client.id === parent.id);
    },
  },
  Query: {
    getProject: (parent, args, context) => {
      return projects.find((project) => project.id === args.id);
    },
    getProjects: () => {
      return projects;
    },
  },
};

export default projectResolvers;
