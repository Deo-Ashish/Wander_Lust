const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
// const cookieParser = require("cookie-parser");

app.use(
  session({
    secret: "mySuperSecretString",
    resave: false,
    saveUninitialized: true,
  }),
);
// app.use(cookieParser("secretCode"));

app.get("/requestCount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`You have sent ${req.session.count} request(s).`);
});

// app.get("/test", (req, res) => {
//   res.send("Test passed.");
// });

// app.get("/getSecretCode", (req, res) => {
//   res.cookie("color", "red", { signed: true });
//   res.send("Done!");
// });

// app.get("/verify", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("Verified");
// });

// app.get("/getCookies", (req, res) => {
//   res.cookie("greet2", "Namaste");
//   res.send("This is second cookie example.");
// });

// app.get("/greet", (req, res) => {
//   let { name = "anonymous" } = req.cookies;
//   res.send(`Hi, ${name}`);
// });

// app.get("/", (req, res) => {
//   res.send("Hi, I am root!");
//   console.dir(req.cookies);
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(3000, () => {
  console.log("Server is listening to 3000");
});
