$(document).ready(function(){
    var typed = new Typed(".typing", {
        strings: ["Developer","Learner", "Sketcher", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    });

document.getElementById('year').textContent = new Date().getFullYear();const form = document.getElementById('contact-form');

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  const subject = 'New message from your portfolio website';
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const mailtoLink = `mailto:shivamsingh910672@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
});
