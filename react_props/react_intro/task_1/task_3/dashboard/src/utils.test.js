import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("getFullYear should return the correct year", () => {
	const currentYear = new Date().getFullYear();
	expect(getFullYear()).toEqual(currentYear);
});

test("getFooterCopy should return correct string when isIndex is true", () => {
	const result = getFooterCopy(true);
	expect(result).toEqual("Holberton School");
});

test("getFooterCopy should return correct string when isIndex is false", () => {
	const result = getFooterCopy(false);
	expect(result).toEqual("Holberton School main dashboard");
});

test("getLatestNotification should return HTML-formatted urgent notification", () => {
	const result = getLatestNotification();
	expect(result).toEqual(
		"<strong>Urgent requirement</strong> - complete by EOD"
	);
});
