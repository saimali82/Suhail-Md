const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923028879459";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_14_00_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDczLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDksXG4gICAgICAgIDczLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0elQ1cXVhSnFaOXg1WGN5bTFaR1lXdUlzMkhzYU9UR1hsYlcxNVpncTNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAyODg3OTQ1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzk0RDc3NTIwODU0MzMyMzRDRjY2QjFEOTQyRTU0NERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjM3NjUxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFRci12c2tfU0tlUl8wdGpHMkJVS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzY3Y2I3YWMtY2RlOC00NGIzLThhMWMtNDBkY2IxNWY4YzMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDcsXG4gICAgICAxOTYsXG4gICAgICA4OSxcbiAgICAgIDY1LFxuICAgICAgMTAyLFxuICAgICAgNixcbiAgICAgIDE5MixcbiAgICAgIDEyOSxcbiAgICAgIDcwLFxuICAgICAgMTMyLFxuICAgICAgMTgsXG4gICAgICAyMDUsXG4gICAgICAxNDEsXG4gICAgICA4OSxcbiAgICAgIDExNSxcbiAgICAgIDIzMCxcbiAgICAgIDIzNSxcbiAgICAgIDkwLFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDExNyxcbiAgICAgIDQyLFxuICAgICAgMTkwLFxuICAgICAgMTM2LFxuICAgICAgMTc2LFxuICAgICAgMTY2LFxuICAgICAgNzAsXG4gICAgICAxODYsXG4gICAgICAyMDcsXG4gICAgICAyNDYsXG4gICAgICAxNjksXG4gICAgICAxMTgsXG4gICAgICA2NCxcbiAgICAgIDQ4LFxuICAgICAgMjMzLFxuICAgICAgNzAsXG4gICAgICAyMSxcbiAgICAgIDU1LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjFaUVlUWlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAyODg3OTQ1OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDAwOTAxMjc5NTgyNDk6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL1h0U2NRaVBqbHN3WVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRBVFdnSmpmdGZ1aHlRaDZMUXRBVFhvcmdlOEtqa3FCSm9nMkNGN3Yvblk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUnY3VGdoWTgrZ2dUNzVrWlE2NmlWTmxkV2J1Z0NCNnIzbWMrY1RVaUF3dERjUmh3NjFqQ3RmNXkybmRtdy9zMU4zTkFwL3NwL3doQ0YyUUxCYW1kQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL25kcTlMUHBXUzMxQVM2S0tocU1COHZjOE9CS0dxTzd4MjcyWVgvWjNTWDRPV1ZrZzhqTG9UNWo0dTlLK1NjbnZUWWc3MzBsNjRUS3FKMHRsK1Q5QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDI4ODc5NDU5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTIzNzY0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQVFBQUxhU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBUUFBTGFTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYlMyRVhLZjNMUkU3Vk9GcFFydElSMGhwRGl3UDFSRHVnd0g2cGQ3Ukw4MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MjY2ODQ0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODg5MzM2MjA3NlwifSIKfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
