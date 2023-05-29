function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

const d = new Date();
document.getElementById("currentdate").innerHTML = d;

const date = new Date(document.lastModified);
document.getElementById("lastdate").innerHTML = date;

