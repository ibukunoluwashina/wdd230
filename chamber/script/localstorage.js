// local storage

const lastVisitKey = 'lastVisit';
const currentDate = new Date(); 

if (!localStorage.getItem(lastVisitKey)) {
 
  localStorage.setItem(lastVisitKey, currentDate);
} else {
 
  const lastVisitDate = new Date(localStorage.getItem(lastVisitKey));
  const timeDiff = Math.abs(currentDate - lastVisitDate);
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
  console.log('Days since last visit:', daysDiff *1);
 
  localStorage.setItem(lastVisitKey, currentDate);
  
  
  const daysSinceLastVisitElement = document.getElementById('daysSinceLastVisit');
  daysSinceLastVisitElement.textContent = `Days since last visit: ${daysDiff}`;
}
