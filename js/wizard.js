'use strict';

(function () {
    // Получение случайного элемента из массива

    var wizard = {
        onEyesChange: function (color) {
            return color;
        },
        onCoatChange: function (color) {
            return color;

        },
        onFireballChange: function (color) {
            return color
        },
    };

    var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var WIZARD_EYESCOLOR = ['red',
        'orange',
        'yellow',
        'green',
        'lightblue',
        'blue',
        'purple'];
    // var WIZARDS = [];
    var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

    window.setup.wizardCoat.addEventListener('click', function () {
        var newColor = WIZARD_COATCOLOR[randomValue(WIZARD_COATCOLOR)];
        window.setup.wizardCoat.style.fill = newColor;
        wizard.onCoatChange(newColor);

    });


    window.setup.eyesColor.addEventListener('click', function () {
        var newColor = WIZARD_EYESCOLOR[randomValue(WIZARD_EYESCOLOR)]
        window.setup.eyesColor.style.fill = newColor;
        wizard.onEyesChange(newColor);


    });


    window.setup.setupFireball.addEventListener('click', function () {
        var newColor = window.setup.setupFireball.style.backgroundColor = FIREBALL_COLOR[randomValue(FIREBALL_COLOR)];
        window.setup.setupFireball.children[1].value = newColor;
        wizard.onFireballChange(newColor);

    });
    window.wizard = wizard;

})();





