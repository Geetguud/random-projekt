"use strict";

function compute() {
    let inputData = document.getElementById("input-data").value
        .split(/\s/)
        .map(each => Number(each))
        .filter(each => each)
        .sort((a,b) => a - b);
    document.getElementById("mean").innerHTML = getMean(inputData);
    document.getElementById("mode").innerHTML = getMode(inputData);
    document.getElementById("median").innerHTML = getMedian(inputData);
    animate();
}

function getMean(data) {
    let mean = data.reduce((a, b) => a + b) / data.length;
    return mean
}

function getMode(data) {
    let frequency = [];
    let nums = Array.from(new Set(data));
    for (let i = 0, freq = 0; i < data.length; i++) {
        freq++;
        if (data[i] !== data[i + 1]) {
            frequency.push(freq);
            freq = 0;
        }
    }
    let max = frequency.reduce((a, b) => Math.max(a, b))
    if (frequency.filter(each => each === max).length > 1) {return "No mode"}
    return nums[frequency.indexOf(max)]
}

function getMedian(data) {
    let median;
    if (data.length % 2 === 1) {
        median = data[Math.floor(data.length / 2)];
    } else {
        median = (data[data.length / 2 - 1] + data[data.length / 2]) / 2
    }
    return median
}

function animate() {
    ["mean", "mode", "median"].forEach(function(each) {
        document.getElementById(each).classList.remove("fadeto");
        void document.getElementById(each).offsetWidth;
        document.getElementById(each).classList.add("fadeto");
    })
}