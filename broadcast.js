/**
 * 対象メッセージを取得
 * @param {
 *  A 登録日時
 *  B メッセージ内容
 * }
 */
function checkRef() {
  /** メッセージを取得 */
  for (var i = 2; i < 500; i++) {
    var date = targetSht.getRange(i, 1).getValue();
    var content = targetSht.getRange(i, 2).getValue();
    var flg = targetSht.getRange(i, 3).getValue();
    var dt = today - date;
    var day = Math.ceil(dt / 1000 / 60 / 60 / 24);
    if (
      (2 <= day && day < 3) ||
      (9 <= day && day < 10) ||
      (39 <= day && day < 40)
    ) {
      broadcast(content);
      targetSht.getRange(i, 3).setValue(flg++);
      checkDeleteFlg(i);
    }
  }
}

/**
 * ３回目の配信が終了しているものは削除
 * @param {
 *  B メッセージ内容
 *  C DELETE_FLG=3対象
 * }
 */
function checkDeleteFlg(i) {
  var flg = targetSht.getRange(i, 3).getValue();
  if (flg === 3) {
    targetSht.deleteRow(i);
  }
}

/**
 * メッセージを配信
 * @param message 配信メッセージ
 */
function broadcast(message) {
  /** メッセージ配信 */
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/broadcast", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    payload: JSON.stringify({
      messages: [
        {
          type: "text",
          text: message + "\n\n覚えてましたか？",
        },
      ],
    }),
  });
}
