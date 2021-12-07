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

// set our api 'time2bed'
app.get("/api/time2bed", async (req, res) => {
  const response = await Sleep.find({}).sort({ start: -1 }).limit(7);
  const getTimeInBed = (itm) => itm.time_in_bed;
  const timeInBed = response.map(getTimeInBed);
  // calculate the average of the 7 last rows
  const avg = timeInBed.reduce((a, b) => a + b, 0) / timeInBed.length;

  // convert the seconds in hours and minutes
  const getHours = (seconds) => Math.floor(seconds / 3600);
  const getMinutes = (seconds) => Math.floor((seconds % 3600) / 60);
  const today_sleep = response[0].time_in_bed;

  // send the response to the front
  res.send({
    avg: `${getHours(avg)}:${getMinutes(avg)}`,
    today: {
      sleep_time: `${getHours(today_sleep)}:${getMinutes(today_sleep)}`,
      sleep_quality: response[0].sleep_quality,
    },
  });
});

// set the 'get' method
app.get("/api/time2bed/many/:r/:s", async (req, res) => {
  const { r, s } = req.params;
  const skip = parseInt(s);
  const limit = parseInt(r);
  const response = await Sleep.find({})
    .sort({ start: -1 })
    .skip(skip)
    .limit(limit);
  if (!response) return res.send(400);
  res.send(response);
});

// set the 'patch' method
app.patch("/api/time2bed", async (req, res) => {
  try {
    if (!req.body) return res.status(400);
    const { start, sleep_quality, time_in_bed, id } = req.body;
    await Sleep.updateOne(
      {
        _id: id,
      },
      {
        start,
        sleep_quality,
        time_in_bed,
      }
    );
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
});

// set the 'post' method
app.post("/api/time2bed", (req, res) => {
  if (!req.body) return res.status(400);
  const { start, sleep_quality, time_in_bed } = req.body;
  console.log(req.body);
  const newSleep = new Sleep({
    start,
    sleep_quality,
    time_in_bed,
  });
  newSleep.save(function (err) {
    if (err) return res.status(400);
    res.send("OK");
  });
});

// set the 'delete' method
app.delete("/api/time2bed", async (req, res) => {
  if (!req.body) return res.status(400);
  const { id } = req.body;
  await Sleep.deleteOne({ _id: id });
  return res.send("ok: deleted");
});

// recover the right port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
