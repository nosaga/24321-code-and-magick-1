'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

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

setDialog();
setWizards();
