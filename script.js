document.addEventListener('DOMContentLoaded',function() {

    let button = document.getElementById('clickButton');

    let clickContDisplay = document.getElementById('clickCount');

    let clickCount = 0;

    button.addEventListener('click', function() {

    clickCount++;

    clickContDisplay.textContent = 
    clickCount;
});
});


