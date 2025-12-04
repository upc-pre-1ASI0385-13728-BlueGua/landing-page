document.addEventListener('DOMContentLoaded', () => {
    /* HEADER SECTION */

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Prevenir scroll cuando el menú está abierto
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    /* SMOOTH SCROLL NAVIGATION */
    // Habilitar smooth scroll en todo el documento
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignorar enlaces vacíos o que solo son "#"
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                // Calcular offset del header sticky
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

    /* SCROLL TO TOP BUTTON */
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Funcionalidad del botón
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* OFFLINE INDICATOR */
    const offlineIndicator = document.getElementById('offlineIndicator');

    // Simular modo offline - mostrar después de 2 segundos de carga
    setTimeout(() => {
        offlineIndicator.classList.add('visible');

        // Ocultar después de 5 segundos
        setTimeout(() => {
            offlineIndicator.classList.remove('visible');
        }, 5000);
    }, 2000);

    // Detectar conexión real (opcional - para uso futuro)
    window.addEventListener('online', () => {
        offlineIndicator.classList.remove('visible');
    });

    window.addEventListener('offline', () => {
        offlineIndicator.classList.add('visible');
    });

    /* FAQ SECTION - ACCORDION */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Cerrar otros items abiertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle del item actual
            item.classList.toggle('active');
        });
    });

    /* PRIVACY POLICY MODAL */
    const privacyModal = document.getElementById('privacyModal');
    const closePrivacyBtn = document.getElementById('closePrivacy');

    // Abrir modal desde enlaces de privacidad
    const privacyLinks = document.querySelectorAll('a[href*="privacidad"], a[href*="Privacidad"]');

    privacyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            privacyModal.classList.add('visible');
            document.body.style.overflow = 'hidden';
        });
    });

    // Cerrar modal con botón X
    closePrivacyBtn.addEventListener('click', () => {
        privacyModal.classList.remove('visible');
        document.body.style.overflow = '';
    });

    // Cerrar modal al hacer click fuera del contenido
    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            privacyModal.classList.remove('visible');
            document.body.style.overflow = '';
        }
    });

    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && privacyModal.classList.contains('visible')) {
            privacyModal.classList.remove('visible');
            document.body.style.overflow = '';
        }
    });

    /* SCROLL ANIMATIONS - FADE IN ON SCROLL */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animaciones a elementos específicos
    const animatedElements = document.querySelectorAll(
        '.feature-card, .impact-card, .plan-card, .testimonial-card, .faq-item, .feature-row'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    /* CONTACT SECTION */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Aquí iría la lógica de envío del formulario
            // Por ahora, solo mostramos un mensaje de éxito

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            console.log('Formulario enviado:', data);

            // Simular envío exitoso
            alert('¡Mensaje enviado con éxito! Te responderemos pronto.');
            contactForm.reset();
        });
    }

    /* PLANS COMPARISON TABLE TOGGLE */
    const toggleComparisonBtn = document.getElementById('toggleComparison');
    const comparisonTable = document.getElementById('comparisonTable');

    if (toggleComparisonBtn && comparisonTable) {
        toggleComparisonBtn.addEventListener('click', () => {
            if (comparisonTable.style.display === 'none') {
                comparisonTable.style.display = 'block';
                toggleComparisonBtn.innerHTML = '<i class="ri-table-line"></i> Ocultar tabla comparativa';
            } else {
                comparisonTable.style.display = 'none';
                toggleComparisonBtn.innerHTML = '<i class="ri-table-line"></i> Ver tabla comparativa';
            }
        });
    }
});