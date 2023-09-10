function readCsv(filename){
  const fs = require('fs');
  let list=[];
  try {
    const fileData = fs.readFileSync(filename, 'utf8');
    const rows = fileData.split('\n');
    
    for (let i = 1; i < rows.length; i++) {
      const elements=rows[i].split(',')
      list.push(elements)
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`The file '${filename}' was not found.`);
    } else {
      console.error(`An error occurred: ${error.message}`);
    }
  }

  return list;
}



function findClosest(inCoord, coordList) {
  let minDistance = Infinity;
  let closestPoint = null;

  for (let coord of coordList) {
      const distance = Math.sqrt(Math.pow(inCoord[0] - coord[0], 2) + Math.pow(inCoord[1] - coord[1], 2));
      if (distance < minDistance) {
          minDistance = distance;
          closestPoint = coord;
      }
  }

  return closestPoint;
}

function getClostestStop(inputCoords) {
  const busStops=readCsv('stops.csv')

  let list=[]

  for(let row of busStops){
    list.push([Number(row[1]),Number(row[2])])
  }

  return findClosest(inputCoords, list)
}

function findIntendedStop(id_num){
  const coord_list=readCsv('stops.csv')
  for(let i = 1; i < coord_list.length;i++){
    if(coord_list[i][0] == id_num){
      return [coord_list[i][1],coord_list[i][2]]
    
    }
  }
  return null;
}

