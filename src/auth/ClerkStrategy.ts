const passportCustom = require("passport-custom");
const CustomStrategy = passportCustom.Strategy;
// import payload from "payload";
// const m = payload.find()
// const Clerk = require("@clerk/clerk-sdk-node/cjs/instance").default;
// const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY });
const pkg = require("@clerk/clerk-sdk-node");
const { clients, sessions, users, verifyToken,ClerkExpressWithAuth } = pkg;
// const clerk = pkg.default;
// const { clients, sessions } = pkg;
const Cookies = require("cookies");
// import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import jwt from "jsonwebtoken";
// const m = function(){

// }
export const clerkStrategy=function(payload){
    return new CustomStrategy(async (req, done) => {
        try {
          // const splitPem =
          //   process.env.CLERK_JWT_VERIFICATION_KEY.match(/.{1,64}/g);
          // const publicKey =
          //   "-----BEGIN PUBLIC KEY-----\n" +
          //   splitPem.join("\n") +
          //   "\n-----END PUBLIC KEY-----";
          // console.log("express base url", payload.express.request.ip);
          // console.log("req", req);
          // Note: Clerk stores the clientToken in a cookie
          // named "__session" for Firebase compatibility
          // console.log("public key", publicKey);
          console.log('get auth',req.auth)


          // const sessionId = req.query._clerk_session_id;
          // const res = await ClerkExpressWithAuth()(req,{setHeader:()=>{},},(res)=>{
          //   console.log('clerk express auth')
          //   console.log(req.auth)
          // })
          // const authRes = req.auth
          // console.log('clerk express auth res',res)
          // return done(null, null);
          if(!req.auth || !req.auth.userId)
            return done(null, null);
          // console.log("get session id from req", sessionId);
          // verifyToken(sessionId, {
          //   jwtKey: process.env.CLERK_JWT_VERIFICATION_KEY,
          // });

          // const cookies = new Cookies(req, payload.res);
          // const sessionToken = cookies.get("__session");
          // const clientId = cookies.get("__session");
          // if (
          //   !sessionId ||
          //   sessionId == "undefined" ||
          //   sessionId == "null" ||
          //   !sessionToken
          // ) {
          //   console.log("no session id");
          //   return done(null, null);
          // }
          // console.log("session token", sessionToken);
          // const userInfo = await clients.verifyClient(
          //   "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMk1ndExTMnZyODFkeDhHc1laOTNTdWNEbzR4In0.F-0-o6jne_qLiT_NIxWKbfbww7JOJCLHDSPxcScNDSvK1v7dSOh0LcgFvBGpfMy02wxVBA9NVT9oh0lLZPFLPM-wLKxoc5wUbBuDA7NYYRSbNDgS3kT0vCsoGq1FC0H4YAvkbA2NBJBlfywt0007tpd_NBv1-baYonIKtG1yJrtMdopAnr3RdnGIj0lie52gqgpHd5ynWHvToGcI2qiuV3bK7AEF63YOu5zxuqZwTMxbJiKeGCWxxivxQV5J8F40vDNEXdJoeYCrrFcY6R4BIry4_p6Re37ChvsPA4VBXeuawlHPiEMIv77dtC9bbgITq7RBDqSMeACYkDqdtzQDsw"
          // );
          // let filteredSessions2 = await sessions.getSessionList({
          //   clientId: sessionToken,
          // });
          // console.log("filteredSessions2", filteredSessions2);

          // console.log("user info", userInfo);
          // var decoded = jwt.verify(
          //   "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMk1ndExTMnZyODFkeDhHc1laOTNTdWNEbzR4In0.F-0-o6jne_qLiT_NIxWKbfbww7JOJCLHDSPxcScNDSvK1v7dSOh0LcgFvBGpfMy02wxVBA9NVT9oh0lLZPFLPM-wLKxoc5wUbBuDA7NYYRSbNDgS3kT0vCsoGq1FC0H4YAvkbA2NBJBlfywt0007tpd_NBv1-baYonIKtG1yJrtMdopAnr3RdnGIj0lie52gqgpHd5ynWHvToGcI2qiuV3bK7AEF63YOu5zxuqZwTMxbJiKeGCWxxivxQV5J8F40vDNEXdJoeYCrrFcY6R4BIry4_p6Re37ChvsPA4VBXeuawlHPiEMIv77dtC9bbgITq7RBDqSMeACYkDqdtzQDsw",
          //   `-----BEGIN PUBLIC KEY-----
          // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuyjKBSbGvH3T7Y3VMjj1
          // 8uN4S5VeU5DCuZA28fkNL9V9DBK0NdQ0tKSrPl5l2XtSFiGCD0VmR75DYBFjtqQM
          // /0XN1bghbpSoMdaFa04VUdJeRPIRax9s8PCAHvURYRJCkYcJOqqMRHu4HjP9O2DX
          // vaF1PJjpAQh8T5d7vHPiMa9dqMmVtbhrZ/IOC0SIEZmfJ/z3Aur1jGX/1cs/i/0v
          // L4CwlHTSf99B9ru7AsYGksf7dgMJ0KduoUq91mzTbgn877L7Iaag9oMbQfTnMWx6
          // RnLTCdyvbIPhNeRmWk2g5p0WSB0RryQpIprACcDlt2vxqSHzZXEWGnT1mjKu99SU
          // KwIDAQAB
          // -----END PUBLIC KEY-----`
          // );
          // console.log("decoded", decoded);

          // Note: Clerk stores the clientToken in a cookie
          // named "__session" for Firebase compatibility

          // console.log("session token", sessionToken);
          // console.log(
          //   "session_id",
          //   sessionId,
          //   "session token",
          //   sessionToken
          // );
          // console.log("start get latest session id ");
          // const client = await clients.verifyClient(sessionToken);
          // const latestsessionId = client.lastActiveSessionId;
          // console.log("latest sessionid", latestsessionId);
          // const sessionInfo = await sessions.verifySession(
          //   sessionId,
          //   sessionToken
          // );
          // console.log("session info", sessionInfo);
          // console.log("user id", sessionInfo.userId);
          const res = await payload.find({
            collection: "customers",
            where: {
              user_id: {
                equals: req.auth.userId,
              },
            },
          });
          if (res.docs.length === 0) {
            const searchUser = await users.getUser(req.auth.userId);
            console.log("search user", searchUser);
            const emailAddress = searchUser.emailAddresses[0]
              ? searchUser.emailAddresses[0].emailAddress
              : "";
            const res = await payload.create({
              collection: "customers",
              data: {
                user_id: req.auth.userId,
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
      })
}