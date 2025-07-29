document.addEventListener('DOMContentLoaded', () => {

    // EmailJS Initialization
    (function(){
        emailjs.init("bEabPRwTIXe0eh8nz"); 
    })();

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Gönderiliyor...';

            emailjs.sendForm('service_3vg141w', 'template_6id9irk', this)
                .then(() => {
                    alert('Mesajınız başarıyla gönderildi!');
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Gönder';
                    this.reset();
                }, (error) => {
                    alert('Mesaj gönderilirken bir hata oluştu: ' + JSON.stringify(error));
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Gönder';
                });
        });
    }

});