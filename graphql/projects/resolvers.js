import { projects } from "../sampleData";

const projectResolvers = {
  Query: {
    getProject: (id) => {
      return projects.filter((project) => project.id === id);
    },
    getProjects: () => {
      return projects;
    },
  },
};

export default projectResolvers;
