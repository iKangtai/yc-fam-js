import YCFam from '../lib/fam-sdk'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import assert from 'assert'

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
const chData = {
  code: 200,
  message: "success",
  data: {
    daysOutput: [
      {
        pa: 1,
        date: 1461902400,
        cd: 1
      },
      {
        pa: 1,
        date: 1461988800,
        cd: 2
      },
      {
        pa: 2,
        date: 1462075200,
        cd: 3
      },
      {
        pa: 2,
        date: 1462161600,
        cd: 4
      },
      {
        pa: 2,
        date: 1462248000,
        cd: 5
      },
      {
        pa: 2,
        date: 1462334400,
        cd: 6
      },
      {
        pa: 2,
        date: 1462420800,
        cd: 7
      },
      {
        pa: 2,
        date: 1462507200,
        cd: 8
      },
      {
        pa: 2,
        date: 1462593600,
        cd: 9
      },
      {
        pa: 3,
        date: 1462680000,
        cd: 10
      },
      {
        pa: 3,
        date: 1462766400,
        cd: 11
      },
      {
        pa: 3,
        date: 1462852800,
        cd: 12
      },
      {
        pa: 3,
        date: 1462939200,
        cd: 13
      },
      {
        pa: 3,
        date: 1463025600,
        cd: 14
      },
      {
        pa: 4,
        date: 1463112000,
        cd: 15
      },
      {
        pa: 3,
        date: 1463198400,
        cd: 16
      },
      {
        pa: 5,
        date: 1463284800,
        cd: 17
      },
      {
        pa: 5,
        date: 1463371200,
        cd: 18
      },
      {
        pa: 5,
        date: 1463457600,
        cd: 19
      },
      {
        pa: 5,
        date: 1463544000,
        cd: 20
      },
      {
        pa: 5,
        date: 1463630400,
        cd: 21
      },
      {
        pa: 5,
        date: 1463716800,
        cd: 22
      },
      {
        pa: 5,
        date: 1463803200,
        cd: 23
      },
      {
        pa: 5,
        date: 1463889600,
        cd: 24
      },
      {
        pa: 5,
        date: 1463976000,
        cd: 25
      },
      {
        pa: 5,
        date: 1464062400,
        cd: 26
      },
      {
        pa: 5,
        date: 1464148800,
        cd: 27
      },
      {
        pa: 5,
        date: 1464235200,
        cd: 28
      },
      {
        pa: 1,
        date: 1464321600,
        cd: 1
      },
      {
        pa: 1,
        date: 1464408000,
        cd: 2
      },
      {
        pa: 1,
        date: 1464494400,
        cd: 3
      },
      {
        pa: 1,
        date: 1464580800,
        cd: 4
      },
      {
        pa: 1,
        date: 1464667200,
        cd: 5
      },
      {
        pa: 2,
        date: 1464753600,
        cd: 6
      },
      {
        pa: 2,
        date: 1464840000,
        cd: 7
      },
      {
        pa: 2,
        date: 1464926400,
        cd: 8
      },
      {
        pa: 2,
        date: 1465012800,
        cd: 9
      },
      {
        pa: 3,
        date: 1465099200,
        cd: 10
      },
      {
        pa: 3,
        date: 1465185600,
        cd: 11
      },
      {
        pa: 3,
        date: 1465272000,
        cd: 12
      },
      {
        pa: 3,
        date: 1465358400,
        cd: 13
      },
      {
        pa: 3,
        date: 1465444800,
        cd: 14
      },
      {
        pa: 4,
        date: 1465531200,
        cd: 15
      },
      {
        pa: 3,
        date: 1465617600,
        cd: 16
      },
      {
        pa: 5,
        date: 1465704000,
        cd: 17
      },
      {
        pa: 5,
        date: 1465790400,
        cd: 18
      },
      {
        pa: 5,
        date: 1465876800,
        cd: 19
      },
      {
        pa: 5,
        date: 1465963200,
        cd: 20
      },
      {
        pa: 5,
        date: 1466049600,
        cd: 21
      },
      {
        pa: 5,
        date: 1466136000,
        cd: 22
      },
      {
        pa: 5,
        date: 1466222400,
        cd: 23
      },
      {
        pa: 5,
        date: 1466308800,
        cd: 24
      },
      {
        pa: 5,
        date: 1466395200,
        cd: 25
      },
      {
        pa: 5,
        date: 1466481600,
        cd: 26
      },
      {
        pa: 5,
        date: 1466568000,
        cd: 27
      },
      {
        pa: 5,
        date: 1466654400,
        cd: 28
      },
      {
        pa: 1,
        date: 1466740800,
        cd: 1
      },
      {
        pa: 1,
        date: 1466827200,
        cd: 2
      },
      {
        pa: 1,
        date: 1466913600,
        cd: 3
      },
      {
        pa: 1,
        date: 1467000000,
        cd: 4
      },
      {
        pa: 1,
        date: 1467086400,
        cd: 5
      },
      {
        pa: 2,
        date: 1467172800,
        cd: 6
      },
      {
        pa: 2,
        date: 1467259200,
        cd: 7
      },
      {
        pa: 2,
        date: 1467345600,
        cd: 8
      },
      {
        pa: 2,
        date: 1467432000,
        cd: 9
      },
      {
        pa: 3,
        date: 1467518400,
        cd: 10
      },
      {
        pa: 3,
        date: 1467604800,
        cd: 11
      },
      {
        pa: 3,
        date: 1467691200,
        cd: 12
      },
      {
        pa: 3,
        date: 1467777600,
        cd: 13
      },
      {
        pa: 3,
        date: 1467864000,
        cd: 14
      },
      {
        pa: 4,
        date: 1467950400,
        cd: 15
      },
      {
        pa: 3,
        date: 1468036800,
        cd: 16
      },
      {
        pa: 5,
        date: 1468123200,
        cd: 17
      },
      {
        pa: 5,
        date: 1468209600,
        cd: 18
      },
      {
        pa: 5,
        date: 1468296000,
        cd: 19
      },
      {
        pa: 5,
        date: 1468382400,
        cd: 20
      },
      {
        pa: 5,
        date: 1468468800,
        cd: 21
      },
      {
        pa: 5,
        date: 1468555200,
        cd: 22
      },
      {
        pa: 5,
        date: 1468641600,
        cd: 23
      },
      {
        pa: 5,
        date: 1468728000,
        cd: 24
      },
      {
        pa: 5,
        date: 1468814400,
        cd: 25
      },
      {
        pa: 5,
        date: 1468900800,
        cd: 26
      },
      {
        pa: 5,
        date: 1468987200,
        cd: 27
      },
      {
        pa: 5,
        date: 1469073600,
        cd: 28
      },
      {
        pa: 1,
        date: 1469160000,
        cd: 1
      },
      {
        pa: 1,
        date: 1469246400,
        cd: 2
      },
      {
        pa: 1,
        date: 1469332800,
        cd: 3
      },
      {
        pa: 1,
        date: 1469419200,
        cd: 4
      },
      {
        pa: 1,
        date: 1469505600,
        cd: 5
      },
      {
        pa: 2,
        date: 1469592000,
        cd: 6
      },
      {
        pa: 2,
        date: 1469678400,
        cd: 7
      },
      {
        pa: 2,
        date: 1469764800,
        cd: 8
      },
      {
        pa: 2,
        date: 1469851200,
        cd: 9
      },
      {
        pa: 3,
        date: 1469937600,
        cd: 10
      },
      {
        pa: 3,
        date: 1470024000,
        cd: 11
      },
      {
        pa: 3,
        date: 1470110400,
        cd: 12
      },
      {
        pa: 3,
        date: 1470196800,
        cd: 13
      },
      {
        pa: 3,
        date: 1470283200,
        cd: 14
      },
      {
        pa: 4,
        date: 1470369600,
        cd: 15
      },
      {
        pa: 3,
        date: 1470456000,
        cd: 16
      },
      {
        pa: 5,
        date: 1470542400,
        cd: 17
      },
      {
        pa: 5,
        date: 1470628800,
        cd: 18
      },
      {
        pa: 5,
        date: 1470715200,
        cd: 19
      },
      {
        pa: 5,
        date: 1470801600,
        cd: 20
      },
      {
        pa: 5,
        date: 1470888000,
        cd: 21
      },
      {
        pa: 5,
        date: 1470974400,
        cd: 22
      },
      {
        pa: 5,
        date: 1471060800,
        cd: 23
      },
      {
        pa: 5,
        date: 1471147200,
        cd: 24
      },
      {
        pa: 5,
        date: 1471233600,
        cd: 25
      },
      {
        pa: 5,
        date: 1471320000,
        cd: 26
      },
      {
        pa: 5,
        date: 1471406400,
        cd: 27
      },
      {
        pa: 5,
        date: 1471492800,
        cd: 28
      }
    ]
  }
}

describe('Test FAM Algorithms', () => {
  it('Basic Algorithm', () => {
    return fam
      .getFAMDays(uuidv4(), alInput)
      .then((res) => {
        const alData = res
        if (_.isEqual(alData, chData)) {
          assert.ok(true)
        } else {
          assert.fail(JSON.stringify(alData) 
          + '\n==============\n' 
          + JSON.stringify(chData))
        }
      })
      .catch((err) => {
        assert.fail(err)
      })
  })

  it('Test Algorithm Cache', () => {
    return fam
      .getFAMDays(uuidv4(), alInput)
      .then((res) => {
        const alData = res
        if (_.isEqual(alData, chData)) {
          assert.ok(true)
        } else {
          assert.fail(
            JSON.stringify(alData) +
              '\n==============\n' +
              JSON.stringify(chData)
          )
        }
      })
      .catch((err) => {
        assert.fail(err)
      })
  })
})
