const fs = require("fs");
const process = require("process");

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

cat(process.argv[2]);
