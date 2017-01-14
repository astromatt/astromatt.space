var titleOld = document.querySelectorAll('h1')[0];
var titleNew = document.querySelectorAll('section#title')[0];
titleNew.innerHTML = titleOld.innerHTML;
titleOld.remove();

var authorsOld = document.querySelectorAll('h2#authors + ul')[0];
var authorsNew = document.querySelectorAll('ul#authors')[0];
document.querySelectorAll('h2#authors')[0].remove();
authorsNew.innerHTML = authorsOld.innerHTML;
authorsOld.remove();
