

// function fib(n) {
//     let numberList = [0, 1];
//     for (let i = 2; i < n + 1; i++) {
//         numberList.push(numberList[i - 2] + numberList[i - 1])
//     }
//     return numberList[n]
// }


// let x = 5;
// let y = fib(x);

function fib(x) {
    let b = 1;
    let c = 0;

    for (let i = 1; i < x; i++) {
        y = b + c;
        c = b;
        b = y;
    }
    return y;
}
x = 8;
console.log(fib(x));
y - fib(x);

document.getElementById('x').innerText = x;
document.getElementById('y').innerText = y;
