const url = '../chamber/data.json'

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
<img src="${data.imageurl}"
 alt="${data.name} picture"
  loading="lazy" width="340" height="440">
</section>`
let container = document.querySelector('.newProphets');
container.innerHTML += personData
}









`<section>
<img src="https://assets.ldscdn.org/c8/b5/c8b5e860a7edbbef90734c83be366e8d359d2c0b/payson_utah_temple.jpg" alt="Payson Utah Temple" />
<h3>Payson Utah</h3>
<p>2015</p>
<a href="https://www.churchofjesuschrist.org/temples/details/payson-utah-temple?lang=eng" target="_blank">Details</a>
</section>`