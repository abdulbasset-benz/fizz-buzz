var submitButton = document.querySelector('button');
var currentPage = 1;

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    var inputValue = document.querySelector('input').value;

    
    const fizzBuzzResult = fizzBuzz(inputValue);

   
    const table = renderOutput(fizzBuzzResult);

    
    const outputDiv = document.getElementById('outputTable');
     
    outputDiv.appendChild(table);
});

function fizzBuzz(inputValue) {
    var fizzBuzzResult = [];

    for (let i = 1; i <= inputValue; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzResult.push("FizzBuzz");
        } else if (i % 3 === 0) {
            fizzBuzzResult.push('Fizz');
        } else if (i % 5 === 0) {
            fizzBuzzResult.push('Buzz');
        } else {
            fizzBuzzResult.push(i);
        }
    }

    return fizzBuzzResult;
}

function renderOutput(fizzBuzzResult) {
    const container = document.getElementById("outputTable");
    const table = document.createElement("table");

    for (let i = 0; i < fizzBuzzResult.length; i++) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = fizzBuzzResult[i];
        row.appendChild(cell);
        table.appendChild(row); 
    }

    return table;
}

