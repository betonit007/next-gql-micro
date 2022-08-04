import { projects, clients } from "../sampleData";
import Project from "../../models/Project";
import Client from "../../models/Client";

const projectResolvers = {
  Project: {
    client: async (parent) => {
      return await Client.findById(parent.clientId);
    },
  },
  Query: {
    getProject: (parent, args, context) => {
      return projects.find((project) => project.id === args.id);
    },
    getProjects: async () => {
      return await Project.find();
    },
  },
  Mutation: {
    addProject: (parent, args, context) => {
      const newProject = new Project(args.project);
      return newProject.save();
    },
  },
};

export default projectResolvers;
