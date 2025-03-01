// script.js
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 600,
        interval: 3000
    });
});

