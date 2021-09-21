let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// remove last strength of the array
secretMessage.pop();
// check using .length, prints 23
console.log(secretMessage.length);
// add two separate strings to end of array
secretMessage.push('to', 'Program');
// change word easily to word right
secretMessage[7] = 'right';
// remove first string of array
secretMessage.shift();
// add string Programming to beginning
secretMessage.unshift('Programming');
// remove strings get, right, the, first, time replaced with know using array.splice(indexToStart, numberOfIndices, 'stringToAdd');
secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' '));