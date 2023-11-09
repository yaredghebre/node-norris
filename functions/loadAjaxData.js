const fs = require("fs");
const path = require("path");

const loadAjaxData = (onSuccess) => {
  const jokesPath = path.join(__dirname, "../db", "norrisDB.json");
  const url = "https://api.chucknorris.io/jokes/random";
  const jokes = JSON.parse(fs.readFileSync(jokesPath, "utf-8"));

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (jokes.includes(data.value)) {
        loadAjaxData(onSuccess);
      } else {
        jokes.push(`${data.value}`);
        fs.writeFileSync(jokesPath, JSON.stringify(jokes));
        onSuccess(jokes);
      }
    });
};

module.exports = loadAjaxData;
