
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Click on icon goes to homepage
function home()
{
    sessionStorage.clear();
    window.location = "home.html";
}


function search_rooms() {
  var check_in = document.getElementById("check_in").value;
  var check_out = document.getElementById("check_out").value;
  var selected_guest = document.getElementById("guest").value;
  // Check if Location field is empty
  if (!selected_guest) {
      alert("Please select a location")
      return;
  }

  // Check if Check In and/or Check Out Dates are empty
  if (!check_in && !check_out) {
      alert("Please Enter a Check In and Check Out Date");
      return;
  }
  else if (!check_in) {
      alert("Please Enter a Check In Date");
      return;
  }
  else if (!check_out) {
      alert("Please Enter a Check Out Date");
      return;
  }  

  // Check that Check Out Date is after Check In Date
  if (check_in > check_out) {
      alert("Check Out Date must be after Check In Date");
      return;
  }

  // Go to corresponding Room Page based on selection
  sessionStorage.setItem("selected_guest", selected_guest);
  sessionStorage.setItem("check_in", check_in);
  sessionStorage.setItem("check_out", check_out);
  window.location = "rooms.html";
}

function check_dates() {
  var check_in = document.getElementById("check_in").value;
  var check_out = document.getElementById("check_out").value;

  // Check if Check In and/or Check Out Dates are empty
  if (!check_in && !check_out) {
      alert("Please Enter a Check In and Check Out Date");
      return;
  }
  else if (!check_in) {
      alert("Please Enter a Check In Date");
      return;
  }
  else if (!check_out) {
      alert("Please Enter a Check Out Date");
      return;
  }  

  // Check that Check Out Date is after Check In Date
  if (check_in > check_out) {
      alert("Check Out Date must be after Check In Date");
      return;
  }

  // Go to corresponding Room Page based on selection
  sessionStorage.setItem("check_in", check_in);
  sessionStorage.setItem("check_out", check_out);
  window.location = "rooms.html";
}

function search_rooms_1() {
  var selected_guest = "1guest";
  sessionStorage.setItem("selected_guest", selected_guest);
  check_dates();
}

function search_rooms_2() {
  var selected_guest = "2guest";
  sessionStorage.setItem("selected_guest", selected_guest);
  check_dates();
}


function search_rooms_3() {
  var selected_guest = "3guest";
  sessionStorage.setItem("selected_guest", selected_guest);
  check_dates();
}

function search_rooms_4() {
  var selected_guest = "4guest";
  sessionStorage.setItem("selected_guest", selected_guest);
  check_dates();
}
//Click book a room on homepage gets taken to suites page
function bookClick()
{
    sessionStorage.clear();
    window.location = "suites.html";
}





//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



