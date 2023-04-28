const arren = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '\\', 'DEL',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'ENTER',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→',
];
const arrru = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→',
];

const shiftru = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→',
];
const shiften = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\', 'DEL',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'ENTER',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
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
  'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё', 'Ё',
];
const keyCodes = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

function getCurrentLang() {
  let currentLang = 'en';
  if (localStorage.getItem('lang')) {
    currentLang = localStorage.getItem('lang');
  } else {
    localStorage.setItem('lang', currentLang);
  }
  return currentLang;
}
const exceptionItems = ['Tab', 'Backspace', 'DEL', 'Caps Lock', 'ENTER', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Enter', 'Delete'];

const header = document.createElement('header');
header.className = '';

const main = document.createElement('main');
main.className = '';

const textArea = document.createElement('textarea');
textArea.className = 'text__area';
const keyboard = document.createElement('section');
keyboard.className = `keyboard ${getCurrentLang()}`;
const title = document.createElement('h1');
const titleText = document.createTextNode('Virtual Keyboard');

const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = '<p> Created in Windows<p> <p>Change language left Alt+Shift <p>';

header.appendChild(title);
title.appendChild(titleText);
document.body.appendChild(header);
document.body.appendChild(main);
main.appendChild(textArea);
main.appendChild(keyboard);
document.body.appendChild(footer);

let queueFromClickedItems = [];
let queueFromPressedKeys = [];

function generateKeyboardButtons(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const keyboardItem = document.createElement('div');
    if (arr[i] === ' ') {
      keyboardItem.className = 'keyboard__item keyboard__item_space';
    } else if (arr[i] === 'Caps Lock') {
      keyboardItem.className = 'keyboard__item keyboard__item_CapsLock';
    } else if (arr[i] === 'ENTER') {
      keyboardItem.className = 'keyboard__item keyboard__item_enter';
    } else if (arr[i] === 'Shift') {
      keyboardItem.className = 'keyboard__item keyboard__item_shift';
    } else if (arr[i] === 'Alt') {
      keyboardItem.className = 'keyboard__item keyboard__item_alt';
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

generateKeyboardButtons(getCurrentLang() === 'en' ? arren : arrru);

function getValueOfClickedItem(e) {
  const targetKeyboardItem = e.target.closest('.keyboard__item');
  if (targetKeyboardItem) {
    const valueOfClickedItem = targetKeyboardItem.querySelector('p').textContent;
    return valueOfClickedItem;
  }
  return undefined;
}

function getItemValue(item) {
  const keyboardItem = item.querySelector('p').textContent;
  return keyboardItem;
}

const arrOfKeyBoardItems = document.querySelectorAll('.keyboard__item');
const capsLockClassList = document.querySelector('.keyboard__item_CapsLock').classList;
const shiftClassList = document.querySelector('.keyboard__item_shift').classList;
function switchToUpperCase() {
  for (let i = 0; i < arrOfKeyBoardItems.length; i += 1) {
    const itemValue = getItemValue(arrOfKeyBoardItems[i]);
    if (letters.includes(itemValue)) {
      arrOfKeyBoardItems[i].querySelector('p').textContent = itemValue.toUpperCase();
    }
  }
}

function switchTolowerCase() {
  for (let i = 0; i < arrOfKeyBoardItems.length; i += 1) {
    const itemValue = getItemValue(arrOfKeyBoardItems[i]);
    if (letters.includes(itemValue)) {
      arrOfKeyBoardItems[i].querySelector('p').textContent = itemValue.toLowerCase();
    }
  }
}

function pressedShift() {
  for (let i = 0; i < arrOfKeyBoardItems.length; i += 1) {
    if (getCurrentLang() === 'en') {
      arrOfKeyBoardItems[i].querySelector('p').textContent = shiften[i];
    } else {
      arrOfKeyBoardItems[i].querySelector('p').textContent = shiftru[i];
    }
  }
}

function unactivateShift() {
  for (let i = 0; i < arrOfKeyBoardItems.length; i += 1) {
    if (getCurrentLang() === 'en') {
      arrOfKeyBoardItems[i].querySelector('p').textContent = arren[i];
    } else {
      arrOfKeyBoardItems[i].querySelector('p').textContent = arrru[i];
    }
  }
}

function changeLang() {
  const keyboardElem = document.querySelector('.keyboard');
  if (keyboardElem.classList.contains('en')) {
    keyboardElem.classList.remove('en');
    keyboardElem.classList.add('ru');
    localStorage.setItem('lang', 'ru');
    for (let i = 0; i < arrOfKeyBoardItems.length; i += 1) {
      arrOfKeyBoardItems[i].querySelector('p').textContent = arrru[i];
    }
  } else {
    keyboardElem.classList.remove('ru');
    keyboardElem.classList.add('en');
    localStorage.setItem('lang', 'en');
    for (let i = 0; i < arrOfKeyBoardItems.length; i += 1) {
      arrOfKeyBoardItems[i].querySelector('p').textContent = arren[i];
    }
  }
}

function delPreviousClickedItem() {
  const arrOfClickedItems = document.querySelectorAll('.clicked');
  for (let i = 0; i < arrOfClickedItems.length; i += 1) {
    const valueOfItemWithClickedClass = arrOfClickedItems[i].querySelector('p').textContent;
    if (valueOfItemWithClickedClass !== 'Caps Lock' && valueOfItemWithClickedClass !== 'Shift') {
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
  if (queueFromClickedItems.length > 2) {
    queueFromClickedItems.shift();
  }
  if ((queueFromClickedItems[0] === 'Alt' && queueFromClickedItems[1] === 'Shift')
  || (queueFromClickedItems[1] === 'Alt' && queueFromClickedItems[0] === 'Shift')) {
    addClassOfClickedItem(e);
    changeLang();
    unactivateShift();
    document.querySelector('.keyboard__item_alt').classList.remove('clicked');
    queueFromClickedItems = [];
    document.querySelector('.keyboard__item_shift').classList.remove('clicked');
    return;
  }

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
    const tabValue = '\t';
    textFromTextArea = textFromTextArea.slice(0, cursorPosition) + tabValue
    + textFromTextArea.slice(cursorPosition);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition + tabValue.length, cursorPosition + tabValue.length);
  }

  const clickedShift = document.querySelector('.keyboard__item_shift').classList.contains('clicked');
  const clickedCapsLock = document.querySelector('.keyboard__item_CapsLock').classList.contains('clicked');

  if (clickedItemValue === 'Shift') {
    shiftClassList.toggle('clicked');
    if (!clickedShift && !clickedCapsLock) {
      pressedShift();
    } else if (!clickedShift && clickedCapsLock) {
      pressedShift();
      switchTolowerCase();
    } else if (clickedShift && !clickedCapsLock) {
      unactivateShift();
    } else if (clickedShift && clickedCapsLock) {
      unactivateShift();
      switchToUpperCase();
    }
  } else if (clickedItemValue === 'Caps Lock') {
    capsLockClassList.toggle('clicked');
    if (!clickedCapsLock && !clickedShift) {
      switchToUpperCase();
    } else if (!clickedCapsLock && clickedShift) {
      switchTolowerCase();
    } else if (clickedCapsLock && !clickedShift) {
      switchTolowerCase();
    } else if (clickedCapsLock && clickedShift) {
      switchToUpperCase();
    }
  } else {
    addClassOfClickedItem(e);
  }
}

keyboard.addEventListener('click', onKeyboardClickHandler);

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  queueFromPressedKeys.push(e.code);
  if (queueFromPressedKeys.length > 2) {
    queueFromPressedKeys.shift();
  }
  if ((queueFromPressedKeys[0] === 'AltLeft' && queueFromPressedKeys[1] === 'ShiftLeft')
  || (queueFromPressedKeys[1] === 'AltLeft' && queueFromPressedKeys[0] === 'ShiftLeft')) {
    changeLang();
    queueFromPressedKeys = [];
  }

  const arrayOfKeyBoardItems = document.querySelectorAll('.keyboard__item');
  const k = keyCodes.indexOf(e.code);
  const pressedItem = arrayOfKeyBoardItems[k].querySelector('p').textContent;

  if (pressedItem !== 'Caps Lock' && pressedItem !== 'Shift') {
    arrayOfKeyBoardItems[k].classList.add('clicked');
    setTimeout(delPreviousClickedItem, 250);
  }

  const cursorPosition = getCursor();
  let textFromTextArea = textArea.value;

  if (!exceptionItems.includes(pressedItem)) {
    textFromTextArea = textFromTextArea.slice(0, cursorPosition) + pressedItem
    + textFromTextArea.slice(cursorPosition - 1 + pressedItem.length);
    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }
  if (pressedItem === 'ENTER') {
    const newLine = '\n';
    textFromTextArea = textFromTextArea.slice(0, cursorPosition) + newLine
    + textFromTextArea.slice(cursorPosition - 1 + newLine.length);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }
  if (pressedItem === 'Backspace') {
    textFromTextArea = textFromTextArea.slice(0, cursorPosition - 1)
    + textFromTextArea.slice(cursorPosition);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
  }
  if (pressedItem === 'DEL') {
    textFromTextArea = textFromTextArea.slice(0, cursorPosition)
    + textFromTextArea.slice(cursorPosition + 1);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition, cursorPosition);
  }
  if (pressedItem === 'Tab') {
    const tabValue = '\t';
    textFromTextArea = textFromTextArea.slice(0, cursorPosition) + tabValue
    + textFromTextArea.slice(cursorPosition);

    textArea.value = textFromTextArea;
    textArea.setSelectionRange(cursorPosition + tabValue.length, cursorPosition + tabValue.length);
  }

  const clickedShift = document.querySelector('.keyboard__item_shift').classList.contains('clicked');
  const clickedCapsLock = document.querySelector('.keyboard__item_CapsLock').classList.contains('clicked');

  if (pressedItem === 'Shift') {
    shiftClassList.toggle('clicked');
    if (!clickedShift && !clickedCapsLock) {
      pressedShift();
    } else if (!clickedShift && clickedCapsLock) {
      pressedShift();
      switchTolowerCase();
    } else if (clickedShift && !clickedCapsLock) {
      unactivateShift();
    } else if (clickedShift && clickedCapsLock) {
      unactivateShift();
      switchToUpperCase();
    }
  } else if (pressedItem === 'Caps Lock') {
    capsLockClassList.toggle('clicked');
    if (!clickedCapsLock && !clickedShift) {
      switchToUpperCase();
    } else if (!clickedCapsLock && clickedShift) {
      switchTolowerCase();
    } else if (clickedCapsLock && !clickedShift) {
      switchTolowerCase();
    } else if (clickedCapsLock && clickedShift) {
      switchToUpperCase();
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft') {
    const clickedCapsLock = document.querySelector('.keyboard__item_CapsLock').classList.contains('clicked');

    document.querySelector('.keyboard__item_shift').classList.remove('clicked');
    unactivateShift();
    if (clickedCapsLock) {
      switchToUpperCase();
    } else {
      switchTolowerCase();
    }
  }
});
