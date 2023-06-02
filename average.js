// Write a JavaScript program to calculate the average value of array elements.

const array = [20, 21, 22, 23, 24, 25,];
let sum = 0;
let count = 0;
for(let i =0; i < array.length; i++){
    sum = sum + array[i];
    // sum += array[i];
    count++;
}
console.log(sum/count);