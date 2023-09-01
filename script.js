var form = document.querySelector('form');
var submitButton = document.querySelector('button');
var displayTableDiv = document.querySelector('display-table');


// creating the table for output //

form.addEventListener('click', function(event){
    event.preventDefault();

    var inputValue = document.querySelector('input').value;

            // Call the fizzBuzz function to generate the result
            const fizzBuzzResult = fizzBuzz(inputValue);

            // Call the renderOutput function to display the result
            const table = renderOutput(fizzBuzzResult);

            // Clear the previous result
            const outputDiv = document.getElementById('outputTable');
            outputDiv.innerHTML = '';

            // Append the new result to the output container
            outputDiv.appendChild(table);
    
});

// game logic //



function fizzBuzz(inputValue) {
    var fizzBuzzResult = [];

    for (let i = 1; i <= inputValue; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzResult.push("fizzBuzz");
        } else if (i % 3 === 0) {
            fizzBuzzResult.push('fizz');
        } else if (i % 5 === 0) {
            fizzBuzzResult.push('buzz');
        } else {
            fizzBuzzResult.push(i);
        }
    }

    return fizzBuzzResult;
}


// rendering the output //

function renderOutput(fizzBuzzResult) {
    const table = document.createElement("table");
    const tableRow = document.createElement("tr");

    for (let i = 0; i < fizzBuzzResult.length; i++) {
        const th = document.createElement("th");
        th.textContent = fizzBuzzResult[i]; // Use fizzBuzzResult[i] to access each value
        tableRow.appendChild(th);
    }

    table.appendChild(tableRow);

    return table; // Return the table element
}
