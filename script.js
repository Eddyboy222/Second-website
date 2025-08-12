const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const  newAdviceBtn = document.getElementById("new-advice");

async function fetchAdvice () {
    try {
        const response = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"});
        const data = await response.json();
        adviceId.textContent = `Advice #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.error;{"Error fetching advice:", error};
        adviceText.textContent = "Failed to fetch advice. Please Try again later.";
    }
}

// load first advice on page load
fetchAdvice();

// Fetch new advice on button click
newAdviceBtn.addEventListener("click", fetchAdvice);

