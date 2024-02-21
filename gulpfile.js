import gulp from 'gulp';

// import modules
import { path } from './gulp/config/path.js';

// import general plugins
import { plugins } from './gulp/config/plugins.js';

// creating global variable
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
};

// tasks import
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, ttfToWoff2, fontsStyle } from './gulp/tasks/fonts.js';
import { svgIcons } from './gulp/tasks/svgIcons.js';
import { zipDist } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

// watchers  (dest, function)
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.css, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// export independent tasks
export { svgIcons };

// fonts convector
const fonts = gulp.series(otfToTtf, ttfToWoff, ttfToWoff2, fontsStyle);

// parallel tasks
const mainTasks = gulp.parallel(copy, images, html, scss, js);
const serverWatcher = gulp.parallel(watcher, server);

// scenario builder
const dev = gulp.series(reset, fonts, mainTasks, serverWatcher);
const build = gulp.series(reset, mainTasks, server);
const deployZip = gulp.series(zipDist);
const deployToFtp = gulp.series(ftp);

// export scenario
export { dev };
export { build };
export { deployZip };
export { deployToFtp };

// scenario tasks
gulp.task('default', dev);
