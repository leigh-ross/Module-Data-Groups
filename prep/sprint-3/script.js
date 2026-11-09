/* 
Given textarea and char lim of 200
when a user types chars into textarea
then the interface should update w how many chars remaining

steps
define the char limit of 200
access textarea in dom
when an event occurs we compare char limit with the input number of chars
calculate chars left
show the actual chars left under the textArea block
*/

const charLimit = 200;
const textArea = document.querySelector('#comment-input');

// keyup event = when a key is released
// react to this event --> calculate rem chars and change
// run some code when the keyup event takes place
// eventlisteners ---^

function updateCharLimit(){
  // restrict this vv to actual chars in the comment block (backspace rmv char, shift does nothing,function keys dont affect this, numlock, )
  // done with textArea.value.length
  const remainingChars = charLimit - textArea.value.length
  // update chars on page
  const charLimitInfo = document.querySelector("#character-limit-info")
  charLimitInfo.innerText = `You have ${remainingChars} characters remaining`
}

textArea.addEventListener("keyup", updateCharLimit);
// only pass name ==> browser takes responsibility of invoking the function (if its like updateCharLimit() it will break)




