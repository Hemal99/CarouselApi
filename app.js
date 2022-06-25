const express = require("express");
const bodyParser = require("body-parser");
const { slides } = require("./carousel");
const cors = require("cors");


let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Function to handle the root path
app.get("/api/carousel", async function (req, res) {
  // Access the provided 'page' and 'limt' query parameters

  const noOfSlides = Number(req.query.slides);

  if (noOfSlides > 10) {
    return res.status(400).send("Max 10 slides");
  }

  const slidesToReturn = slides.slice(0, noOfSlides);

  // Return the articles to the rendering engine

  return res.status(200).json(slidesToReturn);
});

app.listen(3600, function () {
  console.log("Server is listening on port 3600");
});
