const WEATHER_API_BASE = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.API_KEY;

module.exports = args => {
  const https = require("https");
  const { parseArgs } = require("./util");

  let { arguments = "today", options } = parseArgs(args);

  options = Object.assign(
    {
      location: "bangalore",
    },
    options
  );

  https
    .get(
      `${WEATHER_API_BASE}?q=${options.location}&apikey=${API_KEY}`,
      response => {
        let data = "";

        response.on("data", chunk => {
          data += chunk;
        });

        response.on("end", () => {
          const parsedResponse = JSON.parse(data);
          const output = {
            City: parsedResponse.name,
            "Current Temperature": parsedResponse.main.temp - 32 / 1.8,
            "Min Temp": parsedResponse.main.temp_min - 32 / 1.8,
            "Max Temp": parsedResponse.main.temp_max - 32 / 1.8,
          };

          console.dir(output);
        });
      }
    )
    .on("error", error => {
      console.dir(error);
    });
};
