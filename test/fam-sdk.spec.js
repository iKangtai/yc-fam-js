import YCFam from '../lib/fam-sdk'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import assert from 'assert'
import output from './output-check-data'

const fam = new YCFam(
  '100200',
  '6e1b1049a9486d49ba015af00d5a0',
  'luopk@ikangtai.com'
)
const alInput = {
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

describe('Test FAM Algorithms', () => {
  it('Basic Algorithm', () => {
    return fam
      .getFAMDays(uuidv4(), alInput)
      .then((res) => {
        const alData = res
        if (_.isEqual(alData, output.output1)) {
          assert.ok(true)
        } else {
          assert.fail(JSON.stringify(alData) 
          + '\n==============\n' 
          + JSON.stringify(output.output1))
        }
      })
      .catch((err) => {
        assert.fail(err)
      })
  }).timeout(15000)

  it('Test Algorithm Cache', () => {
    return fam
      .getFAMDays(uuidv4(), alInput)
      .then((res) => {
        const alData = res
        if (_.isEqual(alData, output.output1)) {
          assert.ok(true)
        } else {
          assert.fail(
            JSON.stringify(alData) +
              '\n==============\n' +
              JSON.stringify(output.output1)
          )
        }
      })
      .catch((err) => {
        assert.fail(err)
      })
  }).timeout(15000)
})
