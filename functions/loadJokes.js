const fs = require("fs");
const path = require("path");

const loadJokes = () => {
  const jokesPath = path.join(__dirname, "../db", "norrisDB.json");
  try {
    const jokes = fs.readFileSync(jokesPath, "utf-8");
    return JSON.parse(jokes);
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

module.exports = loadJokes;
