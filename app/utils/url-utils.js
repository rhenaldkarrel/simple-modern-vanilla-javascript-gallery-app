export class URLUtils {
	static isActivePage(path) {
		return location.pathname.includes(path);
	}
}
