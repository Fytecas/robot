radio.onReceivedValue(function (name, value) {
    if (name == "max") {
        max2 = value
    } else if (name == "vitmax") {
        vitmax = value
    } else if (name == "tel") {
        tel = value
    }
})
let max2 = 0
let vitmax = 0
let tel = 0
tel = 0
vitmax = 25
radio.setGroup(255)
basic.forever(function () {
    if (tel == 0) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitmax)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vitmax)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, vitmax)
        }
    }
    if (input.soundLevel() > max2) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    radio.sendNumber(input.soundLevel())
})
