const text = "Tyrant Siloh";
const typingElement = document.getElementById('typing');
let index = 0;

function typeLetter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, 500); // Adjust typing speed here
  } else {
    setTimeout(() => {
      // Clear text and restart after a short delay
      typingElement.textContent = '';
      index = 0;
      typeLetter();
    }, 1000); // Delay before restarting the loop
  }
}

document.addEventListener('DOMContentLoaded', typeLetter);
