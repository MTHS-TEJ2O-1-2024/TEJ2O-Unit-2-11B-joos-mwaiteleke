/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program compares two random numbers
*/

let numberone = randint (0, 99)
let numbertwo = randint(0, 99)

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString('#1:')
    basic.showNumber(numberone)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('#2:')
    basic.showNumber(numbertwo)
})

input.onGesture(Gesture.Shake, function() {
    
    if (numberone>numbertwo) {
        basic.clearScreen()
        basic.showNumber(numberone)
        basic.showString('>')
        basic.showNumber(numbertwo)
        basic.showIcon(IconNames.Sad)
    } else{
        basic.clearScreen()
        basic.showNumber(numberone)
        basic.showString('<')
        basic.showNumber(numbertwo)
        basic.showIcon(IconNames.Sad)
}})
