import clean from 'gulp-clean';

export const reset = (done) => {
	if (app.plugins.fs.existsSync(app.path.clean)) {
		return app.gulp.src(app.path.clean).pipe(clean()).on('end', done);
	}
	return done();
};
