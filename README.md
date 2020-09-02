# YunCheng FAM Algorithm Document

English | [简体中文](./README.zh-Hans.md)

## Installing & Updating

Installing by npm:

```bash
$ npm install yc-fam-js
```

Updating by npm:

```bash
$ npm update yc-fam-js
```

## Algorithm Request Example

### Node & Browser

See <https://github.com/iKangtai/yc-fam-js-demo.git>

## yc-fam-js API

### FAM class define

```js
class YCFam {
  /**
   * Get a FAM Algorithm instance
   * @param {String} appId App Id, get from YunCheng
   * @param {String} appSecret App Secret, get from YunCheng
   * @param {String} unionId A unique Id for user of App
   */
  constructor(appId, appSecret, unionId)
}
```

### Start a FAM algorithm request

```js
/**
 * Call FAM Algorithm
 * @param {String} debugId UUID
 * @param {Object} input The input data for algorithm
 * @returns {Promise} Return algorithm results
 */
getFAMDays(debugId, input)
```

## Algorithm Data

### Input

```js
{
  debug: 0, // Debug or not, default is 0
  param: { version: 1 }, // Version, 1
  userData: // User Data, Object
  {
    userAverageCycleLength: 28, // Average cycle length, default is 28, required
    userCycleLengthError: 0, // Cycle length error, default is 0, optional
    userCycleRegularity: 1, // 周期是否规律，0 不规律，1 规律，默认 1
    userAverageMenstruationLength: 5, // 平均经期长度，整数，单位 天，默认 5，必填
    userAverageLuteumLength: 14 // 平均黄体期长度，整数，单位 天，默认 14
  },
  daysInput: // 用户输入的 “经期、BBT、排卵日” 等数据，以天为单位，一天一条，Array
  [
    {
      impactTempFlag: 0, // 当天是否有 “发烧、熬夜” 等影响基础体温的情况，1 有，0 没有，默认 0
      BBT: 36.54, // 当天的基础体温，0 表示当天没有测温，默认 0，单位为 ℃，类型为 float
      ovulationResultByUser: 0, // 用户是否标记当天为排卵日，1 标记了，0 未标记，默认 0
      ovulationResultByLH: 0, // 当天是否是 LH 试纸确认的排卵日，1 是，0 不是，默认 0
      cervicalMunusRecord: 0, // 当天的宫颈粘液打分，打分标准见备注，默认 0
      timestamp: 1461902400, // 当天的时间戳，注意其时分秒需要设置为 12:00:00，必填
      dayOfCycle: 0, // 已废弃，不需要填写
      menstruationRecord: 10 // 经期记录，注意：算法不区分开始和结束。取值说明见备注，默认 0
    },
    ...
  ]
}
```

Comments:

- cervicalMunusRecord 宫颈粘液打分说明
  - 无数据：0
  - 干燥：1
  - 潮湿：2
  - 粘稠：3
  - 蛋清/水状：4
- menstruationRecord 经期记录取值说明
  - 无数据：0
  - 经期流血：10  注意：如果用户输入的是 “经期开始和结束”，在调用算法的时候，只需要把开始和结束内的日期都标记成 10 即可

### Output

```js
{
  code: 200, // 返回码，详细说明见备注
  message: "success", // 返回码对应的信息
  data: { // 用于存放返回的算法结果，Object
    daysOutput: [ // 算法返回的具体信息，以天为单位，一天一条，Array
      {
        pa: 1, // 当天所处的时段，详细说明见备注
        date: 1461902400, // 当天的时间戳，正常情况下为当天的 12:00:00（需要控制算法输入的 timestamp）
        cd: 1 // 当天处于周期的第几天
      },
      ...
    ]
  }
}
```

备注：

- code 返回码的说明
  - 200：没有错误，正常返回
  - 40005：时间戳错误
  - 40201：传入参数有问题，json 无法解析
  - 40251：dayInput 为空
  - 40252：没有经期记录
  - 40401：day 数据非法
- pa 当天所处时段的说明
  - 1：经期
  - 2：卵泡期
  - 3：排卵期
  - 4：排卵日
  - 5：黄体期

## Promises

yc-fam-js depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## License

[MIT](LICENSE)
