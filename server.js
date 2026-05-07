const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.get("/processes", async (req, res) => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/naderlabib-afk/support-processes/refs/heads/main/processes.json",
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3.raw"
        }
      }
    );

    res.json(response.data);

  } catch (err) {
    res.status(500).send("Error loading JSON");
  }
});

app.listen(PORT, () => {
  console.log("Server running");
});
