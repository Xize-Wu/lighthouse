function finalPosition(moves){
  let coordinate = [0,0];
  let num = 0;
  for (const move of moves) {  
    let y = coordinate [1]
    let x = coordinate [0]
    if (move === "north"){
      y = y+1
      coordinate = [x,y]
    };

    if (move === "south"){
      y = y-1
      coordinate = [x,y]
    }

    if (move === "west"){
      x = x - 1
      coordinate = [x,y]
    }

    if (move === "east"){
      x = x + 1
      coordinate = [x,y]
    }

  }
  console.log(coordinate);
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
finalPosition(moves)