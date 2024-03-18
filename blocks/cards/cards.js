import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Change to ul, li
  const ul = document.createElement('ul');
  [...block.children].forEach((row, index) => {
    const li = document.createElement('li');
    li.id = `list-item-${index + 1}`; // Assigning unique IDs to each li
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('img')) div.className = 'cards-card-image-container';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => {
    const container = img.parentElement;
    container.classList.add('cards-card-image-container');
    const squareOverlay = document.createElement('div');
    squareOverlay.classList.add('cards-card-image-overlay');
    squareOverlay.innerHTML = `<div class="cards-card-image-text">${img.alt}</div>`;
    container.appendChild(squareOverlay);
    container.replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]),
    );
  });
  block.textContent = '';
  block.append(ul);
}
