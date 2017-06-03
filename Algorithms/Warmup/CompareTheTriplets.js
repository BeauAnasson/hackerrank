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
  let aPoints = 0, bPoints = 0;

  let a = readLine().split(' ');
  a = a.map(Number);

  let b = readLine().split(' ');
  b = b.map(Number);

  for(let i = 0; i < 3; ++i) {
    if(a[i] > b[i]) {
      ++aPoints;
    } else if(b[i] > a[i]) {
      ++bPoints;
    }
  }

  console.log(aPoints + ' ' + bPoints);
}
