
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix == "undefined" || matrix.length == 0){
    return [];
  }
  else {
    for (let j = 1; j < matrix.length; j = j + 2){
      matrix[j] = matrix[j].reverse()
    }
    matrix = matrix.join(",").split(",");
    for (let j = 0; j < matrix.length; j++){
      matrix[j] = Number(matrix[j]);
    }
  }
  return matrix; 
}
