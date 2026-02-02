function handleYes() {
    alert("I love you too baby. I'm sorry for yesterday.");
    console.log("Yes button clicked!"); // Check your browser console (F12) for this!

    const card = document.getElementById('mainCard');
    const container = document.getElementById('videoContainer');
    const video = document.getElementById('myVideo');

    // Hide the card
    if (card) card.style.setProperty("display", "none", "important");

    // Show the container
    if (container) {
        container.style.setProperty("display", "flex", "important");
        console.log("Container is now set to flex");
    }

    // Play the video
    if (video) {
        video.load(); // Reloads the video source
        video.play().then(() => {
            console.log("Video playing successfully");
        }).catch(err => {
            console.error("Video error:", err);
            alert("The video file 'valentine_video.mp4' was not found in your folder!");
        });
    }
}

// Function for when NO is clicked
function moveNo() {
    const noBtn = document.getElementById('noBtn');

    // Calculate a random position within the browser window
    // We subtract the button width/height so it doesn't go off-screen
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new coordinates
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

