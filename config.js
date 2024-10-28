//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/ReverseKing";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/QXbR0M0/IMG-2996.jpg";
global.devs = "233257514504";
global.sudo = process.env.SUDO || "233257514504";
global.owner = process.env.OWNER_NUMBER || "233257514504";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/p3Mb4qL.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUMyb3FIRUJrSllQdWhaQ21tVG54OWhYNi9kaGJUc281KzhaT2hUMFhGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNtUUpMd0NjOWdQMHpwVXByN2VJb3ZheVpjSjJFdlpvUlFTLzhUc1duTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQnlQUFR3cEZRellYUDd3cWFpdm9WV3crY0VWUmZuL3l2N3ZlNU1SdjFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QXNFQ1hqYzlkaytYRzFGUzM3ZmNPR3VtY255MHE0SnJETW13WHhOZGhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFRHVFUkdJdDRsMkRCcTBPMy84aHNHOFNwSXFXRU5RRHF0S3V3amxPRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVVK0U1N28yQXd3cjgyUk5lTGpOdDVneVBwVnBQeFY2dHg4Q05OR3Rkajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURaaURTUnNNcWZUc1lWTVJYeVZHRm9rUTBJU1dzQ3Joc1lDZllUWlRudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibktXbmlZek5rWFR3WGR2bThZZUZUMHZaczhOTzl4ZXpXbjJrZ1FRS1drST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxTd1JUaVBEbi9BWjhIL3lNbWVFdkRWOGlULzJPWGxhUHpINnFpNG1PVHVIZ1VjV2paNlAveWxkL0NWRnVPQVgyYzBxc2pSdXNPeGR3ZXBzNWUzUWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJIRmNDNWNJSU8wYkNuMENzeVZicVFTelNBQ09VcGUvcUZ1cjh2TFp6WjNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjcxMTU2MzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkFBNzcyNkREM0FBNjlFNkNEMTVBNDUxMEY3MkFDNUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDEyNzMzOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOE1yS3dVUHRTcVNBbkF0cXFUQjRJQSIsInBob25lSWQiOiJlMjU0YTVkYS0yNzM1LTQ0M2YtOGRmMC01MTQzODZmNTIyYTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGVjbFlFbWxnR2VlWTJwNlBtR3Zwa1A1NzVjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhtSm1LdHcvcnhPaXpqeVJYeXZleGJOcTZFdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBUlNUVzJRUCIsIm1lIjp7ImlkIjoiMjM0OTE2NzExNTYzNjo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNsb3VkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYWIrN1lDRU5uTC9yZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMUlRBVmJQNjFtTGQxV3FBVnpmM2ZNQnlVd09RdDBtR1VVeUFaWW9tWENNPSIsImFjY291bnRTaWduYXR1cmUiOiJvbWd0UDRiNDVhZ3NZME1sdWp2MStuRXJOdHl3YjdwYUx5SEQzZlExdkhvVDd5bHA5cnE1ZGVuVDVacnRZNE1DZEdkL25GT2x5T0NSamdPaWl1VURBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNDFuTWdpVFBNTk5pbXREekdKc2tGa1lDb052M2dzcDl5MDV1N1hCczhPQlZaUFUzb0Iybm9RSlZmY0M5K1puTlF1RjZrSWJKcCtHTnJHbkpDQlhaakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY3MTE1NjM2OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzBVd0ZXeit0WmkzZFZxZ0ZjMzkzekFjbE1Ea0xkSmhsRk1nR1dLSmx3aiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDEyNzMzNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMd2gifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSEKING",
  packname: process.env.PACK_NAME || "REVERSEKING",
  botname: process.env.BOT_NAME || "ReverseKing",
  ownername: process.env.OWNER_NAME || "REVERSEKING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R E V E R S E K I N G").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
