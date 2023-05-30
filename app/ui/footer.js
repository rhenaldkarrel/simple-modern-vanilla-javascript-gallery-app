import { DOMUtils } from '../utils/index.js';

export function loadFooter() {
	const footerElement = DOMUtils.find('footer');

	footerElement.innerHTML = `<span>Made by <a class="text-decoration-none" href="https://github.com/rhenaldkarrel" target="_blank">Rhenald
  Karrel</a>.</h6>`;

	document.body.appendChild(footerElement);
}
