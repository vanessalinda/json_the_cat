const { fetchBreedDescription } = require("./breedFetcher");
const breedName = process.argv[2];

const printMessage = (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
};

fetchBreedDescription(breedName, printMessage);
