/** LINE Developers Info */
var access_token = ACCESS_TOKEN;
var line_endpoint = "https://api.line.me/v2/bot/message/reply";

/** スプレッドシート */
var SPREADSHEET_ID = SPREADSHEET_ID;
var targetSht =
  SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SPREADSHEET_NAME);

/**
 * 対象メッセージを取得
 * @param {
 *. A 登録日時
 *  B メッセージ内容
 * }
 */
function checkRef() {
  /** メッセージを取得 */
  var message = targetSht.getRange("B7").getValue();
  broadcast(message);
}

/**
 * ３回目の配信が終了しているものは削除
 * @param {
 *  B メッセージ内容
 *  C DELETE_FLG=3対象
 * }
 */
function checkDeleteFlg() {
  /** メッセージを取得 */
  var message = targetSht.getRange("B7").getValue();
  broadcast(message);
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
