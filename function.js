
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainText = document.getElementById('main-text');

// Function to move the "No" button randomly
noBtn.addEventListener('mouseover', () => {
    // Calculate new position (subtracting button size to keep it in view)
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Logic for when they click "Yes"
yesBtn.addEventListener('click', () => {
    mainText.innerHTML = "I knew you'd say yes! ❤️";
    noBtn.style.display = 'none'; // Hide the pesky No button
    yesBtn.style.transform = 'scale(1.5)';
});
