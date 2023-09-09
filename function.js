// jagged array - name of stop, bus#, lat, long
let bus_marker_info = []

const fs = require("fs");
const { parse } = require("csv-parse");
// replace example with actual csv file name
fs.createReadStream("./example.csv"); 
fs.createReadStream("./example.csv")
  .pipe(parse({ delimiter: ",", columns: true, ltrim: true }))
  .on("data", function (row) {
    console.log(row);
    bus_marker_info.push(row)
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("finished");
  });
