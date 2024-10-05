document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.reviews-slider');
    let startX, scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.addEventListener('mousemove', mouseMove);
        slider.addEventListener('mouseup', () => {
            slider.removeEventListener('mousemove', mouseMove);
        });
    });

    function mouseMove(e) {
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    }

    // Optional: add auto-scrolling effect
    function autoScroll() {
        slider.scrollLeft += 1;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
        }
        requestAnimationFrame(autoScroll);
    }
    autoScroll();
});
