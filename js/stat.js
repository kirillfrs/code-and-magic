var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var mainGamerColor = 'rgba(255, 0, 0, 1)';



var getFireballSpeed = function (left) {
    return left ? 5 : 2
};

var getWizardHeight = function () {
    return 1.337 * wizardWidth;
};

var getWizardX = function (width) {
    return (width - wizardWidth) / 2;
};



var getWizardY = function (height) {
    return height / 3 + getWizardHeight() / 2;
};

var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
        maxElement = arr[i];
    }
    return maxElement;

};

var histogramOtherColor = function () {
    var alpha = Math.random() * (1 - 0.2) + 0.2;
    return 'rgba(0, 83, 138, ' + alpha + ')';
};

window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.textBaseline = 'hanging';
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 3, CLOUD_Y + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_WIDTH / 3, CLOUD_Y + FONT_GAP * 2);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {

        ctx.fillText(players[i], CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y +
            250);
        if (players[i] === "Вы") {
            ctx.fillStyle = mainGamerColor;
        } else {
            ctx.fillStyle = histogramOtherColor();
        }

        ctx.fillRect((CLOUD_X + GAP) + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + 250 - GAP, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);

        ctx.fillStyle = '#000';
        ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, (BAR_HEIGHT * times[i]) / maxTime) + GAP;

    };


}; 