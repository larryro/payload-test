import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import Articles from "./collections/Articles";
import Customers from "./collections/Customers";
import { CustomNav } from "./admin/components/Nav";
const createStripeSubscriptionPath = path.resolve(
  __dirname,
  "auth/ClerkStrategy.ts"
);
const mockModulePath = path.resolve(__dirname, "mocks/emptyObject.ts");
console.log("dirname", __dirname);
export default buildConfig({
  // serverURL: "http://localhost:3001",
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, "../dist/output.css"),
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          [createStripeSubscriptionPath]: mockModulePath,
        },
      },
    }),
    // webpack: (config) => ({
    //   ...config,
    //   resolve: {
    //     ...config.resolve,
    //     fallback: {
    //       util: require.resolve("util"),
    //       stream: require.resolve("stream-browserify"),
    //       http:false,
    //       crypto:false
    //     },
    //     alias: {
    //       ...config.resolve.alias,
    //       // []: ,
    //     },
    //   },
    //   // browser: {
    //   //   fs: false,

    //   //   // stream: false,
    //   // },
    // }),
    components: {
      // Nav: CustomNav,
    },
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
