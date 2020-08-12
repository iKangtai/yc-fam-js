# YunCheng FAM 算法 JavaScript SDK 说明文档

## Installing

Using npm:

```bash
$ npm install yc-fam-js
```

Using bower:

```bash
$ bower install yc-fam-js
```

Using yarn:

```bash
$ yarn add yc-fam-js
```

## Example

Get FAM Result

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

## yc-fam-js API

##### FAM class define

```js
class YCFam {
  /**
   *
   * @param {String} appId 应用 Id，由 yuncheng 分配
   * @param {String} appSecret 应用密钥，由 yuncheng 分配
   * @param {String} unionId 用户唯一标识符。同一个应用內，两个用户不能重复
   */
  constructor(appId, appSecret, unionId)
}
```

##### Start a FAM algorithm request

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

yc-fam-js depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## License

[MIT](LICENSE)
