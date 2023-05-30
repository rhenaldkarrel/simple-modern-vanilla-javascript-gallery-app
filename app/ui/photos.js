import { DOM } from '../utils/index.js';

export function loadPhotos(wrapper, images) {
	const photosContainer = DOM.find(wrapper);

	const photosElement = images
		.map(
			(p) =>
				`
        <div class="col-6 col-md-4 col-xl-3">
          <a href="${p.src}" target="_blank" class="image-col">
            <img
              src="${p.src}"
              alt="${p.title}"
            />
            <div class="image-description">
              <p>${p.title}</p>
            </div>
          </a>
        </div>
        `
		)
		.join('');

	photosContainer.innerHTML = photosElement;
}
