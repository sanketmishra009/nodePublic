const express = require("express");
const app = express();
const port = 3000;

const usermodel = require("./userModel");

app.get("/create", async (req, res) => {
  const createdUser = await usermodel.create({
    user: "sanket Mishra",
    email: "sanket009@gmail.com",
  });
  res.send(createdUser);
});

app.get("/read", async (req, res) => {
  const users = await usermodel.find({
    user: "sanket",
  });
  res.send(users);
});

app.get("/update", async (req, res) => {
  const updatedUser = await usermodel.updateMany(
    {
      user: "sanket",
    },
    {
      email: "sanketmishra009@gmail.com",
    }
  );
  res.redirect("/read");
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
