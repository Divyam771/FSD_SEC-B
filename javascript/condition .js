let num = 153;
let original = num;
let sum = 0;
let digits = num.toString().length;

while (num > 0) {
    let digit = num % 10;
    sum += digit ** digits;
    num = Math.floor(num / 10);
}

if (sum === original) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}