import express from "express";
import path from "path";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/weather", (req, res) => {
  console.log("Request comming from ip: ", req.ip);
  res.send({
    city: "karachi",
    temp: 28,
    min: 16,
    max: 35,
    humidity: 60,
    serverTime: new Date().toString(),
    myName: "Shehzad",
  });
});
const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./web/build")));
app.use("*", express.static(path.join(__dirname, "./web/build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
