import { CollectionConfig } from "payload/types";
// import passportCustom from "passport-custom";
const passportCustom = require("passport-custom");
const CustomStrategy = passportCustom.Strategy;
// import payload from "payload";
// const m = payload.find()
// const Clerk = require("@clerk/clerk-sdk-node/cjs/instance").default;
// const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY });
const pkg = require("@clerk/clerk-sdk-node");
const { clients, sessions, users } = pkg;
// const clerk = pkg.default;
// const { clients, sessions } = pkg;
const Cookies = require("cookies");
// import { clients, sessions } from "@clerk/clerk-sdk-node";
// import Cookies from "cookies";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: ({ req: { user } }) => {
      console.log("user", user);
      return true;
    },
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
