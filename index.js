console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('LaunchCode'));


console.log(7 == "7");
console.log(0 == false);
console.log(0 == '');

console.log('0' == 0);
console.log(0 == '');
console.log('0' == '');

console.log(7 == "7");
console.log(0 === false);
console.log(0 === '');

console.log(4 === '4');

console.log(7 > 5 && 5 > 3);
console.log(7 > 5 && 2 > 3);
console.log(2 > 3 && 'dog' === 'cat');

console.log(7 > 5 || 5 > 3);
console.log(7 > 5 || 2 > 3);
console.log(2 > 3 || 'dog' === 'cat');

console.log(! true);
console.log(! false);

console.log( !(5 > 7) );
console.log( !('dog' === 'cat') );


console.log(5*3 > 10 && 4 + 6 === 11);

console.log(4 < 3 || 2 < 3);






let billHasBeenPaid = false;

if (!billHasBeenPaid) {
   console.log("Your bill is due soon!");
}


//let x = 10;
//let y = 20;

//if (x > y) {
  // console.log("x is greater than y");
//} else if (x < y) {
  // console.log("x is less than y");
//} else {
  // console.log("x and y are equal");
//}



let x = 10;
let y = 10;

if (x > y) {
    console.log("x is greater than y");
} else if (x < y) {
    console.log("x is less than y");
}
//if (num % 2 === 0 && num > 3) {
  // console.log(num, "is even");
   //console.log(num, "is greater than 3");
//}

let x = 10;
let y = 20;

if (x > y) {
   console.log("x is greater than y");
} else if (x < y) {
   console.log("x is less than y");
} else if (x % 5 === 0) {
   console.log("x is divisible by 5");
} else if (x % 2 === 0) {
   console.log("x is even");
}