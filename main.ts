let blinker = 0
let distance = 0
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.showLeds(`
    . . . . .
    # . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # . . .
    # # . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # . .
    # # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # .
    # # # # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    . . . . .
    . . . . .
    `)
DFRobotMaqueenPlusV2.init()
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance < 30 && distance != 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 70)
        basic.pause(1000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
    if (blinker) {
        blinker = 0
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        blinker = 1
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
})
