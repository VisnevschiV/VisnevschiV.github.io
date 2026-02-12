const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");
const buttonRow = document.getElementById("buttonRow");

const moveNoButton = () => {
    const rowRect = buttonRow.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = Math.max(0, rowRect.width - btnRect.width - 12);
    const maxY = Math.max(0, rowRect.height - btnRect.height - 12);
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

const createConfetti = () => {
    for (let i = 0; i < 36; i += 1) {
        const piece = document.createElement("div");
        piece.className = "confetti";
        const size = 6 + Math.random() * 8;
        piece.style.width = `${size}px`;
        piece.style.height = `${size}px`;
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.background = i % 2 === 0 ? "#f46b8a" : "#ffd4b8";
        piece.style.animationDelay = `${Math.random() * 0.4}s`;
        piece.style.borderRadius = i % 3 === 0 ? "50%" : "2px";
        document.body.appendChild(piece);

        piece.addEventListener("animationend", () => {
            piece.remove();
        });
    }
};

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener("click", () => {
    response.textContent = "You just made my whole year.";
    createConfetti();
    yesBtn.disabled = true;
    noBtn.disabled = true;
});
