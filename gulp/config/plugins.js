// plugins import
import replace from 'gulp-replace';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';
import { notifySettings } from '../config/notifySettings.js';
import newer from 'gulp-newer';
import fs from 'fs';
import ifPlugin from 'gulp-if';

// plugins export
export const plugins = {
	replace,
	notify,
	plumber,
	browserSync,
	rename,
	notifySettings,
	newer,
	fs,
	if: ifPlugin,
};
