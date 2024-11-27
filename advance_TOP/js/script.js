function isLegal([ X, Y ]) {
  if (X < 0 || X > 7 || Y < 0 || Y > 7) {
    return false;
  }
  return true;
}
function knight([ startX, startY ], [ endX, endY ]) {
  let Walk = [
    [-1, -2],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-2, -1],
    [2, 1],
    [-2, 1],
    [2, -1],
  ];
  let Q = [];
  Q.unshift([startX, startY, [[startX, startY]]]);
  console.log("Q:",Q)
  let flag = false;
  while (Q.length ) {

    let now = Q.shift();
    if (now[0] == endX && now[1] == endY) {
      flag = true;
      console.log(now[2]);
    } else if (!flag) {
      for (let i = 0; i < 8; i++) {
        newX = now[0] + Walk[i][0];
        newY = now[1] + Walk[i][1];
        if (isLegal([newX, newY])) {
          Q.push([newX,newY,[...now[2],[newX,newY]]])
        }
      }
    }
  }
}
knight([0,0],[3,3])