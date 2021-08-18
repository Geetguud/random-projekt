"use strict";

let currentString = "";

function generate() {
    event.preventDefault();
    let result = [];
    let length = document.getElementById("length").value;
    if (length > 512) {return}
    let useAlphabets = document.getElementById("alphabets").checked;
    let useNumbers = document.getElementById("numbers").checked;
    let textCase = document.getElementById("dropdown").value;
    if (!useAlphabets && !useNumbers) {return}
    for (let i = 0; i < length; i++) {
        result.push(getRandom(useAlphabets, useNumbers, textCase));
    }
    if (result === currentString) {generate(); return}
    currentString = result.join("");
    document.getElementById("display").innerHTML = result.join("");
}

function getRandom(useAlphabets, useNumbers, textCase) {
    let cond, min, max;
    if (useAlphabets && useNumbers) {
        cond = Math.floor(Math.random() * 100) + 1;
        if (cond <= 50) {
            if (textCase === "mixed") {
                let cond2 = Math.floor(Math.random() * 100) + 1;
                if (cond2 <= 50) {return getRandomChar(97, 122)}
                if (cond2 > 50) {return getRandomChar(65, 90)}
            }
            if (textCase === "lower") {return getRandomChar(97, 122)}
            if (textCase === "upper") {return getRandomChar(65, 90)}
        } else {
            return getRandomChar(48, 57)
        }
    } else if (useAlphabets) {
        if (textCase === "mixed") {
            let cond2 = Math.floor(Math.random() * 100) + 1;
            if (cond2 <= 50) {return getRandomChar(97, 122)}
            if (cond2 > 50) {return getRandomChar(65, 90)}
        }
        if (textCase === "lower") {return getRandomChar(97, 122)}
        if (textCase === "upper") {return getRandomChar(65, 90)}
    } else if (useNumbers) {
        return getRandomChar(48, 57)
    }
}

function getRandomChar(min, max) {
    let charCode = Math.floor(Math.random() * (max - min + 1)) + min;
    return String.fromCharCode(charCode)
}