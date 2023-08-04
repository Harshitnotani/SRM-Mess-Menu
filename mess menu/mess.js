// Add event listener to the navigation menu
const navMenu = document.querySelector('nav ul');
navMenu.addEventListener('click', (event) => {
  // Prevent default link behavior
  event.preventDefault();

  // Get the section that was clicked
  const sectionID = event.target.getAttribute('href');

  // Scroll to the section
  document.querySelector(sectionID).scrollIntoView({
    behavior: 'smooth'
  });
});

// Get the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date().getDay();
const currentDay = daysOfWeek[today];

// Highlight today's menu in the week's menu section
const weekMenu = document.querySelector('#week ul');
const menuItems = weekMenu.children;
for (let i = 0; i < menuItems.length; i++) {
  const itemText = menuItems[i].textContent;
  if (itemText.startsWith(currentDay)) {
    menuItems[i].classList.add('highlight');
  }
}