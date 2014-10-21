/**
 * @file Provides helpers to determine the scroll offsets needed to adjust event (e.g. click) coordinates
 * @author Tom Jenkins tom@itsravenous.com
 */

/**
 * Finds the scrollTop offset of the nearest scrolled parent
 * @param {Element}
 * @return {Element}
 */
function findScrollTopOffset (el) {
	el = el.parentNode;
	console.log('el', el);
	if (el) {
		while (el && el.scrollTop == 0) {
			el = el.parentNode || el.host;
			console.log('el', el.host);
		}

		return el.scrollTop ? el.scrollTop : 0;
	} else {
		return 0;
	}
}
/**
 * Finds the scrollLeft offset of the nearest scrolled parent
 * @param {Element}
 * @return {Element}
 */
function findScrollLeftOffset (el) {
	el = el.parentNode;
	if (el) {
		while (el && el.scrollLeft == 0) {
			el = el.parentNode || el.host;
		}

		return el.scrollLeft ? el.scrollLeft : 0;
	} else {
		return 0;
	}
}