const tombol = document.getElementById("btnHello");

tombol.addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// Efek muncul saat halaman dibuka
window.onload = function() {
    document.querySelector(".hero-content").style.opacity = "1";
};