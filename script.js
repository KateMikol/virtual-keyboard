const arren = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '\\', 'DEL',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'ENTER',
  'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→',
];
const arrru = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
  'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→',
];

const letters = [
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd',
  'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D',
  'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
  'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ф',
  'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С',
  'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'й', 'ц', 'у', 'к', 'е', 'н', 'г',
  'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л',
  'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю',
];

let keyboardLang = 'arrEN';

const exceptionItems = ['Tab', 'Backspace', 'DEL', 'Caps Lock', 'ENTER', 'Shift',
  'Ctrl', 'Win', 'Alt'];

const header = document.createElement('header');
header.className = '';

const main = document.createElement('main');
main.className = '';

const textArea = document.createElement('textarea');
textArea.className = 'text__area';
const keyboard = document.createElement('section');
keyboard.className = 'keyboard en';
const title = document.createElement('h1');
const titleText = document.createTextNode('Virtual Keyboard');

header.appendChild(title);
title.appendChild(titleText);
document.body.appendChild(header);
document.body.appendChild(main);
main.appendChild(textArea);
main.appendChild(keyboard);

const queueFromClickedItems = [];

function generateKeyboardButtons(arr) {
  for (let i = 0; i < arr.length; i++) {
    const keyboardItem = document.createElement('div');
    if (arr[i] === ' ') {
      keyboardItem.className = 'keyboard__item keyboard__item_space';
    } else if (arr[i] === 'Caps Lock') {
      keyboardItem.className = 'keyboard__item keyboard__item_CapsLock';
    } else if (arr[i] === 'ENTER') {
      keyboardItem.className = 'keyboard__item keyboard__item_enter';
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

generateKeyboardButtons(arren);

function getValueOfClickedItem(e) {
  const targetKeyboardItem = e.target.closest('.keyboard__item');
  if (targetKeyboardItem) {
    const valueOfClickedItem = targetKeyboardItem.querySelector('p').innerHTML;
    return valueOfClickedItem;
  }
  return undefined;
}

function getItemValue(item) {
  const keyboardItem = item.querySelector('p').innerHTML;
  return keyboardItem;
}

function switchToUpperCase() {
  // const clickedKeyboardItem = getClickedItem(e);
  const arrOfKeyBoardItems = document.querySelectorAll('.keyboard__item');
  if (document.querySelector('.keyboard__item_CapsLock').classList.contains('clicked')) {
    for (let i = 0; i < arrOfKeyBoardItems.length; i++) {
      const itemValue = getItemValue(arrOfKeyBoardItems[i]);
      if (letters.includes(itemValue)) {
        arrOfKeyBoardItems[i].querySelector('p').innerHTML = itemValue.toUpperCase();
      }
    }
  }
}

function switchTolowerCase() {
  const arrOfKeyBoardItems = document.querySelectorAll('.keyboard__item');
  if (!document.querySelector('.keyboard__item_CapsLock').classList.contains('clicked')) {
    for (let i = 0; i < arrOfKeyBoardItems.length; i++) {
      const itemValue = getItemValue(arrOfKeyBoardItems[i]);
      if (letters.includes(itemValue)) {
        arrOfKeyBoardItems[i].querySelector('p').innerHTML = itemValue.toLowerCase();
      }
    }
  }
}

function changeLang() {
  const arrOfKeyBoardItems = document.querySelectorAll('.keyboard__item');
  const keyboardElem = document.querySelector('.keyboard');
  if (keyboardElem.classList.contains('en')) {
    keyboardElem.classList.remove('en');
    keyboardElem.classList.add('ru');
    for (let i = 0; i < arrOfKeyBoardItems.length; i++) {
      arrOfKeyBoardItems[i].querySelector('p').innerHTML = arrru[i];
    }
  } else {
    keyboardElem.classList.remove('ru');
    keyboardElem.classList.add('en');
    for (let i = 0; i < arrOfKeyBoardItems.length; i++) {
      arrOfKeyBoardItems[i].querySelector('p').innerHTML = arren[i];
    }
  }
}

function delPreviousClickedItem() {
  const arrOfClickedItems = document.querySelectorAll('.clicked');
  for (let i = 0; i < arrOfClickedItems.length; i++) {
    const valueOfItemWithClickedClass = arrOfClickedItems[i].querySelector('p').innerHTML;
    if (valueOfItemWithClickedClass !== 'Caps Lock') {
      arrOfClickedItems[i].classList.remove('clicked');
    }
  }
}

function addClassOfClickedItem(e) {
  const clickedKeyboardItem = e.target.closest('.keyboard__item');
  const clickedItemValue = getValueOfClickedItem(e);
  if (clickedKeyboardItem && (clickedItemValue !== 'Caps Lock') && (clickedItemValue !== 'Alt') && clickedItemValue !== 'Shift') {
    clickedKeyboardItem.classList.add('clicked');
    setTimeout(delPreviousClickedItem, 250);
  }
  if (clickedItemValue === 'Caps Lock') {
    clickedKeyboardItem.classList.toggle('clicked');
  }
  if (clickedItemValue === 'Alt') {
    clickedKeyboardItem.classList.add('clicked');
  }
  if (clickedItemValue === 'Shift') {
    clickedKeyboardItem.classList.add('clicked');
  }
}

function getCursor() {
  return textArea.selectionStart;
}

function onKeyboardClickHandler(e) {
  const clickedItemValue = getValueOfClickedItem(e);
  
  queueFromClickedItems.push(clickedItemValue);

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
  if (clickedItemValue === 'ENTER') {
    const newLine = '\n';
    textFromTextArea = textFromTextArea.slice(0, cursorPosition) + newLine
    + textFromTextArea.slice(cursorPosition - 1 + newLine.length);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }
  if (clickedItemValue === 'Backspace') {
    textFromTextArea = textFromTextArea.slice(0, cursorPosition - 1)
    + textFromTextArea.slice(cursorPosition);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
  }
  if (clickedItemValue === 'DEL') {
    textFromTextArea = textFromTextArea.slice(0, cursorPosition)
    + textFromTextArea.slice(cursorPosition + 1);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition, cursorPosition);
  }
  if (clickedItemValue === 'Tab') {
    const tabValue = '    ';
    textFromTextArea = textFromTextArea.slice(0, cursorPosition) + tabValue
    + textFromTextArea.slice(cursorPosition);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition + tabValue.length, cursorPosition + tabValue.length);
  }

  addClassOfClickedItem(e);
  switchToUpperCase();
  switchTolowerCase();

  if (queueFromClickedItems.length > 2) {
    queueFromClickedItems.shift();
  }
  if (queueFromClickedItems[0] === 'Alt' && queueFromClickedItems[1] === 'Shift') {
    changeLang();
  }
}

keyboard.addEventListener('click', onKeyboardClickHandler);

//  document.addEventListener('keydown', (e) => {
//    console.log(e.repeat);
//    console.log(e.code);
// });
