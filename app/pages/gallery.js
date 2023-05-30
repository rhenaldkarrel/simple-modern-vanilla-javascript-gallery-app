import { loadNav, loadPhotos } from '../ui/index.js';
import { DOM } from '../utils/index.js';
import { gallery } from '../constants/images-data.js';

document.addEventListener('DOMContentLoaded', function () {
	const photosContainerClass = '.photos .row';

	loadNav();
	loadPhotos(photosContainerClass, gallery);

	const searchForm = DOM.find('.search-form');

	searchForm.addEventListener('submit', function (e) {
		e.preventDefault();

		const query = DOM.find('#search-input').value;

		if (query === '') {
			return loadPhotos(photosContainerClass, gallery);
		}

		const result = gallery.filter((p) => p.category.includes(query));

		loadPhotos(photosContainerClass, result);
	});
});
