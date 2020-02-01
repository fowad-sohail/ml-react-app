import React from 'react';

var sepalLengths = []
for (var i = 4; i <= 7; i = +(i + 0.1).toFixed(1)) {
    sepalLengths.push(<option key={i} value={i}>{i}</option>);
}
var sepalWidths = []
for (var i = 2; i <= 4; i = +(i + 0.1).toFixed(1)) {
    sepalWidths.push(<option key={i} value={i}>{i}</option>);
}
var petalLengths = []
for (var i = 1; i <= 6; i = +(i + 0.1).toFixed(1)) {
    petalLengths.push(<option key={i} value={i}>{i}</option>);
}
var petalWidths = []
for (var i = 0.1; i <= 3; i = +(i + 0.1).toFixed(1)) {
    petalWidths.push(<option key={i} value={i}>{i}</option>);
}

export { sepalLengths, sepalWidths, petalLengths, petalWidths };