# YunCheng FAM Algorithm Document

English | [简体中文](./README.zh-Hans.md)

## Installing

Using npm:

```bash
$ npm install yc-fam-js
```

## Algorithm Request Example

### Node & Browser

```js
import YCFam from 'yc-fam-js'

// YCFam instance need `appId, appSecret, unionId`
let fam = new YCFam('100200', '6e1b1049a9486d49ba015af00d5a0', 'luopk@ikangtai.com')
// FAM algorithm input
let alInput = {
  debug: 0,
  param: { version: 1 },
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
      menstruationRecord: 10
    },
    {
      impactTempFlag: 0,
      BBT: 0,
      ovulationResultByUser: 0,
      ovulationResultByLH: 0,
      cervicalMunusRecord: 0,
      timestamp: 1461988800,
      menstruationRecord: 10
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

## Promises

yc-fam-js depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## License

[MIT](LICENSE)
