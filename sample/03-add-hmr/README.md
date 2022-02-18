# 添加热重载
前提：完成项目搭建：使用cli

#### 第一步：
``` js
npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack
```
#### 添加配置
在根目录新建`webpack-hmr.config.js`, 配置内容：
``` js
// webpack-hmr.config.js
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename }),
    ],
  };
};
```

#### 在根方法中调用
新增以下几行
``` ts
+ declare const module: any;

    async function bootstrap() {
      const app = await NestFactory.create(AppModule);
      await app.listen(3000);

+   if (module.hot) {
+      module.hot.accept();
+      module.hot.dispose(() => app.close());
+   }
  }
  bootstrap();
```

#### 修改启动
package.json
```
"start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch"
``
这时候你就可以测试修改是否重载了，不用每次修改都去启动下了
