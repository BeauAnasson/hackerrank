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
  let n = parseInt(readLine());

  for(let i = 0; i < n; ++i) {
    for(let j = 0; j < n; ++j) {
      if(j >= (n-1-i)) {
        process.stdout.write('#');
      } else {
        process.stdout.write(' ');
      }
    }
    console.log(''); // newline
  }
}
