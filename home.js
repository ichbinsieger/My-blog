function openNav()  {
    document.querySelector("ul").style.width = "100%";
    document.querySelector("header").style.height ="40%";
    document.querySelector("h1").style.position = "absolute";
    document.querySelector("h1").style.top = "10%";
    document.querySelector("ul").style.display = "block";
    document.querySelector(".open").style.display = "none";
    document.querySelector(".closebtn").style.display = "block";
    
  }
  
  function closeNav() {
    document.querySelector("header").style.height ="10%";
    document.querySelector("ul").style.display = "none";
    document.querySelector(".open").style.display = "block";
    document.querySelector(".closebtn").style.display = "none";
    document.querySelector(".open").style.top = "20%";
    document.querySelector(".open").style.right = "10%";
  }