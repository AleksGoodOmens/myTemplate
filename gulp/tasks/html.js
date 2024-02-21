import fileinclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import htmlclean from 'gulp-htmlclean';

export const html = () => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(app.plugins.plumber(app.plugins.notify.onError(app.plugins.notifySettings('HTML'))))
		.pipe(
			fileinclude({
				prefix: '@@',
				basepath: '@file',
			})
		)
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(htmlclean())
		.pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				versionNumber({
					value: '%DT%',
					append: {
						key: '-v',
						cover: 0,
						to: ['css', 'js'],
					},
					output: {
						file: 'gulp/version.json',
					},
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream());
};
