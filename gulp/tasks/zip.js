import zip from 'gulp-zip';
import debug from 'gulp-debug';

export const zipDist = () => {
	return app.gulp
		.src(`${app.path.clean}/**/*`)
		.pipe(debug())
		.pipe(app.plugins.plumber(app.plugins.notify.onError(app.plugins.notifySettings('ZIP'))))
		.pipe(zip(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest('./dist/'));
};
