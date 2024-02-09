const config = {
	mode: 'production',

	// new page should be added manual
	entry: {
		index: './src/js/index.js',
		// contacts: './src/js/contacts.js',
	},

	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

export default config;
