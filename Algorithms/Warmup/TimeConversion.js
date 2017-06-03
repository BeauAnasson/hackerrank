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

function convertTo24Hour(time12Hour) {
  let time24Hour = '';

  if(time12Hour.substring(8, 10) == 'PM') {
    if(time12Hour.substring(0, 2) == '12') {
      time24Hour = time12Hour.substring(0, 8);
    } else {
      time24Hour += parseInt(time12Hour.substring(0, 2)) + 12;
      time24Hour += time12Hour.substring(2, 8);
    }
  } else {
    if(time12Hour.substring(0, 2) == '12') {
      time24Hour += '00' + time12Hour.substring(2, 8);
    } else {
      time24Hour = time12Hour.substring(0, 8);
    }
  }

  return time24Hour;
}

function main() {
  let time12Hour = readLine();
  let time24Hour = convertTo24Hour(time12Hour);

  console.log(time24Hour);
}
