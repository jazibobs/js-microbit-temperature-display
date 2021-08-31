input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showString("T")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(temperature)
    basic.pause(500)
    basic.showString("T")
})
let temperature = 0
basic.showString("T")
temperature = input.temperature()
basic.pause(100)
