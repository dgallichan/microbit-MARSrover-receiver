radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "Turn") {
        RawTurn = value
        MappedTurn = pins.map(
        RawTurn,
        -1000,
        1000,
        -20,
        20
        )
        // MARS rover accepts -45 to 45 it seems, but driving at speed with high turn values seems to get arms flailing...
        MappedTurn = Math.constrain(MappedTurn, -20, 20)
    }
    if (name == "Drive") {
        RawDrive = value
        MappedDrive = pins.map(
        RawDrive,
        -1000,
        1000,
        -100,
        100
        )
        MappedDrive = Math.constrain(MappedDrive, -100, 100)
    }
    if (RawDrive == 0 && RawTurn == 0) {
        Rover.stop(eStopMode.Coast)
    } else {
        if (MappedDrive > 0) {
            Rover.motor(eMotor.Both, eVector.Forward, MappedDrive)
        } else {
            Rover.motor(eMotor.Both, eVector.Reverse, -1 * MappedDrive)
        }
        if (MappedTurn > 0) {
            Rover.steer(eDirection.Right, MappedTurn)
        } else {
            Rover.steer(eDirection.Left, -1 * MappedTurn)
        }
    }
    if (name == "Grabber") {
        RawGrabber = value
        if (RawGrabber == -9999) {
        	
        } else {
            // -90 to 90 is possible on the mast, but it hits the cable!
            MappedGrabber = pins.map(
            RawGrabber,
            0,
            1000,
            -30,
            30
            )
            MappedGrabber = Math.constrain(MappedGrabber, -30, 30)
            Rover.setServo(Rover.getServoNumber(eServos.Mast), MappedGrabber)
        }
    }
    if (name == "Spin") {
        rawSpin = value
        if (rawSpin == -9999) {
        	
        } else {
            mappedSpin = pins.map(
            rawSpin,
            -1000,
            1000,
            -100,
            100
            )
            mappedSpin = Math.constrain(mappedSpin, -100, 100)
            if (mappedSpin > 0) {
                Rover.spin(eDirection.Right, mappedSpin)
            } else {
                Rover.spin(eDirection.Left, -1 * mappedSpin)
            }
        }
    }
})
let mappedSpin = 0
let rawSpin = 0
let MappedGrabber = 0
let RawGrabber = 0
let MappedDrive = 0
let RawDrive = 0
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
Rover.ledRainbow()
basic.forever(function () {
	
})
