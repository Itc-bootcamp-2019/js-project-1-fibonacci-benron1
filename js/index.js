function goSpinner1() {
    let spinner = document.getElementById("loader1");
    spinner.classList.toggle("hidden");

}
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
    let hiddenRed = document.getElementById("number");
    hiddenRed.classList.add("red");
}
function goFifty() {
    let hiddenResult1 = document.getElementById("largfifty");
    hiddenResult1.classList.add("hidden");
    let hiddenRed = document.getElementById("number");
    hiddenRed.classList.remove("red")
}
const resultHistory = document.getElementById("resultsBox");

let chkBox = document.getElementById("chkBox").checked;

function ifChecked() {
    setTimeout(() => {
        function fib(n) {
            if (n === "0" || n === "1") {
                console.log(n);
                return n;
            }
            else {
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

        }
        let n;
        y = fib(n);

        let a = number.value;
        let b = fib(a);
        goSpinner();
        goUnhidden();

        document.getElementById("result").innerText = b;

    }, 2000)
}

displayResults()
function displayResults() {
    resultHistory.innerHTML = ("");
    fetch("http://localhost:5050/getFibonacciResults")
        .then(response => response.json())
        .then(function fetchResult(data) {
            console.log(data.results)
            newResults(data.results);

        });
    function newResults(listOfResults) {
        for (let i = 0; i < listOfResults.length; i++) {
            const resultsWrapper = document.createElement("div");
            resultsWrapper.classList.add("list-history");

            const listNumber = document.createElement("span");
            listNumber.innerHTML = "Fibonacci of ";
            const boldNumber = document.createElement("strong");
            boldNumber.innerHTML = listOfResults[i].number;
            listNumber.append(boldNumber);
            listNumber.innerHTML += " is ";
            const boldResult = document.createElement("strong");
            boldResult.innerHTML = listOfResults[i].result;
            listNumber.append(boldResult);
            listNumber.innerHTML +=
                ". Calculated at: " + new Date(listOfResults[i].createdDate);

            resultsWrapper.append(listNumber);
            resultHistory.append(resultsWrapper);
        }
    }
}
function goFetch() {
    let chkBox = document.getElementById("chkBox").checked;
    document.getElementById('fortytwo').innerText = "";
    goFifty();
    goHidden();
    goSpinner();
    console.log(chkBox)
    if (chkBox === false) {
        ifChecked()
    }

    else {
        console.log("hey there")

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
        displayResults()
        goSpinner1();
        setTimeout(() => {
            goSpinner1();
        }, 2000)
    }
}
document.getElementById('isBtn').addEventListener("click", goFetch)
