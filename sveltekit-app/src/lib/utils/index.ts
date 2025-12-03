export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

export function truncateText(text: string, maxLength: number, suffix: string = '...') {
	return text.length > maxLength
		? `${text.slice(0, maxLength - suffix.length)}${suffix}`
		: text;
}