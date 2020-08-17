# better-electron

## 安装依赖
运行命令
```shell
yarn 
// or 
npm install
```
### 安装中的网络问题
- `chromedriver`:
```shell
yarn config set "chromedriver_cdnurl" "https://npm.taobao.org/mirrors/chromedriver"
// or
npm config set "chromedriver_cdnurl" "https://npm.taobao.org/mirrors/chromedriver"
```
- `electron`:
可以参考以下命令（未测试）
```shell
// 1.
npm install -g electron-download
// or
yarn global add electron-download

// 2.
electron-download --mirror=https://npm.taobao.org/mirrors/electron/ --version=1.5.0 --platform=win32 --arch=ia32
```


## 运行调试
运行命令
```shell
yarn electron:serve
// or
npm run electron:serve
```

## git commit
运行命令
```shell
yarn commit
// or
npm run commit
```

## electron builder 配置
于 vue.config.js 中的 builderOptions

## 测试
有基于 vue 的单元测试和基于 electron 的 e2e 测试

运行以下命令以测试
```shell
yarn test:unit
```