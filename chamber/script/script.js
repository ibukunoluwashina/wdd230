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



// directory page 
const url = '/chamber/data.json'

fetch(url)
.then((result) => 
    result.json()
).then(data=>data.forEach((data.company.forEach(data=>displayData(data))))).
catch((err) => {
    
});


const displayData=(data)=>{
  let personData = `<section>
  <h2>${data.name}</h2>
<p>${data.address}</p>
<p>${data.phoneNumber}</p>
<a href="${data.website}"></a>
<p>${data.membershipLevel}</p>
<img class="image" src="${data.imageurl}" alt="${data.name} picture" loading="lazy" width="340" height="440">
</section>`
let container = document.querySelector('section');
container.innerHTML += personData
}

// directory gid

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
