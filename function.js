
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// 1. Make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    // Generate random coordinates within the window
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. Success message
yesBtn.addEventListener('click', () => {
    alert("I knew you'd say yes! ❤️");
    document.querySelector('h1').innerHTML = "YAY! See you soon! 😘";
});
