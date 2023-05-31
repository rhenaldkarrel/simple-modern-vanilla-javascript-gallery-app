import { loadTemplate, loadPhotos, loadImageDetail } from '../ui/index.js';
import { DOMUtils } from '../utils/index.js';
import { gallery } from '../constants/images-data.js';

document.addEventListener('DOMContentLoaded', function () {
	const photosContainerClass = '.photos .row';

	loadTemplate();

	const urlParams = new URLSearchParams(location.search);
	const categoryParam = urlParams.get('category');

	if (categoryParam) {
		const navLinks = DOMUtils.findAll('.categories .nav-link');
		const matchedNavLink = Array.from(navLinks).find((el) =>
			el.text.toLowerCase().includes(categoryParam)
		);

		matchedNavLink.classList.add('active');

		const result = gallery.filter((p) => p.category.includes(categoryParam));

		loadPhotos(photosContainerClass, result);
	} else {
		loadPhotos(photosContainerClass, gallery);
	}

	const searchForm = DOMUtils.find('.search-form');

	searchForm.addEventListener('submit', function (e) {
		e.preventDefault();

		const query = DOMUtils.find('#search-input').value.toLowerCase();

		if (query === '') {
			return loadPhotos(photosContainerClass, gallery);
		}

		const result = gallery.filter(
			(p) => p.category.includes(query) || p.title.toLowerCase().includes(query)
		);

		loadPhotos(photosContainerClass, result);
	});

	const categoryLinks = DOMUtils.findAll('.categories .nav-link');

	for (let categoryLink of categoryLinks) {
		categoryLink.addEventListener('click', function (e) {
			e.preventDefault();

			const previousActiveLink = DOMUtils.find('.categories .nav-link.active');

			if (previousActiveLink) {
				previousActiveLink.classList.remove('active');
			}

			e.target.classList.add('active');

			const categoryName = e.target.text.toLowerCase();

			const result = gallery.filter((p) => p.category.includes(categoryName));

			loadPhotos(photosContainerClass, result);
		});
	}

	const offcanvasImageDetailElement = DOMUtils.find('.offcanvas');
	const photos = DOMUtils.findAll('a.image-col');

	for (let photo of photos) {
		photo.addEventListener('click', function (e) {
			loadImageDetail(offcanvasImageDetailElement, e.target.id);
		});
	}
});
