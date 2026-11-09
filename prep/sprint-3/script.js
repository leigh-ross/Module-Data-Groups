/* 
Given textarea and char lim of 200
when a user types chars into textarea
then the interface should update w how many chars remaining

steps
define the char limit of 200
access textarea in dom
when an event occurs we compare char limit with the input number of chars
*/

const charLimit = 200;
const textArea = document.querySelector('#comment-input');

// keyup event = when a key is released
// react to this event --> calculate rem chars and change
// run some code when the keyup event takes place
// eventlisteners ---^

textArea.addEventListener("keyup", function(){
    console.log(textArea.value, 'textArea value');
    console.log(charLimit, 'characterLimit');
});

let remainingChars = charLimit // - currentChars;
// restrict this to actual chars in the comment block (backspace rmv char, shift does nothing,function keys dont affect this, numlock, )
