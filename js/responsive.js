function myFunction(){
    var x = document.getElementById("reTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
