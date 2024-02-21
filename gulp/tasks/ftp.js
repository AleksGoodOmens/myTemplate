import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
	configFTP.log = util.log;
	const ftpConnect = vinylFTP.create(configFTP);
	return app.gulp
		.src(`${app.path.clean}/**/*.*`, {})
		.pipe(app.plugins.plumber(app.plugins.notify.onError(app.plugins.notifySettings('FTP'))))
		.pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
};
