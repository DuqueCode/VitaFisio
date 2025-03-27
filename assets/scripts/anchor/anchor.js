window.addEventListener("scroll", function () {
    let anchor = document.getElementById("anchor");
    
    if (window.scrollY > 100) {
        anchor.classList.add("show");
    } else {
        anchor.classList.remove("show");
    }
});
