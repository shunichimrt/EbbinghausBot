/** LINE Developers Info */
var access_token =
  PropertiesService.getScriptProperties().getProperty("ACCESS_TOKEN");
var line_endpoint = "https://api.line.me/v2/bot/message/reply";

/** スプレッドシート */
var SPREADSHEET_ID =
  PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
var SPREADSHEET_NAME =
  PropertiesService.getScriptProperties().getProperty("SPREADSHEET_NAME");
var targetSht =
  SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SPREADSHEET_NAME);
