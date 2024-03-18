/**
 * decorates the header, mainly the nav
 * @param {Element} block The incoming block element
 */
export default async function decorate(block) {
  if (block) {
    block.innerHTML = `
      <button class="searchnav-button" aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24"><path fill="#fff" d="M16.9 15.5c2.4-3.2 2.2-7.7-.7-10.6-3.1-3.1-8.1-3.1-11.3 0-3.1 3.2-3.1 8.3 0 11.4 2.9 2.9 7.5 3.1 10.6.6v.1l4.2 4.2c.5.4 1.1.4 1.5 0s.4-1 0-1.4l-4.3-4.3zm-2.1-9.2c2.3 2.3 2.3 6.1 0 8.5-2.3 2.3-6.1 2.3-8.5 0C4 12.5 4 8.7 6.3 6.3c2.4-2.3 6.2-2.3 8.5 0z"/></svg>
        <span class="visually-hidden">Search</span>
      </button>
    `;
  }
}
