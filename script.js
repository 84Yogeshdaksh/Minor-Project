document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    }

    // Function to handle checking visibility and adding the 'visible' class
    function handleScroll() {
        steps.forEach((step, index) => {
            if (isInViewport(step)) {
                setTimeout(() => {
                    step.classList.add('visible');
                }, index * 200); // Stagger animation for each step
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Trigger on load to check if any element is already in view
    handleScroll();
});