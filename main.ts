radio.onReceivedValue(function (name, value) {
    if (name == "max") {
        max2 = value
    } else if (name == "vitmax") {
        vitmax = value
    } else if (name == "gauche") {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vitmax)
    } else if (name == "droite") {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitmax)
    } else if (name == "beep") {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 15) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, vitmax)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
let max2 = 0
let vitmax = 0
let tel = 0
vitmax = 25
radio.setGroup(183)
basic.forever(function () {
    if (input.soundLevel() > max2) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    radio.sendNumber(input.soundLevel())
})
