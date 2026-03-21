const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    // At the very top — always show header
    header.style.transform = "translateY(0)";
    lastScroll = 0;
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down — hide header
    header.style.transform = "translateY(-100%)"; // move header off screen
  } else {
    // Scrolling up — show header
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});
function togglePopup() {
    const popup = document.getElementById("servicePopup");
    popup.classList.toggle("collapsed");
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
      if (response.ok) {
        formMessage.textContent = "Thanks! Your message has been sent.";
        formMessage.style.color = "White";
        form.reset();
      } else {
        formMessage.textContent = "Oops! There was a problem sending your message.";
        formMessage.style.color = "red";
      }
    })
    .catch(function(error) {
      formMessage.textContent = "Oops! There was a problem sending your message.";
      formMessage.style.color = "red";
      console.error(error);
    });
  });
});
  // Disable right-click
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Disable certain keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'C') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J')) {
      e.preventDefault();
    }
  });