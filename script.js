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
    }, 1000);  
};



 // Form validation
 document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true;

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var place = document.getElementById('place').value;
    var graduation = document.getElementById('graduation').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var placeError = document.getElementById('placeError');
    var graduationError = document.getElementById('graduationError');

  
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    placeError.textContent = '';
    graduationError.textContent = '';

    if (!name) {
      nameError.textContent = 'Name is required.';
      isValid = false;
    }
    if (!email) {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email.';
      isValid = false;
    }
    if (!phone) {
      phoneError.textContent = 'Phone number is required.';
      isValid = false;
    } else if (!validatePhone(phone)) {
      phoneError.textContent = 'Please enter a valid phone number.';
      isValid = false;
    }
    if (!place) {
      placeError.textContent = 'Place is required.';
      isValid = false;
    }
    if (!graduation) {
      graduationError.textContent = 'Last graduation is required.';
      isValid = false;
    }

    if (isValid) {
      fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          place: place,
          graduation: graduation
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Form submitted successfully!');
        } else {
          alert('There was an error submitting the form.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
      });
    }
  });

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    var re = /^[0-9]{10}$/;
    return re.test(phone);
  }
 

  // More detaile

  document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreDetails = document.querySelector('.more-details');
    
    readMoreBtn.addEventListener('click', function() {
      if (moreDetails.style.display === 'none' || moreDetails.style.display === '') {
        moreDetails.style.display = 'block';
        readMoreBtn.textContent = 'Read Less'; // Change button text
      } else {
        moreDetails.style.display = 'none';
        readMoreBtn.textContent = 'Read More'; // Change button text back
      }
    });
  });
  