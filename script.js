function animateTyping() {
    const messages = [" Flying Officer, BAF","Web Developer", "Student, CSE 23, MIST", "Tech Enthusiast"];
    const textElement = document.getElementById('info-sub');
    if (!textElement) return;

    let messageIndex = 0;
    let charIndex = 0;

    function typeMessage() {
        const message = messages[messageIndex];
        if (charIndex < message.length) {
            textElement.textContent += message[charIndex];
            charIndex++;
            setTimeout(typeMessage, 100);
        } else {
            // wait, clear, advance to next message and start typing again
            setTimeout(() => {
                textElement.textContent = '';
                charIndex = 0;
                messageIndex = (messageIndex + 1) % messages.length;
                typeMessage();
            }, 2000);
        }
    }

    textElement.textContent = '';
    typeMessage();
}

window.addEventListener('load', animateTyping);
