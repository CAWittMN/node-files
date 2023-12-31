const fs = require("fs");
const process = require("process");
const axios = require("axios");

const cat = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
};

const webCat = async (url) => {
  try {
    let res = await axios.get(url);
    console.log(res.data);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

let path = process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
