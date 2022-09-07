const request = require("request");
const breed = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("No catz here!");
    } else if (response.statusCode === 404) {
      console.log(data.message);
    } else {
      console.log(data[0].description);
    }
  }
);
