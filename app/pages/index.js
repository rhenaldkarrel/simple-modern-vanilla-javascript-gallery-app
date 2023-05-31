import { loadTemplate, loadPhotos, loadImageDetail } from '../ui/index.js';
import { CATEGORIES, gallery } from '../constants/images-data.js';
import { DOMUtils } from '../utils/index.js';

const blogImages = gallery.filter((p) => p.category.includes(CATEGORIES.blog));
const musicImages = gallery.filter((p) =>
	p.category.includes(CATEGORIES.music)
);
const editorialImages = gallery.filter((p) =>
	p.category.includes(CATEGORIES.editorial)
);

document.addEventListener('DOMContentLoaded', function () {
	loadTemplate();

	loadPhotos('.photos .photos-blog', blogImages);
	loadPhotos('.photos .photos-music', musicImages);
	loadPhotos('.photos .photos-editorial', editorialImages);

	const offcanvasImageDetailElement = DOMUtils.find('.offcanvas');
	const photos = DOMUtils.findAll('a.image-col');

	for (let photo of photos) {
		photo.addEventListener('click', function (e) {
			loadImageDetail(offcanvasImageDetailElement, e.target.id);
		});
	}
});
