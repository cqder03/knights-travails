function knightMoves(start, end) {
    const possibleMoves = [
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
      [-1, -2],
      [-1, 2],
      [-2, -1],
      [-2, 1],
    ];
  
    const path = [start];
    const queue = [[start, path]];
    const visited = new Set([start]);
  
    while (queue.length > 0) {
      const [currentPosition, shortestPath] = queue.shift();
      if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
        let pathToString = "";
        shortestPath.forEach((path) => {
          pathToString += `[${path}]`;
        });
        return pathToString;
      }
  
      possibleMoves.forEach((move) => {
        const newX = currentPosition[0] + move[0];
        const newY = currentPosition[1] + move[1];
        const newPosition = [newX, newY];
        const newPositionString = `${newX},${newY}`;
        if (
          newX < 8 &&
          newX >= 0 &&
          newY < 8 &&
          newY >= 0 &&
          !visited.has(newPositionString)
        ) {
          visited.add(newPositionString);
          const newPath = [...shortestPath, newPosition];
          queue.push([newPosition, newPath]);
        }
      });
    }
  
    return [];
  }
  