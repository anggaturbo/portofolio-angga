
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      alert('SUCCESS!');
    }, function(error) {
      alert('FAILED...', error);
    });
});
    