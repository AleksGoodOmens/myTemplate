import svgSprite from 'gulp-svg-sprites';

export const svgIcons = () => {
	return app.gulp
		.src(app.path.src.svgIcons)
		.pipe(app.plugins.plumber(app.plugins.notify.onError(app.plugins.notifySettings('svgIcons'))))
		.pipe(svgSprite())
		.pipe(app.gulp.dest(app.path.build.images));
};
