// Function to animate the header text
function animateHeaderText() {
    const headerText = document.querySelector('header h1');
    let opacity = 0;
    const interval = setInterval(() => {
        opacity += 0.1;
        headerText.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 100);
}

// Function to animate the image
function animateImage() {
    const image = document.getElementById('g');
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.5s ease-in';
}

// Function to animate footer
function animateFooter() {
    const footer = document.querySelector('footer');
    footer.style.opacity = '0';
    footer.style.transform = 'translateY(20px)';
    setTimeout(() => {
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    }, 200);
}

// Function to trigger animations every 3 seconds
function animateEvery3Seconds() {
    animateHeaderText();
    animateImage();
    animateSections();
    animateFooter();
}

// Run animations every 3 seconds
setInterval(animateEvery3Seconds, 3000);
