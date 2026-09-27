document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');
    const navItems = document.querySelectorAll('.nav-link, .nav-cta .btn');

    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active-menu');
            navCta.classList.toggle('active-menu');
            
            // Animate hamburger lines
            const lines = mobileMenuToggle.querySelectorAll('.hamburger-line');
            if (navLinks.classList.contains('active-menu')) {
                lines[0].style.transform = 'translateY(7px) rotate(45deg)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'translateY(-7px) rotate(-45deg)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    }

    // Close menu when a link is clicked (mobile)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active-menu')) {
                navLinks.classList.remove('active-menu');
                navCta.classList.remove('active-menu');
                
                const lines = mobileMenuToggle.querySelectorAll('.hamburger-line');
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button logic
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Contact Modal logic
    const contactBtns = document.querySelectorAll('a[href="#contact"]');
    const contactModal = document.getElementById('contactModal');
    const modalClose = document.querySelector('.modal-close');

    if (contactModal) {
        contactBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                contactModal.classList.add('show');
            });
        });

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                contactModal.classList.remove('show');
            });
        }

        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('show');
            }
        });
    }
});
