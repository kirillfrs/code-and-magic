"use strict";
(function () {
    var FILES_TYPES = ['png', 'jpg', 'jpeg']
    var fileChooser = document.querySelector('.upload input[type=file]');
    var preview = document.querySelector('.setup-user-pic');
    var preview2 = document.querySelector('.setup-open-icon');

    var onChange = function () {
        var file = fileChooser.files[0];
        var fileName = file.name.toLowerCase();
        var matches = FILES_TYPES.some(function (it) {
            return fileName.endsWith(it);
        })
        if (matches) {
            var reader = new FileReader();
            console.log(reader);
            reader.addEventListener('load', function () {
                preview.src = reader.result;
                preview2.src = reader.result;
            });
            reader.readAsDataURL(file);
        }
    };


    fileChooser.addEventListener('change', onChange);

})();