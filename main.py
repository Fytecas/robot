radio.onReceivedValue(function (name, value) {
    if (name == "max") {
        max2 = value
    } else if (name == "vitmax") {
        vitmax = value
    } else if (name == "tel") {
        tel = value
    }
})
let tel = 0
let max2 = 0
let vitmax = 0
vitmax = 25
radio.setGroup(255)
basic.forever(function () {
    if (tel != 1) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitmax)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vitmax)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, vitmax)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (input.soundLevel() > max2) {
        maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDLeft)
        maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDRight)
    } else {
        maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDLeft)
        maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDRight)
    }
    radio.sendNumber(input.soundLevel())
})
