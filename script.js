  // Cart functionality
        let cart = [];
        const cartCount = document.querySelector('.cart-count');
        const cartItemsContainer = document.querySelector('.cart-items-container');
        const emptyCartMessage = document.querySelector('.empty-cart-message');
        const cartNotification = document.querySelector('.cart-notification');

        // Search Icon
        const searchIcon = document.querySelector(".search-icon");
        const searchForm = document.querySelector(".search-form");

        searchIcon.addEventListener("click", () => {
            searchForm.classList.toggle("active");
            cartItemsContainer.classList.remove("active");
        });

//CONTACT US//

        // Initialize EmailJS with your public key
        (function() {
            emailjs.init("xAwUfJHXa35yW-BAV");
        })();

        // FAQ Toggle
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });

        // Form Validation and Submission
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');
        const submitBtn = document.getElementById('submitBtn');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                // Show loading state
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Send email using EmailJS
                emailjs.sendForm('service_66jffgy', 'template_npwkr4j', this)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        
                        // Show success message
                        successMessage.style.display = 'block';
                        errorMessage.style.display = 'none';
                        contactForm.reset();
                        
                        // Reset floating labels
                        document.querySelectorAll('.inputBox label').forEach(label => {
                            label.style.top = '1.2rem';
                            label.style.left = '1.2rem';
                            label.style.fontSize = '1.6rem';
                            label.style.color = '#777';
                        });
                    })
                    .catch(function(error) {
                        console.log('FAILED...', error);
                        
                        // Show error message
                        errorMessage.style.display = 'block';
                        successMessage.style.display = 'none';
                    })
                    .finally(function() {
                        // Reset button state
                        submitBtn.textContent = 'Send Message';
                        submitBtn.disabled = false;
                        
                        // Hide messages after 5 seconds
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                            errorMessage.style.display = 'none';
                        }, 5000);
                    });
            }
        });

        // Floating Labels
        const inputBoxes = document.querySelectorAll('.inputBox');
        
        inputBoxes.forEach(box => {
            const input = box.querySelector('input, textarea');
            const label = box.querySelector('label');
            
            // Check if input has value on page load
            if (input.value) {
                label.style.top = '-1.5rem';
                label.style.left = '0';
                label.style.fontSize = '1.2rem';
                label.style.color = 'var(--main-color)';
            }
            
            input.addEventListener('focus', () => {
                label.style.top = '-1.5rem';
                label.style.left = '0';
                label.style.fontSize = '1.2rem';
                label.style.color = 'var(--main-color)';
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.style.top = '1.2rem';
                    label.style.left = '1.2rem';
                    label.style.fontSize = '1.6rem';
                    label.style.color = '#777';
                }
            });
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
        //ABOUT US//
           // FAQ Toggle
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        // Menu Toggle
        document.querySelector('.menu-icon').addEventListener('click', () => {
            document.querySelector('.navbar').classList.toggle('active');
        });

        // Cart Count Update (example functionality)
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.addEventListener('click', () => {
            alert('Your cart is empty! Continue shopping to add items.');
        });