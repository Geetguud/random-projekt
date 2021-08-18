"use strict";

function factorize() {
    let num = document.getElementById("entry").value;
    if (!num) {return} else if (num < 2) {document.getElementById("display").innerHTML = num; return}
    let counter = 2;
    let result = []
    while (counter <= num) {
        if (num % counter === 0) {
            num /= counter;
            result.push(counter);
        } else {
            counter++;
        }
    }
    for (let i = 0, count = 1; i < result.length; i++) {
        if (result[i] == result[i + 1]) {
            result.splice(i, 1);
            count++;
            i--;
        } else {
            result[i] = [result[i], count];
            count = 1;
        }
    }
    document.getElementById("display").innerHTML = result.map(item => `${item[0]}${item[1].toString().sup()}`).join(" x ");
}