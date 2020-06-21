function expand(imgs) {
    var expandedIMG = document.getElementById("expandedIMG");
    expandedIMG.src = imgs.src;
    expandedIMG.parentElement.style.display = "block";
}