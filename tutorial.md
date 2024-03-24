# Pre-Camp Exercise 2: Turning arrows

## Step 1 @unplugged

In this pre-camp exercise, you'll need to program your Microbit such that it makes it point in different directions according to the buttons pressed. You may click on the ``|Bulb|`` icon below for hints throughout this exercise.

## Step 2

Click on the ``||variables:Variables||`` category in the Toolbox. Place the ``||variables:set direction to 0||`` block in the ``||basic:on start||`` section. Change the value from '0' to '1'. This is the ``||variables:direction||`` variable. The value you set it to will determine which direction your arrow will point towards.

If its value = 1, the arrow will point towards North.

If its value = 2, the arrow will point towards East.

If its value = 3, the arrow will point towards South.

If its value = 4, the arrow will point towards West.

```blocks
let direction = 1
```

## Step 3

Click on the ``||functions:Functions||`` category in the Toolbox Advanced menu. Place the ``||functions:call showArrow 1||`` block in the ``||basic:forever|`` section. Now select the ``||variables:direction||`` variable in the ``||variables:Variables||`` category and place it in the showArrow function call replacing the already existing '1' over there.

This function called ``||functions:showArrow||`` takes in the value set in the ``||variables:direction||`` variable and displays the arrow in the appropriate direction.

```blocks
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
    showArrow(direction)
})
```

## Step 4

Select the ``||input:on button A pressed||`` from the ``||input:Input||`` section. Place a new ``||logic:if true then||`` block from the ``||logic:Logic||`` section and place it in the ``||input:on button A pressed||`` block. Now again from the ``||logic:Logic||`` section, bring in a ``||logic:comparision||`` block and place it in the if-else block in place of 'true'.

Now from the ``||variables:Variables||`` section, drag and drop the ``||variables:direction||`` variable on the left hand side (LHS) of the equality operator in the ``||logic:comparision||`` block. Change the value to '1' from '0' on the right hand side (RHS).

Next, simply drag and drop the ``||variables:set direction to 0||`` block inside this if block. Change the value from '0' to '4'.

Explanation: This block will work only when the value of ``||variables:direction||`` is '1'. And it will change its value to '4'. This means that when 'A' is pressed, and the arrow points 'North', we need to make it point towards 'West' which is done by changing the value of this variable.  

```blocks
input.onButtonPressed(Button.A, function () {
    if (direction == 1) {
        direction = 4   
    }
}
```

## Step 5

Click the '+' icon below the existing if block. This will create an additional else block. Click again to create an else-if block. Create the same logic for when ``||variables:direction||`` is equal to '2'. Drag and drop the ``||variables:set direction to 0||`` block inside this else-if block. Change the value from '0' to '1'. You may right click and duplicate the needed logic.

Explanation: This block will work only when the value of ``||variables:direction||`` is '2'. And it will change its value to '1'. This means that when 'A' is pressed, and the arrow points 'East', we need to make it point towards 'North' which is done by changing the value of this variable.

```blocks
input.onButtonPressed(Button.A, function () {
    if (direction == 1) {
        direction = 4
    } else if (direction == 2) {
        direction = 1
}
```

## Step 6

CLick the '+' icon once more to get an additional else-if block. Set the logic for when ``||variables:direction||`` is equal to '3'. In this case the value should change to '2'.

Explanation: When 'A' is pressed, and the arrow points 'South', we need to make it point towards 'East'.

```blocks
input.onButtonPressed(Button.A, function () {
    if (direction == 1) {
        direction = 4
    } else if (direction == 2) {
        direction = 1
    } else if (direction == 3) {
        direction = 2
    }
}
```    

## Step 7

In the else block make the value of ``||variables:direction||`` change to '3'.

Explanation: When 'A' is pressed, and the arrow points 'West', we need to make it point towards 'South'.

```blocks
input.onButtonPressed(Button.A, function () {
    if (direction == 1) {
        direction = 4
    } else if (direction == 2) {
        direction = 1
    } else if (direction == 3) {
        direction = 2
    } else {
        direction = 3
    }
})
```  

## Step 8

Similar logic is to be made when button 'B' is pressed. Select the ``||input:on button B pressed||`` from the ``||input:Input||`` section. You may duplicate the entire logic in the ``||input:on button A pressed||`` block and make the ``||variables:direction||`` variable change in clockwise direction when 'B' is pressed.


```blocks
input.onButtonPressed(Button.B, function () {
    if (direction == 1) {
        direction = 2
    } else if (direction == 2) {
        direction = 3
    } else if (direction == 3) {
        direction = 4
    } else if (direction == 4) {
        direction = 1
    }
})
```  

## Finished @unplugged

Congratulations! You've completed the exercise! You may now test it by using the simulator window on the left. You may also ``|Download|`` and flash it once you have your Microbit with you.
