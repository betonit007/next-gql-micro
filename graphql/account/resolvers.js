import { clients } from "../sampleData";
import Client from "../../models/Client";

const accountResolvers = {
  User: {
    test: () => "subResolver string",
  },
  Query: {
    getUser: (_, args, context) => {
      return clients.find((client) => client.id == args.id);
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
  },
};

export default accountResolvers;
