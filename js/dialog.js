"use strict";

(function () {

    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;

    var onPopupEscPress = function (evt) {
        if (evt.keyCode === ESC_KEYCODE && evt.target !== window.setup.userNamesetup) {
            closePopup();
        }
    };


    var openPopup = function () {
        window.setup.userDialog.classList.remove('hidden');
        window.setup.userDialog.style.left = '50%';
        window.setup.userDialog.style.top = '80px';
        document.addEventListener('keydown', onPopupEscPress);

    };
    var closePopup = function () {
        window.setup.userDialog.classList.add('hidden');
        document.removeEventListener('keydown', onPopupEscPress);
    };

    window.setup.setupOpen.addEventListener('click', function () {
        openPopup();
    });

    window.setup.setupOpen.addEventListener('keydown', function (evt) {
        if (evt.keyCode === ENTER_KEYCODE) {
            openPopup();
        }

    });

    window.setup.setupClose.addEventListener('click', function () {
        closePopup();
    });

    window.setup.setupClose.addEventListener('keydown', function (evt) {
        if (evt.keyCode === ENTER_KEYCODE) {
            closePopup();

        }
    })


    // окно перемещение

    var dialogeUserPic = document.querySelector('.upload');

    dialogeUserPic.addEventListener('mousedown', function (evt) {
        evt.preventDefault();
        var Rect = function (left, top, right, bottom) {
            this.left = left;
            this.top = top;
            this.right = right;
            this.bottom = bottom;
        }
        var Coordinate = function (x, y, constraints) {
            this.x = x;
            this.y = y;
            this._constraints = constraints;

        }

        Coordinate.prototype.setX = function (x) {
            if (x >= this._constraints.left &&
                x <= this.constraints.right) {
                this.x = x
            }
        };
        Coordinate.prototype.setX = function (y) {
            if (y >= this.constraints.top &&
                y <= this.constraints.bottom) {
                this.y = y
            }
        };

        var startCoordinate = {
            x: evt.clientX,
            y: evt.clientY
        };
        var dragged = false;

        var onMouseMove = function (moveEvt) {
            evt.preventDefault();
            dragged = true;
            var shift = {
                x: startCoordinate.x - moveEvt.clientX,
                y: startCoordinate.y - moveEvt.clientY
            }


            startCoordinate = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            }

            window.setup.userDialog.style.left = (window.setup.userDialog.offsetLeft - shift.x) + "px";
            window.setup.userDialog.style.top = (window.setup.userDialog.offsetTop - shift.y) + "px";
        }

        var onMouseUp = function (endEvt) {
            endEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            if (dragged) {
                var onClickPreventDefault = function (evt) {
                    evt.preventDefault();
                    dialogeUserPic.removeEventListener('click', onClickPreventDefault);
                };
                dialogeUserPic.addEventListener('click', onClickPreventDefault);
            }

        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

    })

})();
