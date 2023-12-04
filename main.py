control.onEvent(grove.measureInCentimetersV2(DigitalPin.P0), vzdálenost, function () {
    wuKong.mecanumStop()
})
// POČÁTEČNÍ NASTAVENÍ
let vzdálenost = 0
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
vzdálenost = 10
basic.forever(function () {
	
})
