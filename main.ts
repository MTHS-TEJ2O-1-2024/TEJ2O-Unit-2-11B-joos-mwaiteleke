/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program compares two random numbers
*/

let numberone = randint (0, 99)
let numbertwo = randint(0, 99)

basic.showIcon(IconNames.Happy)

//Shows random number one
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString('#1:')
    basic.showNumber(numberone)
    basic.showIcon(IconNames.Happy)
})

//Shows random number two
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('#2:')
    basic.showNumber(numbertwo)
    basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function() {
    //checks if number one is greater than number two
    if (numberone>numbertwo) {
        basic.clearScreen()
        //shows that number one is greater than number two
        basic.showNumber(numberone)
        basic.showString('>')
        basic.showNumber(numbertwo)
        basic.showIcon(IconNames.Sad)
    } else{
        basic.clearScreen()
        //shows that number two is greater than number one
        basic.showNumber(numberone)
        basic.showString('<')
        basic.showNumber(numbertwo)
        basic.showIcon(IconNames.Sad)
}})
