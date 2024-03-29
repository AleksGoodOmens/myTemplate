import webpack from 'webpack-stream';

export const js = () => {
	return app.gulp
		.src(app.path.src.js, { sourcemap: app.isDev })
		.pipe(app.plugins.plumber(app.plugins.notify(app.plugins.notifySettings('JS'))))
		.pipe(
			webpack({
				mode: app.isBuild ? 'production' : 'development',
				output: { filename: 'app.min.js' },
			})
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream());
};
