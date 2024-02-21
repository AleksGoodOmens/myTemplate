import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
	ftp: 'test',
	clean: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: '',
	build: {
		fonts: `${buildFolder}/fonts/`,
		images: `${buildFolder}/img/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		svgIcons: `${srcFolder}/img/svgIcons/*.svg`,
		svg: `${srcFolder}/img/**/*.svg`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		js: `${srcFolder}/js/app.js`,
		css: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/html/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
		js: `${srcFolder}/js/**/*.js`,
		css: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/html/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
};
