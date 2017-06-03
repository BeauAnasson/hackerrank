process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split('\n');
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  let firstDiagSum = 0, secondDiagSum = 0;

  let n = parseInt(readLine());
  let matrixRow = [];

  for(let i = 0; i < n; ++i) {
    matrixRow = readLine().split(' ');
    firstDiagSum += parseInt(matrixRow[i]);
    secondDiagSum += parseInt(matrixRow[n-1-i]);
  }

  let diagDiff = Math.abs(firstDiagSum - secondDiagSum);
  console.log(diagDiff);
}
