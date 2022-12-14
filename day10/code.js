const day = '10';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n')
    .map((line) => {
        const [letter, number] = line.split(" ");
        return {
          direction: letter,
          number: parseInt(number),
        };
      });

//console.log(input);


function part1() {
    //do something
    var signal = [];
    var cycle = [1];
    var X = 1;

    function signalCheck(X) {
        if (cycle.length%40 == 20) {
            signal.push(X*(cycle.length));
        }
    }

    for (var i=0; i<input.length; i++) {
        cycle.push(X);
        signalCheck(X);
        if (input[i].direction == 'addx') {
            cycle.push(X);
            X += input[i].number;
            signalCheck(X);
        }  
        var count = cycle.length;
        console.log({ count, X, signal });
    }
    console.log(signal.reduce((a,b) => a+b, 0));
}

function part2() {
    //do something
    var cycle = [1];
    var sprites = '';
    var X = 1;

    function pixelDraw(X) {
        if ([(X-1),X,(X+1)].indexOf(sprites.length%40) > -1) {
            sprites += '#';
        } else {
            sprites += '.';
        }
    }

    for (var i=0; i<input.length; i++) {
        cycle.push(X);
        pixelDraw(X);
        if (input[i].direction == 'addx') {
            cycle.push(X);
            pixelDraw(X);
            X += input[i].number;
        }
        console.log(cycle.length, X);
    }
    console.log(sprites);
}

part1();
part2();