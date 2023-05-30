import { loadTemplate, loadPhotos } from '../ui/index.js';
import { CATEGORIES, gallery } from '../constants/images-data.js';

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
});
