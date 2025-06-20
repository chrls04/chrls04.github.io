document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.main-nav');
                
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});