import YCFam from '../lib/fam-sdk'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import assert from 'assert'
import output from './output-check-data'
import alInput from './fam-mock'

const fam = new YCFam(
  '100200',
  '6e1b1049a9486d49ba015af00d5a0',
  'luopk@ikangtai.com'
)

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

  it('Test LH Cycle Analysis', () => {
    let lhInput = [
      {
        timestamp:1611901359,
        value:5,
        brand:7,
      },
      {
        timestamp:1611903359,
        value:15,
        brand:7,
      }
    ]
    return fam
      .getLHCycleAnalysis(uuidv4(), lhInput)
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
