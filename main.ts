input.onButtonPressed(Button.A, function () {
    Rover.move(eVector.Forward, 60)
    basic.pause(5000)
    Rover.stop(eStopMode.Coast)
})
input.onButtonPressed(Button.B, function () {
    Rover.spin(eDirection.Left, 60)
    basic.pause(5000)
    Rover.stop(eStopMode.Coast)
})
radio.onReceivedValue(function (name, value) {
	
})
radio.setGroup(1)
Rover.zeroServos(eServoGroup.Wheel)
basic.forever(function () {
	
})
