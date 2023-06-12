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

  if(d.getDay() == 2){
    document.querySelector(".banner").style.display = "block"
}

// banner
var bannerElement = document.getElementById('bannerElement');
        var today = new Date().getDay(); 

        if (today === 1 || today === 2) { 
            bannerElement.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
            bannerElement.style.display = "block"; 
        } else {
            bannerElement.style.display = "none"; 
        }

// discory page
const imgElements = document.querySelectorAll("img[data-src]");

const lazyLoadingImage = (entries, observer) => {
    
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', () =>{
            entry.target.classList.remove('lazy-img')
            observer.unobserve(entry.target);
        });
        console.log("called");
    });
};

const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage,{
    threshold: 0.9 
});
imgElements.forEach((img) => lazyLoadingObserver.observe(img));