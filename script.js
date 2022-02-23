var theDaily = document.querySelectorAll(".Daily");
var theWeek = document.querySelectorAll(".Weekly");
var theMon = document.querySelectorAll(".Monthly");

var getDaily = document.getElementById("btnDaily");
var getWeek = document.getElementById("btnWeek");
var getMonth = document.getElementById("btnMon");



getDaily.addEventListener('click', function(e) {
    theDaily.forEach(function(i) {
      if (i.style.display = "none") {
        i.style.display = "block";    
      }
    })
  
    theWeek.forEach(function(y) {
      if (y.style.display = "block") {
        y.style.display = "none";    
      } 
    })
    
    theMon.forEach(function(z) {
      if (z.style.display = "block") {
        z.style.display = "none";     
      } 
    })
    
}, false);

getWeek.addEventListener('click', function(e) {
     theWeek.forEach(function(y) {
      if (y.style.display = "none") {
        y.style.display = "block";
      } 
    })

    theDaily.forEach(function(i) {
      if (i.style.display = "block") {
        i.style.display = "none";     
      } 
    })

    theMon.forEach(function(z) {
      if (z.style.display = "block") {
        z.style.display = "none";
      } 
    })
}, false); 

getMonth.addEventListener('click', function(e) {
    theMon.forEach(function(z) {
      if (z.style.display = "none") {
        z.style.display = "block";
      } 
    })

    theDaily.forEach(function(i) {
      if (i.style.display = "block") {
        i.style.display = "none";
      } 
    })

    theWeek.forEach(function(y) {
      if (y.style.display = "block") {
        y.style.display = "none";
      } 
    })
}, false);
  

  

