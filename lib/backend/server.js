// dotenv
require("dotenv").config();

// MongoDB
require("./db.js");

// Model
const Sleep = require("./Schema.sleep");

const fs = require("fs");

const express = require("express");
const app = express();
const bodyParser = require("express").json;
app.use(bodyParser());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello Sleepers");
});

app.get("/api/workout", (req, res) => {
  // Nombre de jours consécutifs
  const nbr = 7;
  // Read le fichier
  let rawdata = fs.readFileSync("./allWorkouts.json");
  let array = JSON.parse(rawdata).reverse();
  // 7 jours consécutifs
  const min = 0;
  const max = array.length - nbr;
  const index_depart = Math.floor(Math.random() * (max - min)) + min; // Nombre random entre 0 et array.length() - nbr
  // On slice l'array (on le découpe)
  const new_array = array.slice(index_depart, index_depart + nbr);
  // On filtre les attributs :
  const end_array = new_array.map((activite) => {
    return {
      date: activite.Start,
      energy: activite["Total Energy"],
    };
  });
  // On envoie le résultat
  res.json(end_array);
});

app.get("/api/time2bed", async (req, res) => {
  const response = await Sleep.find({}).sort({start: -1}).limit(7)
  const getTimeInBed = (itm) => (itm.time_in_bed);
  const timeInBed = response.map(getTimeInBed);
  const avg = timeInBed.reduce((a, b) =>  a + b, 0) / timeInBed.length

  const getHours = (seconds)=>(Math.floor(seconds/3600))
  const getMinutes = (seconds)=>(Math.floor((seconds%3600)/60))
  const today_sleep = response[0].time_in_bed;
  res.send({
    avg: `${getHours(avg)}:${getMinutes(avg)}`,
    today: {
      sleep_time: `${getHours(today_sleep)}:${getMinutes(today_sleep)}`,
      sleep_quality: response[0].sleep_quality
    }
  });
});

app.patch("/api/time2bed", async (req, res) => {
  try {
    const { min, max } = req?.body;
    console.log(min, max);
    if (min === undefined || max === undefined) {
      res.send(401);
      return;
    }
    const response = await Config.findOne();
    const id = response._id;
    await Config.updateOne(
      {
        _id: id,
      },
      {
        min,
        max,
      }
    );
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/time2bed", (req, res) => {
  if (!req.body) return res.status(400)
  const { start, end, sleep_quality, time_bed} = req.body
  const newConfig = new Sleep({
    Start: start,
    End: end,
    "Sleep Quality": sleep_quality,
    "Time in bed (seconds)": time_bed,
  });
  newConfig.save();
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
