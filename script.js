// let heroImage = document.getElementById('hero-image')


// window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     let rotationAngle = value * 0.5; // Adjust the factor to control the rotation speed

// console.log("value", value)
//     heroImage.style.top = value * 2 + 'px';
//     // heroImage.style.right = value * -1.5 + 'px';
//     // heroImage.style.transform = `rotate(${rotationAngle}deg)`;

// })

document.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');

    // Calculate the new position based on scroll
    const textPosition = -10 + scrollPosition * 0.05; // Adjust multiplier for desired effect
    const imagePosition = -28 + - scrollPosition * 0.08; // Adjust multiplier for desired effect

    // Apply new position
    heroText.style.transform = `translateX(${textPosition}%)`;
    heroImage.style.transform = `translateY(${imagePosition}%)`;
});



// document.addEventListener('DOMContentLoaded', function () {
//     const animatedBlocks = document.querySelectorAll('.animated-block');

//     const observerOptions = {
//         root: null, // Use the viewport as the root
//         rootMargin: '0px',
//         threshold: 0.2 // Trigger when 20% of the element is in view
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('in-view');
//             } else {
//                 entry.target.classList.remove('in-view');
//             }
//         });
//     }, observerOptions);

//     animatedBlocks.forEach(block => {
//         observer.observe(block);
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const animatedBlocks = document.querySelectorAll('.animated-block');

//     const observerOptions = {
//         root: null, // Use the viewport as the root
//         rootMargin: '0px',
//         threshold: 0.5 // Trigger when 50% of the element is in view
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('in-view');
//             } else {
//                 entry.target.classList.remove('in-view');
//             }
//         });
//     }, observerOptions);

//     animatedBlocks.forEach(block => {
//         observer.observe(block);
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const animatedBlocks = document.querySelectorAll('.animated-block');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('in-view', 'animated');
                observer.unobserve(entry.target); // Stop observing the element after it has animated
            }
        });
    }, {
        threshold: 0.1 // Adjust threshold as needed
    });

    animatedBlocks.forEach(block => {
        observer.observe(block);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.illustration img, .text-content, .features-section h2, .footer-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('in-view')) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing the element after it has animated
            }
        });
    }, {
        threshold: 0.1 // Adjust threshold as needed
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
