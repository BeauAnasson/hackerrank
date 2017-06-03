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
  let numVals = 5;
  let arr = readLine().split(' ');
  arr = arr.map(Number);

  let sum = arr[0],
      minNum = arr[0],
      maxNum = arr[0];

  for(let i = 1; i < numVals; ++i) {
    sum += arr[i];

    if(arr[i] < minNum) {
      minNum = arr[i];
    } else if(arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  let minSum = sum - maxNum,
      maxSum = sum - minNum;

  console.log(minSum + ' ' + maxSum);
}
