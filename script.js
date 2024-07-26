document.addEventListener('DOMContentLoaded', (event) => {
    var popup = document.getElementById("popup");
    var span = document.getElementsByClassName("close")[0];

    
    setTimeout(() => {
        popup.style.display = "block";
    }, 4000);  

    span.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});
 
document.addEventListener('loading', (event) => {
    console.log('Loading event detected');
});


  
// scroll down navbar 

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

   
    function toggleNavbarClass() {
        if (window.scrollY > 50) {  
            navbar.classList.add('translucent');
        } else {
            navbar.classList.remove('translucent');
        }
    }

   
    window.addEventListener('scroll', toggleNavbarClass);
    toggleNavbarClass();
});


// website loading 

window.onload = function() {
    setTimeout(function() {
        var loading = document.getElementById('loading');
        var content = document.getElementById('content');
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 2000);  
};