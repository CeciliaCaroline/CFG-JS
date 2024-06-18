// Logging
function calculateSum(numbers) {
    let sum=0;

    console.log("Starting sum calculation");

    for (let i=0; i<numbers.length; i++) {
        console.log(`Adding ${numbers[i]} to the sum`);
        // debugger;
        sum += numbers[i];

    }

    console.log(`Total sum ${sum}`);
    return sum;
}

const numbers = [10, 20, 30, 40];
calculateSum(numbers);

// Debugger