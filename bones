<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<style>




/* Style the dropdown button */
.dropbtn {
  background-color: transparent;
  color: black;
  padding: 2px;
  font-size: 15px;
  border: none;
  cursor: pointer;
}

/* Style the dropdown content */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: transparent;
  min-width: 160px;
  /*box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);*/
  z-index: 1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Style the links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change the background color of the dropdown links on hover */
.dropdown-content a:hover {background-color: transparent;}


#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: #555;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 50px;
}
#myBtn:hover {
  background-color: #333;
}

* {
  box-sizing: border-box;
  
}
#dark-mode-button {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

#icon {
  height: 30px;
  width: 30px;
  transition: all 0.3s ease-in-out;
}

.dark-mode #icon {
  transform: rotate(180deg);
}


/* Add a gray background color with some padding */
body {
  font-family: Arial;
  padding: 20px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: default;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {   
  float: left;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: transparent;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
   background-color: rgb(208, 186, 203);
   padding: 20px;
   margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

.glow {
  font-size: 80px;
  color: #472929;
  text-align: center;
  animation: glow 1s ease-in-out infinite alternate;
}


body {
  background-color: black;
  font-family: cursive;
}

.glow {
  font-size: 80px;
  color: #fff;
  text-align: center;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}

body {
  background-color: #ffffff; /* Replace with your background color */
  border: 1px solid #ffffff; /* Replace with your background color */
}



/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 0;
  }
}

      body {
        background-color: pink;
        transition: background-color 0.5s ease;
        color:black;
      }

      body.dark-mode {
        background-color: rgba(0, 0, 0, 0);
        color: rgb(0, 0, 0);
      }
    </style>
  </head>
  <body>
    <button id="dark-mode-button">
      <img id="icon" src="sun.png" alt="Sun icon">
    </button>


  <button onclick="topFunction()" id="myBtn" title="Go to top">&#9650;</button>





    <script>
// Get the background color of the body
var bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;

// Set the border color to the background color
document.body.style.border = "1px solid " + bodyBackgroundColor;



      const button = document.getElementById('dark-mode-button');
      const icon = document.getElementById('icon');

      button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateButton();
      });

      function updateButton() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
          icon.src = 'moon.png';
          button.textContent = 'Dark Mode';
        } else {
          icon.src = 'sun.png';
          button.textContent = 'Light Mode';
        }
      }

      updateButton();

      const commentForm = document.getElementById('comment-form');
      const commentList = document.getElementById('comment-list');

      commentForm.addEventListener('submit', event => {
        event.preventDefault();

        const name = commentForm.elements.name.value;
        const comment = commentForm.elements.comment.value;

        if (name.trim() === '' || comment.trim() === '') {
          alert('Please enter both a name and comment');
          return;
        }

        const commentItem = document.createElement('li');
        const commentHeader = document.createElement('h3');
        const commentBody = document.createElement('p');

        commentHeader.textContent = name;
        commentBody.textContent = comment;

        commentItem.appendChild(commentHeader);
        commentItem.appendChild(commentBody);

        commentList.appendChild(commentItem);

        commentForm.reset();
      });
      
      let password = '';
      while (password !== '123') {
        password = prompt('Please enter password to access the site:');
      }      
      // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
}
 function scrollFunction() {
      var myButton = document.getElementById("myBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
}

// When the user clicks on the button, scroll to the top of the page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

    </script>
<div class="dropdown">
  <button class="dropbtn">Menu</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

    <div class="header">
      <h1 class="glow">Aaliyahs Trinkets</h1>
    </div>

   
    


<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, March 11, 2023</h5>
      <div class="fakeimg" style="height:200px;">Image</div>
      <p>Some text..</p>
      <p>Sunt </p>
    </div>
    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <div class="fakeimg" style="height:200px;">Image</div>
      <p>Some text..</p>
      <p>Sunt</p>
    </div>
  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>About Me</h2>
      <div class="fakeimg" style="height:100px;">Image</div>
      <p>Some text..</p>
    </div>
    <div class="card">
      <h3>Posts</h3>
      <div class="fakeimg">Image</div><br>
      <div class="fakeimg">Image</div><br>
      <div class="fakeimg">Image</div>
    </div>
        <h2>Comments</h2>

    <form id="comment-form">
      <label for="name-input">Name:</label>
      <input id="name-input" name="name" type="text" required><br>

      <label for="comment-input">Comment:</label>
      <textarea id="comment-input" name="comment" required></textarea><br>

      <button type="submit">Submit</button>
    </form>

    <ul id="comment-list"></ul>
    <div class="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
  
  
<div class="footer">
  <h2>Footer</h2>
</div>
   <div id="spotify-player" style="position: sticky; bottom: 10px; width: 10%; background-color: default; color: white; padding: 0px;">
      <iframe src="https://open.spotify.com/embed/playlist/7cWY4obcaD62UakKuPY54k?utm_source=generator" width="350" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>


    <p>This is a test please ignore. 
    make sure you leave a nice hot comment babes</p>

  </body>
</html>
