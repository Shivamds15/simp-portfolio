$(document).ready(function(){
    var typed = new Typed(".typing", {
        strings: ["Developer","Learner", "Sketcher", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    });

document.getElementById('year').textContent = new Date().getFullYear();const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch('https://formspree.io/shivamsingh910672@gmail.com', {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});
