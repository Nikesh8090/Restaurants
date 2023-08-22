const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
  
    // Animate Links
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  
    // Hamburger Animation
    burger.classList.toggle('toggle');
  });
/* home page */ 

/* menu pagr */

/* contact page */
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Replace this with your own email address
  const to = 'youremail@example.com';
  
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('subject', subject);
  formData.append('message', message);
  
  fetch('https://example.com/send-email.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Your message has been sent!');
      form.reset();
    } else {
      alert('There was a problem sending your message. Please try again later.');
    }
  })
  .catch(error => {
    console.error(error);
    alert('There was a problem sending your message. Please try again later.');
  });
  });

