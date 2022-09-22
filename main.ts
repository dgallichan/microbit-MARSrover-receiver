radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "Turn") {
        RawTurn = value
        MappedTurn = pins.map(
        RawTurn,
        -90,
        90,
        -100,
        100
        )
        leftTurn = MappedTurn
        rightTurn = MappedTurn
    }
    if (name == "Drive") {
        RawDrive = value
        MappedDrive = pins.map(
        RawDrive,
        90,
        -90,
        -100,
        100
        )
        leftDrive = MappedDrive
        rightDrive = 180 - MappedDrive
    }
    LeftOutput = (leftDrive + leftTurn) / 2
    RightOutput = (rightDrive + rightTurn) / 2
    if (RawDrive == 0 && RawTurn == 0) {
        Rover.stop(eStopMode.Coast)
    } else {
        Rover.motor(eMotor.Left, eVector.Forward, LeftOutput)
        Rover.motor(eMotor.Right, eVector.Forward, RightOutput)
    }
    if (name == "Grabber") {
        RawGrabber = value
        if (RawGrabber == -999) {
        	
        } else {
            MappedGrabber = pins.map(
            RawGrabber,
            -90,
            90,
            -100,
            100
            )
            Rover.spin(eDirection.Right, MappedGrabber)
        }
    }
})
let MappedGrabber = 0
let RawGrabber = 0
let RightOutput = 0
let LeftOutput = 0
let rightDrive = 0
let leftDrive = 0
let MappedDrive = 0
let RawDrive = 0
let rightTurn = 0
let leftTurn = 0
let MappedTurn = 0
let RawTurn = 0
radio.setGroup(1)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(100)
})
