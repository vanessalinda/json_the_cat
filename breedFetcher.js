const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error);
        return;
      }
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("No catz here!");
      } else if (response.statusCode === 404) {
        callback(data.message);
      } else {
        callback(error, data[0].description);
      }
    }
  );
};

//fetchBreedDescription(breedName, printMessage);

module.exports = { fetchBreedDescription };
