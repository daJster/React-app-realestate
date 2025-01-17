const animateDomsWithObserver = (animatedJsonData) => {

    document.addEventListener("DOMContentLoaded", () => {
        const observerOptions = {
            threshold: 0.1 // Trigger when 10% of the element is visible
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const animationClass = target.getAttribute('data-animation');
                    target.classList.add(animationClass);
                    observer.unobserve(target); // Animate only once
                }
            });
        }, observerOptions);
    
    
        // Register each element for observation
        animatedJsonData.List.forEach(item => {
            const elements = document.querySelectorAll(item.dom);
            elements.forEach(el => {
                el.style.animationDelay = `${item.delay}s`;
                el.setAttribute('data-animation', item.animation); // Add animation name
                observer.observe(el);
            });
        });
    });
}

export { animateDomsWithObserver };