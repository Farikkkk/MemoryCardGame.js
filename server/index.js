// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();
// const PORT = process.env.PORT || 5000;

// const allowedOrigins = ["http://127.0.0.1:5501", "http://localhost:5501"];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true); // allow requests with no origin
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg =
//           "The CORS policy for this site does not allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//     credentials: true, // Allow cookies to be sent with requests
//   })
// );
// app.use(bodyParser.json());

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../public")));

// // Mock database for storing best results
// let bestResults = {
//   12: { time: Infinity, steps: Infinity, username: "" },
//   16: { time: Infinity, steps: Infinity, username: "" },
//   24: { time: Infinity, steps: Infinity, username: "" },
// };

// // Load initial data from file (if exists)
// const dataFilePath = path.join(__dirname, "bestResults.json");
// if (fs.existsSync(dataFilePath)) {
//   bestResults = JSON.parse(fs.readFileSync(dataFilePath));
// }

// // Endpoint to get the best results
// app.get("/results", (req, res) => {
//   res.json(bestResults);
// });

// // Endpoint to update the best result
// app.post("/results", (req, res) => {
//   const { level, time, steps, username } = req.body;
//   if (
//     bestResults[level].time > time ||
//     (bestResults[level].time === time && bestResults[level].steps > steps)
//   ) {
//     bestResults[level] = { time, steps, username };
//     fs.writeFileSync(dataFilePath, JSON.stringify(bestResults));
//     res.status(200).send("New record saved!");
//   } else {
//     res.status(200).send("No new record.");
//   }
// });

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//!>>>>>>>>>>>>>>>>

// const path = require("path"); // Добавьте эту строку
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();
// const PORT = process.env.PORT || 5000;

// const allowedOrigins = ["http://127.0.0.1:5501", "http://localhost:5501"];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true); // allow requests with no origin
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg =
//           "The CORS policy for this site does not allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//     credentials: true, // Allow cookies to be sent with requests
//   })
// );

// app.use(bodyParser.json());

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../public")));

// // Mock database for storing best results
// let bestResults = {
//   12: { time: Infinity, steps: Infinity, username: "" },
//   16: { time: Infinity, steps: Infinity, username: "" },
//   24: { time: Infinity, steps: Infinity, username: "" },
// };

// // Load initial data from file (if exists)
// const dataFilePath = path.join(__dirname, "bestResults.json");
// if (fs.existsSync(dataFilePath)) {
//   bestResults = JSON.parse(fs.readFileSync(dataFilePath));
// }

// // Endpoint to get the best results
// app.get("/results", (req, res) => {
//   res.json(bestResults);
// });

// // Endpoint to update the best result
// app.post("/results", (req, res) => {
//   const { level, time, steps, username } = req.body;
//   if (
//     bestResults[level].time > time ||
//     (bestResults[level].time === time && bestResults[level].steps > steps)
//   ) {
//     bestResults[level] = { time, steps, username };
//     fs.writeFileSync(dataFilePath, JSON.stringify(bestResults));
//     res.status(200).send("New record saved!");
//   } else {
//     res.status(200).send("No new record.");
//   }
// });

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//!>>>>>>>>>>>>>>>>>

// const path = require("path");
// const express = require("express");
// const cors = require("cors");
// const fs = require("fs").promises;

// const app = express();

// app.use(
//   cors({
//     origin: "https://floating-meadow-78073-2097b21b377b.herokuapp.com",
//   })
// );

// const allowedOrigins = [
//   "https://floating-meadow-78073-2097b21b377b.herokuapp.com",
// ];

// const PORT = process.env.PORT || 5000;

// const allowedOrigins = [
//   "http://127.0.0.1:5501",
//   "http://localhost:5501",
//   "https://your-heroku-app.herokuapp.com",
//   "https://floating-meadow-78073-2097b21b377b.herokuapp.com",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       console.log(`Request from origin: ${origin}`); // Add this line
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg =
//           "The CORS policy for this site does not allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.static(path.join(__dirname, "../public")));

// let bestResults = {
//   12: { time: Infinity, steps: Infinity, username: "" },
//   16: { time: Infinity, steps: Infinity, username: "" },
//   24: { time: Infinity, steps: Infinity, username: "" },
// };

// const dataFilePath = path.join(__dirname, "bestResults.json");

// (async () => {
//   try {
//     const data = await fs.readFile(dataFilePath, "utf8");
//     bestResults = JSON.parse(data);
//   } catch (err) {
//     console.error(
//       "No initial data file found or error reading the file:",
//       err.message
//     );
//   }
// })();

// app.get("/results", (req, res) => {
//   res.json(bestResults);
// });

// app.post("/results", async (req, res) => {
//   const { level, time, steps, username } = req.body;
//   if (
//     bestResults[level].time > time ||
//     (bestResults[level].time === time && bestResults[level].steps > steps)
//   ) {
//     bestResults[level] = { time, steps, username };
//     try {
//       await fs.writeFile(dataFilePath, JSON.stringify(bestResults));
//       res.status(200).send("New record saved!");
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Error saving the record.");
//     }
//   } else {
//     res.status(200).send("No new record.");
//   }
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://floating-meadow-78073-2097b21b377b.herokuapp.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

let bestResults = {
  12: { time: Infinity, steps: Infinity, username: "" },
  16: { time: Infinity, steps: Infinity, username: "" },
  24: { time: Infinity, steps: Infinity, username: "" },
};

const dataFilePath = path.join(__dirname, "bestResults.json");

(async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    bestResults = JSON.parse(data);
  } catch (err) {
    console.error(
      "No initial data file found or error reading the file:",
      err.message
    );
  }
})();

app.get("/results", (req, res) => {
  console.log("GET /results endpoint hit");
  res.json(bestResults);
});

app.post("/results", async (req, res) => {
  const { level, time, steps, username } = req.body;
  if (
    bestResults[level].time > time ||
    (bestResults[level].time === time && bestResults[level].steps > steps)
  ) {
    bestResults[level] = { time, steps, username };
    try {
      await fs.writeFile(dataFilePath, JSON.stringify(bestResults));
      res.status(200).send("New record saved!");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error saving the record.");
    }
  } else {
    res.status(200).send("No new record.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
