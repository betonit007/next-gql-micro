import { clients } from "../sampleData";
import Client from "../../models/Client";

const accountResolvers = {
  User: {
    test: () => "subResolver string",
  },
  Query: {
    getUser: async (_, args, context) => {
      return Client.findById(args.id);
    },
    getUsers: async () => {
      return await Client.find({});
    },
  },
  Mutation: {
    addUser: async (_, args, context) => {
      const newUser = new Client(args.newUser);
      return await newUser.save();
    },
    removeUser: async (_, args, context) => {
      return await Client.findByIdAndRemove(args.id);
    },
  },
};

export default accountResolvers;
