
// Get references to the elements
const counterParagraph = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");

// Add click event listener to the button
incrementButton.addEventListener("click", () => {
    // Get the current counter value
    const currentValue = parseInt(counterParagraph.textContent);

    // Show alert with the current value (before increment)
    alert("Current value before increment: " + currentValue);

    // Increment the counter
    const newValue = currentValue + 1;

    // Update the paragraph with the new value
    counterParagraph.textContent = newValue;
});
