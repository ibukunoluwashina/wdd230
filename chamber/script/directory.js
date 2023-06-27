// directory page 
const url = '../lesson09/data.json';



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
<a href="${data.website}">website</a>
<p>${data.membershipLevel}</p>
<img class="image" src="${data.imageurl}" alt="${data.name} picture" loading="lazy" width="340" height="440">
</section>`
let container = document.querySelector('.directory');
container.innerHTML += personData
}


// grid for directory page
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}