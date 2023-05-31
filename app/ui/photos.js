import { DOMUtils } from '../utils/index.js';

export function loadPhotos(wrapper, images) {
	const photosContainer = DOMUtils.find(wrapper);

	const photosElement = images
		.map(
			(p) =>
				`
        <div class="col-6 col-md-4 col-xl-3">
          <a href="#offcanvas-image-detail" data-bs-toggle="offcanvas" class="image-col" title="${p.title}" id="${p.id}">
            <img
              src="${p.src}"
              alt="${p.title}"
            />
            <div class="image-description">
              <p class="text-truncate">${p.title}</p>
            </div>
          </a>
        </div>
        `
		)
		.join('');

	photosContainer.innerHTML = photosElement;
}
