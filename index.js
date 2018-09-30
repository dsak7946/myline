var linebot = require('linebot');
 
var bot = linebot({
  channelId: 1611184250,
  channelSecret: fc0dde92ef9e9b182bc526a240c18346,
  channelAccessToken: fo/507dPjAsjw/gAjXcas2aKo94L9l5QOLrDqTkQ6fcsy5lDv4uRGAGHd0ck8DAumYuGVRYO9pNMJXWrcohw/2KnyeD0XJ1y2fW7fdgfpzmd5ChC5KuAV9REP9kFNlFubCii5jKuSVY81oDn3KTvRwdB04t89/1O/w1cDnyilFU=
});
 
bot.on('message', function (event) {
	
  event.reply(event.message.text).then(function (data) {
    // success
  }).catch(function (error) {
    // error
  });
});
 
bot.listen('/linewebhook', 3000);