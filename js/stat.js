'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BOTTOM_GAP = 40;
var FONT_GAP = BOTTOM_GAP / 2;
var CLOUD_X = 130;
var CLOUD_Y = CLOUD_HEIGHT - BOTTOM_GAP; // 240;
var BAR_WIDTH = 40;
var BAR_GAP = BAR_WIDTH + BAR_WIDTH / 2;
var BAR_HEIGHT = -150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');


  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = '#FF0000';
    } else {
      ctx.fillStyle = 'hsl(240,' + Math.floor(Math.random() * 100) + '%,' + Math.floor(Math.random() * 100) + '%' + ')';
    }
    ctx.fillText(players[i], CLOUD_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillRect(CLOUD_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y, BAR_WIDTH, (BAR_HEIGHT * times[i] / maxTime));
  }
};
