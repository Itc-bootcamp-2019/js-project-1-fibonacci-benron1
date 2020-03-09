

// function fib(n) {
//     let numberList = [0, 1];
//     for (let i = 2; i < n + 1; i++) {
//         numberList.push(numberList[i - 2] + numberList[i - 1])
//     }
//     return numberList[n]
// }


// let x = 5;
// let y = fib(x);



// function fib(n) {
//     let firstNum = 1;
//     let secondNum = 0;
//     let sumNum = firstNum + secondNum;


//     for (let i = 0; i < n; i++) {
//         sumNum = firstNum + secondNum;
//         firstNum = secondNum;
//         secondNum = sumNum;
//     }
//     return sumNum;

// // }
// let n;
// y = fib(n);

// isBtn.addEventListener("click", () => {
//     let a = number.value;
//     let b = fib(a);

//     document.getElementById("result").innerText = b;

// });
function goSpinner() {
    let spinner = document.getElementById("loader");
    spinner.classList.toggle("hidden");

}
function goHidden() {
    let hiddenResult = document.getElementById("result");
    hiddenResult.classList.add("hidden");


}
function goUnhidden() {
    let hiddenResult = document.getElementById("result");
    hiddenResult.classList.remove("hidden");

}
function goUnfifty() {
    let hiddenResult1 = document.getElementById("largfifty");
    hiddenResult1.classList.remove("hidden");
}
function goFifty() {
    let hiddenResult1 = document.getElementById("largfifty");
    hiddenResult1.classList.add("hidden");
}
// function errFunction() {
//     const input = document.getElementById("number").value;
//     let x = input;


//     try {
//         if (x === 42) throw "Server Error: 42 is the meaning of life";
//         if (x > 50) throw "Cant be larger than 50";

//     }
//     catch (err) {
//         document.getElementById("result").value = err;
//     }
//     finally {
//         document.getElementById("result").value = "";
//     }
// }





function goFetch() {
    document.getElementById('fortytwo').innerText = "";
    goFifty();
    goHidden();
    goSpinner();

    let number = document.getElementById('number').value;
    if (number > 50) {
        let test = document.getElementById('fiftytxt');
        test.innerText = "Cant be larger than 50";
        goUnfifty();
        goSpinner();
    }
    else {
        const url = 'http://localhost:5050/fibonacci/' + number;
        console.log(url);

        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (response.status === 400) {
                        return response.text();
                    }

                    else {
                        return response.json()

                    }
                })
                .then(data => {
                    if (typeof data === "object") {
                        console.log(data.result)
                        document.getElementById('result').innerText = data.result;
                        goSpinner();
                        goUnhidden()
                    }
                    else {
                        document.getElementById("fortytwo").innerText = "Server Error: " + data;
                        goSpinner();


                    }
                });
        }, 2000)
    }

}
document.getElementById('isBtn').addEventListener("click", goFetch)







// x = 8;
// console.log(fib(x));
// y - fib(x);

// document.getElementById('x').innerText = x;
// document.getElementById('y').innerText = y;
