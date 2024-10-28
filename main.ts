/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program compares two random numbers
*/

let numberone = randint(0, 99)
let numbertwo = randint(0, 99)

basic.showIcon(IconNames.Happy)

// Shows random number one
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("#1: " + numberone)
    basic.showIcon(IconNames.Happy)
})

// Shows random number two
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("#2: " + numbertwo)
    basic.showIcon(IconNames.Happy)
})

// Checks which number is greater when shaken
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (numberone > numbertwo) {
        basic.showString("" + numberone + " > " + numbertwo)
    } else if (numberone < numbertwo) {
        basic.showString("" + numberone + " < " + numbertwo)
    } else {
        basic.showString("" + numberone + " = " + numbertwo)
    }
    basic.showIcon(IconNames.Sad)
})
