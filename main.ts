OLED.init(128, 64)
let p1 = 0
let p0 = 0
let p3 = 0
basic.forever(function () {
    p3 = pins.analogReadPin(AnalogReadWritePin.P3)
    p0 = pins.analogReadPin(AnalogReadWritePin.P0)
    p1 = pins.analogReadPin(AnalogReadWritePin.P1)
})
basic.forever(function () {
    if (p0 <= 20) {
        basic.showString("UP!")
    } else if (p0 >= 900) {
        basic.showString("down!")
    } else if (p1 >= 1000) {
        basic.showString("Left")
    } else if (p1 <= 20) {
        basic.showString("Right")
    } else if (p3 <= 80) {
        basic.showString("Pressed!")
    } else {
        basic.showString("Home!")
    }
})
basic.forever(function () {
    OLED.writeString("P0:")
    OLED.writeNum(pins.analogReadPin(AnalogPin.P0))
    OLED.writeString(" ")
    basic.pause(1500)
    OLED.clear()
})
basic.forever(function () {
    OLED.writeString("P1:")
    OLED.writeNum(pins.analogReadPin(AnalogReadWritePin.P1))
    OLED.writeString(" ")
    basic.pause(1500)
    OLED.clear()
})
basic.forever(function () {
    OLED.writeString("P3:")
    OLED.writeNum(pins.analogReadPin(AnalogReadWritePin.P3))
    OLED.writeString(" ")
    basic.pause(1500)
    OLED.clear()
})
