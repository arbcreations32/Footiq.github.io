document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Toggle hamburger bars animation
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(3px, -4px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // 3. Scroll Reveals (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserverOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    let hasCounted = false;

    const statsObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const animateCounters = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    // format with K or just number based on target
                    if (target >= 10000) {
                        stat.innerText = (current / 1000).toFixed(1) + 'K';
                    } else {
                        stat.innerText = Math.ceil(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (target >= 10000) {
                        // Original text might have had .K or something, keep it clean
                        stat.innerText = stat.getAttribute('data-text') || target;
                    } else {
                        stat.innerText = stat.getAttribute('data-text') || target;
                    }
                }
            };
            updateCounter();
        });
    };

    // If there's a stats section, observe it
    const statsSection = document.querySelector('.stats-bar, .journey-stats');
    if (statsSection && stats.length > 0) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting && !hasCounted) {
                hasCounted = true;
                animateCounters();
                observer.unobserve(statsSection);
            }
        }, statsObserverOptions);

        statsObserver.observe(statsSection);
    }
});
