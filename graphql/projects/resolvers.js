import { projects, clients } from "../sampleData";
import Project from "../../models/Project";

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
    getProjects: async () => {
      console.log(await Project.find());
      return projects;
    },
  },
  Mutation: {
    addProject: (parent, args, context) => {
      console.log("yes!");
      const newProject = new Project(args.project);
      return newProject.save();
    },
  },
};

export default projectResolvers;
