function Nastavení_vozítka () {
    wuKong.mecanumWheel(
    wuKong.ServoList.S6,
    wuKong.ServoList.S1,
    wuKong.ServoList.S7,
    wuKong.ServoList.S3
    )
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        wuKong.mecanumStop()
    } else if (receivedNumber == 1) {
        wuKong.mecanumRun(wuKong.RunList.left, 50)
    } else if (receivedNumber == 2) {
        wuKong.mecanumRun(wuKong.RunList.right, 50)
    } else if (receivedNumber == 3) {
        wuKong.mecanumRun(wuKong.RunList.rear, 50)
    } else if (receivedNumber == 4) {
        wuKong.mecanumRun(wuKong.RunList.Front, 50)
    } else if (receivedNumber == 5) {
        wuKong.mecanumRun(wuKong.RunList.RightFront, 50)
    } else if (receivedNumber == 6) {
        wuKong.mecanumRun(wuKong.RunList.LeftFront, 50)
    } else if (receivedNumber == 7) {
        wuKong.mecanumRun(wuKong.RunList.RightRear, 50)
    } else if (receivedNumber == 8) {
        wuKong.mecanumRun(wuKong.RunList.LeftRear, 50)
    } else if (receivedNumber == 9) {
        if (RL == 0) {
            RL += 1
            REARS.showColor(neopixel.colors(NeoPixelColors.Red))
        } else {
            RL += -1
            REARS.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    } else if (receivedNumber == 10) {
        if (FL == 0) {
            FL += 1
            FRONTS.showColor(neopixel.colors(NeoPixelColors.White))
        } else {
            FL += -1
            FRONTS.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
// POČÁTEČNÍ NASTAVENÍ
let RL = 0
let FL = 0
let FRONTS: neopixel.Strip = null
let REARS: neopixel.Strip = null
radio.setGroup(10)
basic.showIcon(IconNames.Angry)
REARS = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
FRONTS = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let vzdálenost = 10
FL = 0
RL = 0
basic.forever(function () {
    if (grove.measureInCentimetersV2(DigitalPin.P1) <= 10) {
        REARS.showColor(neopixel.colors(NeoPixelColors.Red))
        wuKong.mecanumRun(wuKong.RunList.stop, 0)
    } else {
        REARS.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
