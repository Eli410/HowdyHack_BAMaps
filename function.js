// jagged array - name of stop, bus#, lat, long
let bus_marker_info = []

const fs = require("fs");
const { parse } = require("csv-parse");
// replace example with actual csv file name
fs.createReadStream("./example.csv"); 
