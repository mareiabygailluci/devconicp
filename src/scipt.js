document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#f3ff33', '#ff33a1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
