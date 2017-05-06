module.exports = {
	// 多文件入口
	// czz01 czz02 为入口文件多名称
	entry: {
		czz01: './main1.js',
		czz02: './main2.js',
	},
	// 输出 文件名bundle.js中包含main.js内容
	// [name] --- entry中有多少个文件入口名就会打包生成相同文件名.js文件
	output: {
		filename: '[name].js'
	}
};