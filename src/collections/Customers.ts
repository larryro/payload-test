// import { request } from "graphql-request";
// import { express } from "express";
import { CollectionConfig } from "payload/types";
import { clerkStrategy } from "../auth/ClerkStrategy";
const Customers: CollectionConfig = {
  slug: "customers",
  auth: {
    strategies: [
      {
        strategy: clerkStrategy,
        name: "custom",
      },
    ],
  },
  fields: [
    {
      name: "user_id",
      type: "text",
      unique: true,
    },
  ],
  access: {
    read: ({ req: { user } }) => {
      console.log("user", user);
      return true;
    },
  },
};

export default Customers;
