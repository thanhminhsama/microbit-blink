// tests go here; this will not be compiled when this package is used as an extension.
basic.forever(function () {
    if (!input.buttonIsPressed(Button.AB)) {
        animations.WritePin(DigitalPin.P1,1)
    }
    else animations.WritePin(DigitalPin.P1,0)  
})
    


    