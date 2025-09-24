const popup = document.querySelector('.popup');
const popupTrigger = document.querySelector('.popup-trigger');
const closeBtn = document.querySelector('.close');

popupTrigger.addEventListener('click', () => {
  popup.style.display = "flex"; // show popup
});

closeBtn.addEventListener('click', () => {
  popup.style.display = "none"; // hide popup
});

// Optional: close on outside click
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
