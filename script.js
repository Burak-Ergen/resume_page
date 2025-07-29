document.addEventListener('DOMContentLoaded', () => {

    // Typing Effect
    const typingTitle = document.getElementById('typing-title');
    const textToType = "Burak Ergen";
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typingTitle.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust typing speed here
        } else {
            typingTitle.classList.add('typing-cursor'); // Add cursor after typing
            setTimeout(() => {
                typingTitle.classList.remove('typing-cursor');
            }, 2000); // Cursor disappears after 2 seconds
        }
    }

    typeWriter();

    // Theme Switcher
    const themeToggle = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    themeToggle.addEventListener('change', switchTheme, false);


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