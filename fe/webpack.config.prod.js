const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 리소스를 복사해서 옮겨준다.
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// webpack minimize plugin
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	// production mode는 운영환경에 필요한 플러그인과 minimize가 추가된다.
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		path: path.resolve('assets'),
		filename: 'static/js/bundle.[hash].js',
		// public path :  base path for all the assets within your application.
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true,
						},
					},
				],
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
                    {
                        loader: 'style-loader',
                    },
					{
						loader: 'css-loader',
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'file-loader',
					options: {
                        name: '[name].[ext]?[hash]',
                        outputPath: 'static/images'
					}
				}],
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'file-loader',
					options: {
                        name: '[name].[ext]',
                        outputPath: 'static/fonts'
					}
				}],
			},
		],
	},
	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname)
		],
		extensions:
            ['.js', '.jsx', '.ts', '.tsx', '.css'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns : [
			]
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					// ecma5로 설정해주어야 ie에서도 동작
					ecma: 5,
					compress: {
						drop_console: true
					}
				}
			})
		],
	},
};