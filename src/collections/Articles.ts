import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "articles",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "content",
      type: "text",
    },
    {
      type: "relationship",
      name: "author",
      hidden: false,
      required: true,
      hasMany: false,
      relationTo: "customers",
    },
  ],
  access: {
    read: ({ req: { user } }) => {
      console.log("user", user);
      return true;
    },

    create: async ({ req: { payload, user, body } }) => {
      console.log("user", user);
      console.log("body", body);
      if (!user || !body || !body.title || !body.content) return false;
      const author = await payload.findByID({
        collection: "customers",
        id: user.id,
      });
      body.author = author.id;
      console.log(body);
      // payload.create({
      //   collection: "articles",
      //   data: {
      //     title: body.title,
      //     content: body.content,
      //     author: user._id,
      //   },
      // });
      return true;
    },
  },
  hooks: {
    beforeValidate: [
      async ({
        data, // incoming data to update or create with
        req, // full express request
        operation, // name of the operation ie. 'create', 'update'
        originalDoc, // original document
      }) => {
        // data.author = [data.author];
        console.log("before auth", data);
        return data; // Return data to either create or update a document with
      },
    ],
  },
};

export default Articles;
