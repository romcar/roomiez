const path = require('path'); // Meant for node have to use const

module.exports = {
	context: __dirname,
	entry: './index.jsx', // usually the front door to the project.
	devServer: {
		publicPath: '/public/' // name of the path on the server
	},
	devtool: 'cheap-eval-source-map', // there are different ones that do different things
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'] // order of resolution L -> R
	},
	stats: {
		// various things that get reported back to you when webpack is being built
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
		]
	}
};
