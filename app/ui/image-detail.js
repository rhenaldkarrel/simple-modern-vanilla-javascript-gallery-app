import { gallery } from '../constants/images-data.js';

export function loadImageDetail(offcanvas, imageId) {
	const imageDetail = gallery.find((p) => p.id === Number(imageId));

	const offcanvasBody = offcanvas.querySelector('.offcanvas-body');
	const offcanvasTitle = offcanvas.querySelector('.offcanvas-title');

	const imageDetailElement = `
    <img src="${imageDetail.src}" class="w-100 mb-3" alt="${imageDetail.title}">
    <p class="d-flex gap-2">
      ${imageDetail.category
				.map((c) => `<span class="badge bg-secondary">${c}</span>`)
				.join('')}
    </p>
  `;

	offcanvasTitle.textContent = imageDetail.title;
	offcanvasBody.innerHTML = imageDetailElement;
}
