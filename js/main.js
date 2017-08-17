// add a class named js to the <body> element to recognize if the browser supports javascript
document.addEventListener('DOMContentLoaded', function() {
    var body = document.getElementsByTagName('body');
    body[0].classList.add('js');
});