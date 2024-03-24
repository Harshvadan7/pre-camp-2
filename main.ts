// As you can see, the showArrow function works based on the value provided to it.
// 
// 1 -> arrow points North
// 
// 2 -> arrow points East
// 
// 3 -> arrow points South
// 
// 4 -> arrow points West
// 
// Hence, you just need to modify the value of the 'direction' variable. Use the 'set direction to - ' block inside an if-else block to change its value based on the button pressed.
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
function showArrow (num: number) {
    if (num == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (num == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (num == 3) {
        basic.showArrow(ArrowNames.South)
    } else if (num == 4) {
        basic.showArrow(ArrowNames.West)
    }
}
basic.forever(function () {
	
})
