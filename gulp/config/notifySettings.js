export const notifySettings = (title) => {
	return {
		title: title,
		message: 'Error <%= error.message %>',
		sound: false,
	};
};
