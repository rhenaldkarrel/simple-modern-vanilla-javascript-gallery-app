export class URLUtils {
	static isActivePage(path) {
		return location.pathname.includes(path);
	}

	static getParam(param) {
		const urlParams = new URLSearchParams(location.search);
		const paramValue = urlParams.get(param);

		if (!paramValue) {
			return null;
		}

		return paramValue;
	}
}
