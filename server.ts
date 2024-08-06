import express from "express";
import client from "~/client";

const app = express();

// send a request request.body = '{"name": "John"}' -> {name: "John"}

// bun.sh
app.use(express.json());

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/initialize-survey", async (req, res) => {
  const survey = await client.survey.create({data: {title:req.body.title}})

  res.json({ survey });
});

app.post("/add-block", async (req, res) => {
  const theblock = await client.block.create({data: {ordering:req.body.ordering,surveyId:req.body.survey_id}})

  res.json({ theblock });
});




app.get("/", async (req, res) => {
  // const surveys = await client.survey.findMany();
  console.log("test")
  res.json()
  // res.json({ surveys });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
