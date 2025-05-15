  const counterParagraph = document.getElementById("counter");
    const incrementButton = document.getElementById("incrementBtn");

    incrementButton.addEventListener("click", () => {
        const currentValue = parseInt(counterParagraph.textContent);
        alert(currentValue);  // Changed: only alert the number
        counterParagraph.textContent = currentValue + 1;
    });
