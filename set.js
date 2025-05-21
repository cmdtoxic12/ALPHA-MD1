const fs = require('fs-extra');
//const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VVy46jRhT9l9raGfMwYKx0FIxt7DYY3H7SURZlKKAMBlxV4MajlqKsssq0NJtk0VI+Yxb5mvmB6U+IaHdnWppk0mGB6sWtc8499/IWpBmmaIIq0H0LcoJLyFA9ZFWOQBf0iiBABDSBDxkEXZBpTqehVgudq+KisLbOfqWcisIVTVvidq3D9dATDhrVldHxAtw2QV5sE+x9JaDuToIFuiHaXDMCE4qHcD4NfTlCJzVrkDknONaEpwJnxoMLcFtHhJjgNBzkEdojApMJqhyIyevgD7TWzooPOeRLzjv1bWKswp4WDfe9hikonBpmhnXD+fKRz14Hv4V10b0MA9N15nhy0iCdYW6ne+EVO6Z2w8o5OSzD2CmP2hk+xWGK/LGPUoZZ9Wrdad9dyaNYnhW90HL1pEHwfjeITWku3TCRkXS9TYYtTuoM3NcBX+Q9dTtSHdnYiZfG4IDLQRTHiYpaURrqp2CSBxxuew1oeC+BO+TZK/H/0b09mC4rmHD6LMLLKlNZx9kwug6sbbYcI2kUMSuVVtFoPnil7jZ/cqPRVbQ3Cx6xXdmmp5Nj0SRcd9r+UupY0ckhkk3El7pDVpCvoVQ24SWWDHYjletyCHVRXNiiboiIW6BiTNtbxV5pB7992vs4NsNwbphRjPuRbl9tOjC/XDtXPOTz+YpD6loQxFN4UPTw4pFRjKqxD7r8bRMQFGLKCGQ4S+s1QeSbAPrlHHkEsUd5gXlpY0nZUBdvfTqqnJa71oeJp0w3qqIJicdH/WK8ahWyTS9AE+Qk8xClyB9hyjJSWYhSGCIKuj88ZqomTdA+Y+gS+6ALBFGURElWVFFtf0/fHCPIKMzzNylioAkCku0tBLqMFKgJHj/gdYVXBF7UZLnD96U+L6nSUJS4NscPOb0j1RT350sXeI8og/scdHmlrSiqKvLy7Y9NkKIbdvZPzbomHWBC2TIt8iSD/rO5njeh52VFyuZV6un1ABHQfbGMGMNpSGtmRQqJF+ES6TUP0A1gQtHfQiOC/GcuT81Dz/w6//1rUeptZpegxl4H+kKbrix8KU9yVoSXJUFQZZmT1bbUqU/WG02QwjoY+PjTn58+vPu29d158HB/9/7h/u7Xh/u7nx/u735/uL/75ZunyfuPv/3x6cO787tW8oljDclHDOKE1p3STKuonI0GtnDNvIFhaO1Q00MNfNbk2eNnD1XUkmAC7cHukJq6x6m96VRwSejR4mC1j8Oos3O04cxtiNrFPwSppZD8YGl4fNFXXPFGrKqIqMaWnRpOwGv7XBtFUmD11FOmG7E8jFLHjoPV6Lh259ZcOjo5VobrxnLdqLybrT7zlotN4WraRX2bj0rsoZeXtUajqJx60tEclNeZm0zUGQ47MU9PVd8o/U2RlKJ6bWfJYDy1fF/hJja/GS6861RP/ZhqFWtp144m4UJp7cnO7POG1Tueq++x+pOnrouf6gI/TgOMHpvYU9r+M/tn4LVJudvmixhPbfFfWkvPI317na930VjOq2M6dWaLhb+ftEemedjZVs8Nxqdjb2k47Ahu62rJE8iCjOxBF8DUJ9mjt0hW1K4fp0H2tX+qNh73Z2fmCaRM+1xJXxanoHLnUw7J8hGkUS2C0db2RV0WlZbncwbZc2ECrX6Gaglu/wIFFIWoOwgAAA==',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "233535679394",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/gtktfx.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "yes", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
