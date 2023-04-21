// let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_EN = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

let header = document.createElement('header');
header.className = '';

let main = document.createElement('main');
main.className = '';

let textArea = document.createElement('textarea');
textArea.className = '';
let keyboard = document.createElement('section');
keyboard.className = 'keyboard';
let title = document.createElement('h1');
let titleText = document.createTextNode('Virtual Keyboard');
title.appendChild(titleText);
header.appendChild(title);

document.body.appendChild(header);
document.body.appendChild(main);
main.appendChild(textArea);
main.appendChild(keyboard);


