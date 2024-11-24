window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    audio.volume = 0.5; // Set initial volume (0.0 to 1.0)
    audio.play(); // Start playing the audio

    // Optional: Add event listeners for play and pause buttons if needed
    audio.addEventListener("play", () => {
        console.log("Music is playing");
    });

    audio.addEventListener("pause", () => {
        console.log("Music is paused");
    });
});