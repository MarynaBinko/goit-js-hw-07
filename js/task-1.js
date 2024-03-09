const list = document.getElementById('categories');
const listItems = list.querySelectorAll('.item');

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('ul li'); 
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});