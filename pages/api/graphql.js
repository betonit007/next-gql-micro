import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import mongoose from "mongoose";
import accountTypeDefs from "../../graphql/account/typeDefs";
import accountResolvers from "../../graphql/account/resolvers";
import projectTypeDefs from "../../graphql/projects/typeDefs";
import projectResolvers from "../../graphql/projects/resolvers";

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected ${conn.connection.host}`);
};

connectDB();

export const schema = makeExecutableSchema({
  typeDefs: [accountTypeDefs, projectTypeDefs],
  resolvers: [accountResolvers, projectResolvers],
});

const apolloServer = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
