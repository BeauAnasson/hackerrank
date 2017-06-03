process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  let n = parseInt(readLine());
  let arr = readLine().split(' ');
  arr = arr.map(Number);

  let ans = arr.reduce((x, y) => x + y);
  console.log(ans);
}
