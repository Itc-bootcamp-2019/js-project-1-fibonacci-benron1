

// function fib(n) {
//     let numberList = [0, 1];
//     for (let i = 2; i < n + 1; i++) {
//         numberList.push(numberList[i - 2] + numberList[i - 1])
//     }
//     return numberList[n]
// }


// let x = 5;
// let y = fib(x);



function fib(n) {
    let firstNum = 1;
    let secondNum = 0;
    let sumNum = firstNum + secondNum;


    for (let i = 0; i < n; i++) {
        sumNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sumNum;
    }
    return sumNum;

}

let n;
y = fib(n);

isBtn.addEventListener("click", () => {
    let a = number.value;
    let b = fib(a);

    document.getElementById("result").innerText = b;

});
// x = 8;
// console.log(fib(x));
// y - fib(x);

// document.getElementById('x').innerText = x;
// document.getElementById('y').innerText = y;
