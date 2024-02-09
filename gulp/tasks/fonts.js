import fonter from 'gulp-fonter-2';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/*.otf`, {})
		.pipe(app.plugins.plumber(app.plugins.notify.onError(app.plugins.notifySettings('FONTS'))))
		.pipe(fonter({ formats: ['ttf'] }))
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/*.ttf`)
		.pipe(app.plugins.plumber(app.plugins.notify.onError(app.plugins.notifySettings('FONTS'))))
		.pipe(fonter({ formats: ['woff'] }))
		.pipe(app.gulp.dest(app.path.build.fonts));
};

export const ttfToWoff2 = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/*.ttf`)
		.pipe(app.plugins.plumber(app.plugins.notify.onError(app.plugins.notifySettings('FONTS'))))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.path.build.fonts));
};

export const fontsStyle = () => {
	// Font style file
	const fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;

	// Check for font files
	app.plugins.fs.readdir(app.path.build.fonts, (err, fontsFiles) => {
		if (err) {
			console.error('Error reading font files:', err);
			return;
		}

		if (!fontsFiles) {
			console.log('No font files found.');
			return;
		}

		//
		if (!app.plugins.fs.existsSync(fontsFile)) {
			console.log('Creating font style file:', fontsFile);

			const changeFontWeightToInteger = (fontWeightInName) => {
				switch (fontWeightInName) {
					case 'thin':
						return 100;
					case 'extralight':
					case 'ultralight':
						return 200;
					case 'light':
						return 300;
					case 'medium':
						return 500;
					case 'semibold':
					case 'demibold':
						return 600;
					case 'bold':
						return 700;
					case 'extrabold':
					case 'ultrabold':
						return 800;
					case 'heavy':
					case 'black':
						return 900;
					default:
						return 400;
				}
			};

			let fontStyle = '';

			fontsFiles.forEach((fontName) => {
				const fullFontName = fontName.split('.')[0];

				const matchedFontName = fullFontName.match(/[a-zA-Z]+/g);

				fontStyle += `@font-face {
					font-display: swap;
					font-family: ${matchedFontName[0]};
					font-style: ${matchedFontName[1].match(/italic/i) ? 'italic' : 'normal'};
					font-weight: ${changeFontWeightToInteger(matchedFontName[1].replace(/italic/gi, '').toLowerCase() || 'regular')};
					src: url("../fonts/${fullFontName}.woff2") format("woff2"), url("../fonts/${fullFontName}.woff") format("woff")
			}
				`;
			});

			app.plugins.fs.writeFile(fontsFile, fontStyle, (err) => {
				if (err) {
					console.error('Error writing font style file:', err);
				} else {
					console.log('Font style file created:', fontsFile);
				}
			});
		} else {
			console.log('Font style file already exists:', fontsFile);
			console.log('Please delete it manually and then run the task again.');
		}
	});

	return app.gulp.src(`${app.path.srcFolder}`);
};
