




// -----------textescroll----------
const boxes = document.querySelectorAll('.choice-content');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// Script for navigation bar
document.addEventListener('DOMContentLoaded', function () {
    const barIcon = document.getElementById('bar');
    const navbar = document.querySelector('.navbar');
    const closeIcon = document.getElementById('close');

    barIcon.addEventListener('click', function () {
        navbar.classList.add('active');
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function () {
        navbar.classList.remove('active');
        closeIcon.style.display = 'none';
    });
});

