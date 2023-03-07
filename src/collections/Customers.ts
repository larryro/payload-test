import { CollectionConfig } from "payload/types";
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
const Customers: CollectionConfig = {
  slug: "customers",
  auth: {
    strategies: [
      {
        strategy: (payload) =>
          new CustomStrategy(async (req, done) => {
            try {
              // console.log("req", req);
              // Note: Clerk stores the clientToken in a cookie
              // named "__session" for Firebase compatibility
              const sessionId = req.query._clerk_session_id;
              if (!sessionId) return done(null, false);

              // Note: Clerk stores the clientToken in a cookie
              // named "__session" for Firebase compatibility
              const cookies = new Cookies(req, payload.res);
              const sessionToken = cookies.get("__session");
              // console.log("session token", sessionToken);
              console.log(
                "session_id",
                sessionId,
                "session token",
                sessionToken
              );

              const sessionInfo = await sessions.verifySession(
                sessionId,
                sessionToken
              );
              console.log("session info", sessionInfo);
              console.log("user id", sessionInfo.userId);
              const res = await payload.find({
                collection: "customers",
                where: {
                  user_id: {
                    equals: sessionInfo.userId,
                  },
                },
              });
              if (res.docs.length === 0) {
                const searchUser = await users.getUser(sessionInfo.userId);
                console.log("search user", searchUser);
                const emailAddress = searchUser.emailAddresses[0]
                  ? searchUser.emailAddresses[0].emailAddress
                  : "";
                const res = await payload.create({
                  collection: "customers",
                  data: {
                    user_id: sessionInfo.userId,
                    email: emailAddress,
                    salt: "111",
                    password: "111",
                  },
                });
                console.log("create res", res);
                res["collection"] = "customers";
                res["_strategy"] = "custom";
                done("", res);
                // done("", {
                //   _id: res._id,
                //   user_id: sessionInfo.userId,
                //   email: emailAddress,

                //   collection: "customers",
                //   _strategy: "custom",
                // });
              } else {
                const user = res.docs[0];
                user["collection"] = "customers";
                user["_strategy"] = "custom";
                done("", user);
                // done("", {
                //   _id: res.docs[0]._id,
                //   user_id: sessionInfo.userId,
                //   email: res.docs[0].email,
                //   collection: "customers",
                //   _strategy: "custom",
                // });
              }
            } catch (e) {
              console.error(e);
            }

            // sessions
            //   .verifySession("sess_2MdSLzQb8HxyWzAezwOOkxGKyaN", sessionToken)
            //   .then((client) => console.log("get client", client))
            //   .catch((error) => console.error(error));

            // const client = await clerk.clients.verifyClient({
            //   token: sessionToken,
            // });
            // console.log("client", client);

            // const clientsList = await clerk.clients.getClientList();
            // console.log("client list", clientsList);
            // console.log("pathname", req.pathname);
          }),
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
};

export default Customers;
