radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == number) {
        basic.showIcon(IconNames.Happy)
        radio.sendString("good")
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
        radio.sendString("bad")
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(number)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "good") {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number = 0
basic.showIcon(IconNames.Tortoise)
number = 0
radio.setGroup(464)
