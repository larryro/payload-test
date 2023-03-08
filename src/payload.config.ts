import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import Articles from "./collections/Articles";
import Customers from "./collections/Customers";

export default buildConfig({
  // serverURL: "http://localhost:3001",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Articles,
    Customers,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
