const http = require("http");
const dotenv = require("dotenv");

const { loadAjaxData } = require("./functions/loadAjaxData");

dotenv.config();

const port = +process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  loadAjaxData((jokes) => {
    const html = [];
    html.push("<ul>");

    for (const joke of jokes) {
      html.push(`<li>${joke.value}</li>`);
    }

    html.push("</ul>");

    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end(html.join(""));
  });
});

server.listen(port, () => {
  console.log("Server is running on http:/localhost:" + port);
});
