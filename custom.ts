/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum1 {
    //% block="1"
    Zero,
    //% block="2"
    One,
    //% block="3"
    Two,
    //% block="4"
    Three,
    //% block="5"
    Four,
}

/**
 * Custom blocks
 */
//% weight=100 color=#ff6a00 icon="\uf1f9"
namespace animations {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="blink x $x y $y every $interval ms"
    //% interval.shadow=timePicker
    export function blink(x: MyEnum1, y: MyEnum1, interval: number): void {
        // Add code here
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
    /**
      * Set a pin or connector value to either 0 or 1.
      * @param name pin to write to, eg: DigitalPin.P0
      * @param value value to set on the pin, 1 eg,0
      */
    //% help=pins/digital-write-pin weight=29
    //% blockId=device_set_digital_pin block="digital write|pin %name|to %value"
    //% value.min=0 value.max=1
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    //% name.fieldOptions.tooltips="false" name.fieldOptions.width="250"
    export function WritePin(name: DigitalPin, value: number): void {
        pins.digitalWritePin(name, value)
    }
    
}
