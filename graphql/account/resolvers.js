import { clients } from "../sampleData";

const accountResolvers = {
  User: {
    test: () => "subResolver string",
  },
  Query: {
    getUser: (_, args, context) => {
      return clients.find((client) => client.id == args.id);
    },
    getUsers: () => {
      return clients;
    },
  },
};

export default accountResolvers;
