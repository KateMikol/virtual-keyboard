const arrEN = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER',
  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→',
];

const exceptionItems = ['Tab', 'Backspace', 'DEL', 'Caps Lock', 'ENTER', 'Shift',
  'Ctrl', 'Win', 'Alt'];

const header = document.createElement('header');
header.className = '';

const main = document.createElement('main');
main.className = '';

const textArea = document.createElement('textarea');
textArea.className = 'text__area';
const keyboard = document.createElement('section');
keyboard.className = 'keyboard';
const title = document.createElement('h1');
const titleText = document.createTextNode('Virtual Keyboard');
title.appendChild(titleText);
header.appendChild(title);

document.body.appendChild(header);
document.body.appendChild(main);
main.appendChild(textArea);
main.appendChild(keyboard);

function generateKeyboardButtons(arr) {
  for (let i = 0; i < arr.length; i++) {
    const keyboardItem = document.createElement('div');
    if (arr[i] === ' ') {
      keyboardItem.className = 'keyboard__item keyboard__item_space';
    } else {
      keyboardItem.className = 'keyboard__item';
    }
    const keyboardItemContent = document.createElement('p');
    const keyboardItemContentText = document.createTextNode(arr[i]);
    keyboard.appendChild(keyboardItem);
    keyboardItem.appendChild(keyboardItemContent);
    keyboardItemContent.append(keyboardItemContentText);
  }
}

generateKeyboardButtons(arrEN);

function getValueOfClickedItem(e) {
  const targetKeyboardItem = e.target.closest('.keyboard__item');
  if (targetKeyboardItem) {
    const valueOfClickedItem = targetKeyboardItem.querySelector('p').innerHTML;
    return valueOfClickedItem;
  }
  return undefined;
}

function getCursor() {
  return textArea.selectionStart;
}

function onKeyboardClickHandler(e) {
  const clickedItemValue = getValueOfClickedItem(e);
  if (!clickedItemValue) {
    return;
  }
  const cursorPosition = getCursor();
  let textFromTextArea = textArea.value;
  if (!exceptionItems.includes(clickedItemValue)) {
    textFromTextArea = textFromTextArea.slice(0, cursorPosition) + clickedItemValue
    + textFromTextArea.slice(cursorPosition - 1 + clickedItemValue.length);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }
}

keyboard.addEventListener('click', onKeyboardClickHandler);

// document.addEventListener('keydown', (e) => {
//   console.log(e.repeat);
//   console.log(e.code);
// });
