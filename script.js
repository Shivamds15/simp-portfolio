$(document).ready(function(){
    var typed = new Typed(".typing", {
        strings: ["Developer","Learner", "Sketcher", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
        
    document.getElementById('year').textContent = new Date().getFullYear();const form = document.getElementById('contact-form');
    
    const cform = document.getElementById('contact-form');
        
    cform.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.querySelector('input[placeholder="Shivam"]').value;
      const lastName = document.querySelector('input[placeholder="Singh"]').value;
      const email = document.querySelector('input[placeholder="shivamsingh910672@gmail.com"]').value;
      const mobile = document.querySelector('input[placeholder="XXXXXXXXX"]').value;
      const message = document.querySelector('textarea').value;
      const subject = 'New message from your portfolio website';
      const body = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;
      const mailtoLink = `mailto:shivamsingh910672@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    });
});


