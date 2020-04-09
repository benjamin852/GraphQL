const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors"); //allow cors requests

const schema = require("./schema/schema");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://benjamin852:mehradSucks@cluster0-91b4s.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to db");
});

//express doesnt understand graphql
//so hand off control to graphqqlHTTP
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("listening on port 4000"));
