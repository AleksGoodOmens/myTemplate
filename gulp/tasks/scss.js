import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import groupMedia from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp
		.src(app.path.src.css, { sourcemap: true })
		.pipe(app.plugins.plumber(app.plugins.notify.onError(app.plugins.notifySettings('SCSS'))))
		.pipe(sassGlob())
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(
			webpcss({
				webpClass: '.webp',
				noWebpClass: 'no-webp',
			})
		)
		.pipe(
			autoprefixer({
				grid: true,
				overrideBrowserslist: ['last 3 versions'],
				cascade: false,
			})
		)
		.pipe(groupMedia())
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCSS())
		.pipe(
			app.plugins.rename({
				extname: '.min.css',
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream());
};
