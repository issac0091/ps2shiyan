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
    OLED.writeString("P0:")
    OLED.writeNum(pins.analogReadPin(AnalogPin.P0))
    OLED.writeString(" ")
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    if (p0 < 20) {
        if (p1 >= 950) {
            basic.showString("UL")
        } else if (p1 <= 20) {
            basic.showString("UR")
        } else {
            basic.showString("UP")
        }
    } else if (p0 >= 800) {
        if (p1 >= 950) {
            basic.showString("DL")
        } else if (p1 <= 20) {
            basic.showString("DR")
        } else {
            basic.showString("Down")
        }
    } else if (p1 <= 20) {
        basic.showString("Right")
    } else if (p1 >= 950) {
        basic.showString("Left")
    } else if (p3 < 111) {
        basic.showString("Pressed")
    } else {
        basic.showString("Home")
    }
})
basic.forever(function () {
    OLED.writeString("P1:")
    OLED.writeNum(pins.analogReadPin(AnalogReadWritePin.P1))
    OLED.writeString(" ")
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    OLED.writeString("P3:")
    OLED.writeNum(pins.analogReadPin(AnalogReadWritePin.P3))
    OLED.writeString(" ")
    basic.pause(1000)
    OLED.clear()
})
