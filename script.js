document.addEventListener('DOMContentLoaded',() => {

    let clickButton = document.getElementById('clickButton');

    let clickContDisplay = document.getElementById('clickCount');

    let clickCount = 0;

    clickButton.addEventListener('click', () => {

    clickCount++;

    clickContDisplay.textContent = 
    clickCount;
});
});


