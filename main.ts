 /* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program compares two random numbers
*/
//Created variables
let numberone = randint (0, 99)
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

input.onGesture(Gesture.Shake, function() {

    //checks if number one is greater than number two
    if (numberone>numbertwo) {
        basic.clearScreen()

        //shows that number one is greater than number two
        basic.showString(numberone + ">" + numbertwo)
        basic.showIcon(IconNames.Sad)
    } else{
        basic.clearScreen()
        
        //shows that number two is greater than number one
        basic.showString(numberone + "<" + numbertwo)
        basic.showIcon(IconNames.Sad)
}})
