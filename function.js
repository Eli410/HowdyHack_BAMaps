//esablished main function
function findClosest(inCoord, coordList) {
  let minDistance = Infinity;
  let closestPoint = null;

  for (let coord of coordList) {
      const distance = Math.sqrt(Math.pow(inCoord[0] - coord[1], 2) + Math.pow(inCoord[1] - coord[2], 2));
      if (distance < minDistance) {
          minDistance = distance;
          closestPoint = coord;
      }
  }

  return closestPoint;
}



const fs = require('fs');

function getClostestStop(inputCoords) {
  const filePath='stops.csv';
  let list=[];
  let rows=null;
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    rows = fileData.split('\n');

    for (let i = 1; i < rows.length; i++) {
      const element=rows[i].split(',')
      list.push(element)
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`The file '${filePath}' was not found.`);
    } else {
      console.error(`An error occurred: ${error.message}`);
    }
  }

  return findClosest(inputCoords, list);
}
  
  
  // Example usage:
  const filePath = 'stops.csv'; // Replace with the path to your CSV file
  console.log(getClostestStop([30.565267, -96.296772]));
