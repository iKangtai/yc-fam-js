# YunCheng FAM 算法 JavaScript SDK 说明文档

[English](./README.en-US.md) | 简体中文

## 安装

使用 npm:

```bash
$ npm install yc-fam-js
```

使用 bower:

```bash
$ bower install yc-fam-js
```

使用 yarn:

```bash
$ yarn add yc-fam-js
```

## FAM 算法请求示例

### Node & Browser

```js
import YCFam from 'yc-fam-js'

// YCFam instance need `appId, appSecret, unionId`
let fam = new YCFam('100200', '6e1b1049a9486d49ba015af00d5a0', 'luopk@ikangtai.com')
// FAM algorithm input
let alInput = {
  debug: 0,
  userData: {
    userAverageCycleLength: 28,
    userCycleLengthError: 1,
    userCycleRegularity: 1,
    userAverageMenstruationLength: 5,
    userAverageLuteumLength: 14
  },
  daysInput: [
    {
      impactTempFlag: 0,
      BBT: 0,
      ovulationResultByUser: 0,
      ovulationResultByLH: 0,
      cervicalMunusRecord: 0,
      timestamp: 1461902400,
      dayOfCycle: 0,
      menstruationRecord: 1
    },
    {
      impactTempFlag: 0,
      BBT: 0,
      ovulationResultByUser: 0,
      ovulationResultByLH: 0,
      cervicalMunusRecord: 0,
      timestamp: 1461988800,
      dayOfCycle: 0,
      menstruationRecord: 1
    }
  ]
}

async function testFAMDays() {
  let debugId = 'uuid' // This param should be UUID
  try {
    const { data } = await fam.getFAMDays(debugId, alInput)
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

testFAMDays()
```

### 小程序

小程序基础库版本需要在 2.2.1 或以上，使用 npm 安装第三方包的方法详见小程序开发文档 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

示例 [代码片段](https://developers.weixin.qq.com/s/1Bv3jzmb7rjy)

#### 注意事项

- 需要把算法的服务器地址 `https://saas.shecarefertility.com` 添加到小程序合法域名列表里；
- 算法库使用了 Promise，需要小程序开启 `ES6 转 ES5`，否则会报错 `Unexpected identifier` 不能编译；
- 代码片段里使用了 async/await，需要小程序开启 `增强编译`，否则在部分小程序基础库会报错 `ReferenceError: regeneratorRuntime is not defined` 不能编译；
- 代码片段使用 npm 方式集成算法库，运行前需要点击开发者工具中的菜单栏 `工具 --> 构建 npm` 才能正常编译、运行。运行成功后，算法结果输出在控制台。

## 算法库 API

### FAM 类定义

```js
class YCFam {
  /**
   * 实例化算法对象
   * @param {String} appId 应用 Id，由 yuncheng 分配
   * @param {String} appSecret 应用密钥，由 yuncheng 分配
   * @param {String} unionId 用户唯一标识符。同一个应用內，两个用户不能重复
   */
  constructor(appId, appSecret, unionId)
}
```

### FAM 算法请求入口

```js
/**
 * 发起算法请求
 * @param {String} debugId 格式为 UUID 的字符串，用于唯一标记一次请求
 * @param {Object} input 算法的输入项
 * @returns {Promise} 返回算法请求结果
 */
getFAMDays(debugId, input)
```

## Promises

yc-fam-js 依赖 ES6 Promise，详见 [supported](http://caniuse.com/promises)。
如果你的环境不支持 Promise，可以 [polyfill](https://github.com/jakearchibald/es6-promise).

## License

[MIT](LICENSE)
