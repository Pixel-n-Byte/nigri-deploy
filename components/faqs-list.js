const listItems = document.querySelectorAll('.list-item');

// Add click event listener to each header
listItems.forEach((listItem) => {
  const header = listItem.querySelector('.header');
  const description = listItem.querySelector('.description');

  header.addEventListener('click', () => {
    description.classList.toggle('active');
  });
});