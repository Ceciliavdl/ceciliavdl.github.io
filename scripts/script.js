// JavaScript Document
console.log("hi");

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
      
        if (event.key === 'd') {
       
            document.documentElement.style.setProperty('--lightmodeBackground', 'black');
        }

    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
      
        if (event.key === 'd') {
       
            document.documentElement.style.setProperty('--lightmodeBackground2', 'black');
        }


    });
});






document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
      
        if (event.key === 'd') {
       
            document.documentElement.style.setProperty('black', '--lightmodeBackground');
        }

    });
});









document.addEventListener('keydown', function(event) {
    if (event.key === 'c' || event.key === 'C') {
        document.body.classList.toggle('donut-cursor');
    }
});
