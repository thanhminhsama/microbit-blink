
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
enum MyEnum2 {
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
//% weight=100 color=#0fbc10 icon=""
namespace animations {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="blink x $x y $y every $interval ms"
    export function blink(x: MyEnum1, y: MyEnum1, interval: number): void {
        // Add code here
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
}
