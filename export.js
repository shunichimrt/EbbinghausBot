/**
 * 受信メッセージを返答
 * @param message 返答内容
 */
function doPost(e) {
  /** 返信するためのトークン取得 */
  var json = JSON.parse(e.postData.contents);
  var reply_token = json.events[0].replyToken;
  if (typeof reply_token === "undefined") {
    return;
  }

  /** 最終行取得 */
  var lastRow = targetSht.getLastRow();
  var targetRow = lastRow + 1;

  /** 送られたメッセージ内容を取得 */
  var message = json.events[0].message.text;
  var date = Utilities.formatDate(
    new Date(),
    "Asia/Tokyo",
    "yyyy/MM/dd HH:mm:ss"
  );

  /** シートに記録 */
  targetSht.getRange("A" + targetRow + ":C" + targetRow).clear();
  targetSht
    .getRange("A" + targetRow + ":C" + targetRow)
    .setValues([[date, message, 0]]);
  targetSht
    .getRange("A" + targetRow + ":C" + targetRow)
    .setHorizontalAlignment("left");
  targetSht
    .getRange("A" + targetRow + ":C" + targetRow)
    .setVerticalAlignment("middle");
}
