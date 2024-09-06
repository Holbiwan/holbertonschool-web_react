/**
 * getFullYear - Returns the current year.
 *
 * @returns {number} - The current year.
 */
export const getFullYear = () => new Date().getFullYear();

/**
 * getFooterCopy - Returns the footer copy based on the page type.
 *
 * @param {boolean} isIndex - Indicates whether the page is the index page.
 * @returns {string} - The footer copy text.
 */
export const getFooterCopy = (isIndex) =>
	isIndex ? "Holberton School" : "Holberton School main dashboard";

/**
 * getLatestNotification - Returns the latest urgent notification.
 *
 * @returns {string} - The HTML-formatted urgent notification.
 */
export const getLatestNotification = () =>
	`<strong>Urgent requirement</strong> - complete by EOD`;
