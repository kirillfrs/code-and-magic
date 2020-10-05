'use strict';
(function () {
   // Useful values

   // var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
   // var WIZARD_SURNAMES = ['да Марья', 'Верон', ' Мирабелла', ' Вальц', ' Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];






   // var userDialog = document.querySelector('.setup');
   // userDialog.classList.remove('hidden');

   // var similarListElement = userDialog.querySelector('.setup-similar-list');

   // var similarWizardTemplate = document.querySelector('#similar-wizard-template')
   //    .content
   //    .querySelector('.setup-similar-item');






   // var renderWizard = function (wizard) {
   //    var wizardElement = similarWizardTemplate.cloneNode(true);
   //    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
   //    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
   //    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
   //    return wizardElement;
   // };

   // var onSucces = function (wizards) {
   //    var fragment = document.createDocumentFragment();
   //    for (var i = 0; i < 4; i++) {
   //       fragment.appendChild(renderWizard(wizards[i]));
   //    }
   //    console.log(fragment);
   //    similarListElement.appendChild(fragment);
   //    window.setup.setupSimilar.classList.remove('hidden');

   // };


   // Export values
   var lastTimeout;

   window.debounce = function () {
      if (lastTimeout) {
         window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
         updateWizards();
      }, 300);
   }

   var form = window.setup.userDialog.querySelector('.setup-wizard-form');

   form.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(form),
         function (response) {
            window.setup.userDialog.classList.add('hidden');
         });
      evt.preventDefault();
   });



   var wizards = [];

   var coatColor;
   var eyesColor;
   var fire;



   var getRank = function (wizard) {
      var rank = 0;

      if (wizard.colorCoat === coatColor) {
         rank += 2;
      }

      if (wizard.colorEyes === eyesColor) {
         rank += 1;
      }
      if (wizard.colorFireball === fire) {
         rank += 0.5;
      }
      return rank;
   };

   var namesComparator = function (leftName, rightName) {
      if (leftName > rightName) {
         return 1;
      } else if (leftName < rightName) {
         return -1;
      } else {
         return 0;
      }
   };


   window.updateWizards = function () {
      window.render(wizards.sort(function (left, right) {
         var rankDiff = getRank(right) - getRank(left);
         if (rankDiff === 0) {
            rankDiff = namesComparator(left.name, right.name);
         }
         return getRank(right) - getRank(left);
      }));
   };

   window.wizard.onCoatChange = function (color) {
      coatColor = color;
      window.debounce();
   };
   window.wizard.onEyesChange = function (color) {
      eyesColor = color;
      window.debounce();
   };

   window.wizard.onFireballChange = function (color) {
      fire = color;
      window.debounce();
   };

   var onError = function () {
      var node = document.createElement('div');
      node.style = 'z-index: 999; margin:0 auto ;background-color:red; text-align:center';
      node.style.fontSize = '35px';
      node.textContent = "Ошибка соединения";
      document.body.insertAdjacentElement('afterbegin', node);
   };

   var onSucces = function (data) {
      wizards = data;
      updateWizards();
   };


   window.backend.download(onSucces, onError);



})();

