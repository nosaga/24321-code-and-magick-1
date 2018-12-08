'use strict';
var ESC_BTN = 27;
var ENT_BTN = 13;
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userDialog = document.querySelector('.setup');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFirball = document.querySelector('.setup-fireball-wrap');
var formCoat = document.querySelector('.setup-wizard-appearance').children[1];
var formEyes = document.querySelector('.setup-wizard-appearance').children[2];
var formFireball = document.querySelector('.setup-fireball-wrap').children[1];

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandom = function (items) {
  var item = Math.floor(Math.random() * items.length);
  return items[item];
};

var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push(
        {
          name: getRandom(names) + ' ' + getRandom(surnames),
          coatColor: getRandom(colors),
          eyesColor: getRandom(eyesColor)
        }
    );
  }
  return wizards;
}

var wizards = generateWizards();

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardsTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardsTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var setWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return similarListElement.appendChild(fragment);
}

var setDialog = function () {
  return userDialog.querySelector('.setup-similar').classList.remove('hidden');
}

var onPopUpEscPres = function (evt) {
  if (evt.keyCode === ESC_BTN) {
    hideDialog();
  }
};

var showDialog = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopUpEscPres);
};

var hideDialog = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopUpEscPres);
};

setupOpen.addEventListener('click', showDialog);
setupClose.addEventListener('click', hideDialog);


setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENT_BTN) {
    showDialog();
  }
});

var fillColor = function (elem, color, elemInput) {
  elem.style.fill = getRandom(color);
  elemInput.value = elem.style.fill;
};

var backgroundColor = function (elem, color, elemInput) {
  elem.style.background = getRandom(color);
  elemInput.value = elem.style.background;
};

wizardCoat.addEventListener('click', function () {
  fillColor(wizardCoat, colors, formCoat);
});

wizardEyes.addEventListener('click', function () {
  fillColor(wizardEyes, eyesColor, formEyes);
});

wizardFirball.addEventListener('click', function () {
  backgroundColor(wizardFirball, fireballColor, formFireball);
});

setDialog();
setWizards();
