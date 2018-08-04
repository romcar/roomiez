const path = require('path'); // Meant for node have to use const

module.exports = {
	context: __dirname,
	entry: './src/index.jsx', // usually the front door to the project.
	devServer: {
		publicPath: '/public/' // name of the path on the server
		// historyApiFallback: true
	},
	devtool: 'cheap-eval-source-map', // there are different ones that do different things
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: path.join(__dirname, 'public/'),
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
				// enforces eslint to be run before the build, good reminder
				enforce: 'pre',
				test: /\.jsx?$/,
				exclude: [/node_modules/, '/src/registerServiceWorker.js'],
				loader: 'eslint-loader',
				options: {
					fix: true,
					quiet: true,
					configFile: '.eslintrc.json'
				}
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader'
			}
		]
	}
};
