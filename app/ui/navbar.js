import { navLinks } from '../constants/nav-link.js';
import { DOMUtils, URLUtils } from '../utils/index.js';

export function loadNav() {
	const navbarNav = DOMUtils.find('.navbar-nav');
	const isActive = (path) => (URLUtils.isActivePage(path) ? 'active' : '');

	const navLink = navLinks
		.map(
			(n) => `
    <li class="nav-item">
      <a class="nav-link ${isActive(n.href)}" href=".${n.href}">${n.title}</a>
    </li>
    `
		)
		.join('');

	navbarNav.innerHTML = navLink;
}
