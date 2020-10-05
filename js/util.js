"use strict";




(function () {

    var onPopupEscPress = function (evt) {
        if (evt.keyCode === ESC_KEYCODE && evt.target !== userNamesetup) {
            closePopup();
        }
    };

    var openPopup = function () {
        userDialog.classList.remove('hidden');
        document.addEventListener('keydown', onPopupEscPress);

    };
    var closePopup = function () {
        userDialog.classList.add('hidden');
        document.removeEventListener('keydown', onPopupEscPress);
    };


    var randomValue = function (array) {
        return Math.floor(Math.random() * array.length);
    }

})();


