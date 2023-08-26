console.log("hello world");

let answer = parseInt(prompt("please enter your number : "));

for (i = 1;i <= answer ; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    } else if (i % 5 === 0){
        console.log("buzz");
    } else if (i % 3 === 0){
        console.log("fizz");
    } else {
        console.log(i);
    }
}