'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const input = console.readLine();
    //DO YOUR CODE HERE
    // console.log(input);
    // print(input);
    for(let i=1; i<=input; i++)
{
    if(i >= 50)
    {
        console.log("Max. input is 50")
        break;
    }
    else{
       
        if(i%2 != 0)
        {
            console.log("add")
        }else{
            console.log(i);
        }
    }
}

}