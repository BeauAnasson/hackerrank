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
  let numCandles = parseInt(readLine());
  let candles = readLine().split(' ').map(Number);

  let tallestCandle = candles[0],
      candlesBlown = 0;

  for(let i = 0; i < numCandles; ++i) {
    if(candles[i] > tallestCandle) {
      tallestCandle = candles[i];
      candlesBlown = 1;
    } else if(candles[i] == tallestCandle) {
      ++candlesBlown;
    }
  }

  console.log(candlesBlown);
}
