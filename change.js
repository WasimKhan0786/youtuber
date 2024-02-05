let currentSlide = 0;

function changeSlide(n) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentSlide = (currentSlide + n + totalSlides) % totalSlides;
  const translateValue = -currentSlide * 100 + '%';
  
  slides.style.transform = 'translateX(' + translateValue + ')';
}

// Automatic slide change every 3 seconds (adjust the interval as needed)
setInterval(function() {
  changeSlide(1);
}, 3000);


document.addEventListener('DOMContentLoaded', function() {
  const texts = [
    "welcome to my website Oye Hasmat khan.",
    "I am a youtuber",
    "Kaise ho bhai log."
 
  ];

  const typingTextElement = document.getElementById('typing-text');
  let textIndex = 0;

  function updateText() {
    typingTextElement.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
  }

  updateText(); // Initial update

  setInterval(function() {
    typingTextElement.classList.remove('sliding-animation'); // Reset animation
    void typingTextElement.offsetWidth; // Trigger reflow
    typingTextElement.classList.add('sliding-animation'); // Apply animation
    updateText(); // Update text for the next slide
  }, 4000); // Adjust the timing based on your preference
});





