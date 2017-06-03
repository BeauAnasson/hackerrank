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
  let totalPos = 0, totalNeg = 0;

  let n = parseInt(readLine());
  let arr = readLine().split(' ');
  arr.forEach((x) => {
    x = parseInt(x);
    if(x > 0) {
      ++totalPos;
    } else if(x < 0) {
      ++totalNeg;
    }
  });

  // Log the ratio of positive, negative and zero values in input respectively.
  console.log(totalPos/n);
  console.log(totalNeg/n);
  console.log((n-totalPos-totalNeg)/n);
}
