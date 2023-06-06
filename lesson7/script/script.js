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

// Number of visits

document.addEventListener("DOMContentLoaded", function() {
    var lastVisit = localStorage.getItem(".lastVisit");
    var currentDate = new Date().getTime();
    var daysBetweenVisits = 0;
  
    if (lastVisit) {
      lastVisit = parseInt(lastVisit);
      daysBetweenVisits = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
    }
  
    localStorage.setItem("lastVisit", currentDate.toString());
  
    document.getElementById("daysBetweenVisits").innerHTML = "Days between visits: " + daysBetweenVisits;
  });