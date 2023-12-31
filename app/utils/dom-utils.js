export class DOMUtils {
	static find(el) {
		return document.querySelector(el);
	}

	static findAll(els) {
		return document.querySelectorAll(els);
	}
}
