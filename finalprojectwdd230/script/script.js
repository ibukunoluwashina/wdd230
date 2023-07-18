// hanburger button 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
// end of hanburger button



// last modified date
const date = new Date(document.lastModified);
document.getElementById("lastdate").innerHTML = date;
// end of last modify date