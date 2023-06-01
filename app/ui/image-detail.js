import { gallery } from '../constants/images-data.js';
import { DOMUtils } from '../utils/dom-utils.js';

export function loadImageDetail(imageId) {
	const offcanvasElement = DOMUtils.find('.offcanvas');

	if (!offcanvasElement) {
		return;
	}

	const imageDetail = gallery.find((p) => p.id === Number(imageId));

	const offcanvasBody = offcanvasElement.querySelector('.offcanvas-body');
	const offcanvasTitle = offcanvasElement.querySelector('.offcanvas-title');

	const imageDetailElement = `
    <img src="${imageDetail.src}" class="w-100 mb-3" alt="${imageDetail.title}">
    <p>
      ${imageDetail.description}
    </p>
    <p class="d-flex gap-2">
      ${imageDetail.category
				.map(
					(c) =>
						`<a href="./gallery.html?category=${c}" class="badge bg-secondary text-decoration-none">${c}</a>`
				)
				.join('')}
    </p>
  `;

	offcanvasTitle.textContent = imageDetail.title;
	offcanvasBody.innerHTML = imageDetailElement;
}
