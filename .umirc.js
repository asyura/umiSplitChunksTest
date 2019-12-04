// ref: https://umijs.org/config/
export default {  
	treeShaking: true,
	history: 'hash',
	externals: {
	//	bizcharts: 'BizCharts'
  },
  extraBabelPlugins: [
	//	['import', { libraryName: 'recharts', libraryDirectory: 'lib/component' }]
	],
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		[
			'umi-plugin-react',
			{
				antd: true,
				dva: true,
				dynamicImport: { webpackChunkName: true },
				title: 'test',
				dll: false,
				routes: {
					exclude: [ /models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/, /components\// ]
				}
			}
		]
	],
	chainWebpack(config, { webpack }) {
    config.optimization.splitChunks({
      cacheGroups: {
				// styles: {
				// 	chunks: "all",
				// 	name: "styles",
        //   test: /(css|less)/,
				// 	priority: 1,
				// 	minSize: 0,
				// 	minChunks: 1
				// },			
        recharts: {
					chunks: "all",
					name: "recharts",
          test: /(recharts|recharts-scale)/,
          enforce: true,
					priority: 10,
					minSize: 0,
					minChunks: 1
				},
				vendor: {
					chunks: "all",
					name: "vendor",
					priority: 1,
					minSize: 0,
					minChunks: 1
				}
      }
    });
  }
};
