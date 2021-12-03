//KALO MAU RECODE / NAMBAH FITUR SILAHKAN
//TAPI CREATOR GK USH HPUS ANJING
//MODAL NAMBAH FITUR / RECODE DOANK CREATOR SAMPE DI HAPUS LAWAK
//SC NYOLONG DI YT NGAKU² PUNYA SENDIRI LAWAK DEK
//KALO MAU JADI CRETOR BIKIN SC / BASE SENDIRI LAH GBLOK
//JANGAN MODAL NYOLONG DOANK

//FOLLOW ALL SOSIAL MEDIAML ME
//YOUTUBE : Zero YT7
//INSTAGRAM : @Zero_YT7
//TIKTOK : @_zeroyt7
//GITHUB : Zero-YT7

let { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
let { color, bgcolor } = require('./lib/color')
let { lirikLagu } = require('./lib/lirik.js')
let { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

let
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const gis = require('g-i-s')
const hx = require('hxz-api')
const crypto = require('crypto')
const request = require('request')
const brainly = require('brainly-scraper')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const imageToBase64 = require('image-to-base64')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
zerokey = setting.ZeroKey
zerkey = setting.ZerKey
ownername = setting.OwnerName

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        let content = JSON.stringify(mek.message)
		let from = mek.key.remoteJid
		let { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		let time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        let type = Object.keys(mek.message)[0]        
        let cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        let prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		let args = body.trim().split(/ +/).slice(1)
		let isCmd = body.startsWith(prefix)
		let q = args.join(' ')
		let Verived = "0@s.whatsapp.net"
		let txt = mek.message.conversation
		let botNumber = zeroyt7.user.jid
		let ownerNumber = [`${owner}@s.whatsapp.net`, `6281252766480@s.whatsapp.net`]
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let totalchat = await zeroyt7.chats.all()
		let groupMetadata = isGroup ? await zeroyt7.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let conts = mek.key.fromMe ? zeroyt7.user.jid : zeroyt7.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        let pushname = mek.key.fromMe ? zeroyt7.user.name : conts.notify || conts.vname || conts.name || '-'
        
		let isAntiLink = isGroup ? _antilink.includes(from) : false
		let isWelkom = isGroup ? _welkom.includes(from) : false
		let isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		let isOwner = ownerNumber.includes(sender)
		let isUser = pendaftar.includes(sender)
		let isMybot = isOwner || mek.key.fromMe
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Wait Tod Lagi Di Proses:v',
			success: 'Nih',
			error: {
				stick: 'bukan sticker:v',
				Iv: 'Linknya Error Tod !'
			},
			only: {
				admin: 'Kusus Admin Tod !',
				group: 'Khusus Group Tod !'
			}
		}
		faketeks = 'Hanif Botz〽️'
		let isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        let reply = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {quoted:mek})
        }
        let sendMess = (hehe, teks) => {
            zeroyt7.sendMessage(hehe, teks, text)
        }
        let mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? zeroyt7.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zeroyt7.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        let zero = fs.readFileSync ('./zeroyt7/zerothumb.jpg')
        let costum = (pesan, tipe, target, target2) => {
			zeroyt7.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		let katalog = (teks) => {
             res = zeroyt7.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": `*${ownername}*`, "thumbnail": fs.readFileSync('./zeroyt7/zero.jpg'), "surface": 'CATALOG' }}, {quoted:ftrol})
             zeroyt7.relayWAMessage(res)
        }
		let runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Jangan gadang kak"; break;
                case 1: jamss = "Jangan gadang kak"; break;
                case 2: jamss = "Jangan gadang kak"; break;
                case 3: jamss = "Jangan gadang kak"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi"; break;
                case 6: jamss = "Selamat pagi"; break;
                case 7: jamss = "Selamat pagi"; break;
                case 8: jamss = "Selamat pagi"; break;
                case 9: jamss = "Selamat pagi"; break;
                case 10: jamss = "Selamat pagi"; break;
                case 11: jamss = "Selamat siang"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang"; break;
                case 14: jamss = "Selamat sore"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore"; break;
                case 17: jamss = "Selamat sore"; break;
                case 18: jamss = "Selamat malam"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam"; break;
                case 21: jamss = "Selamat malam"; break;
                case 22: jamss = "Selamat malam"; break;
                case 23: jamss = "Selamat malam"; break;
            }
            var tampilUcapan = "" + jamss;
            const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔','🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇 Win👑','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',	'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐 Win👑','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🍒 : 🍒 : 🍒 Win👑','🍌 : 🍌 : 🍌 Win👑']
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            zeroyt7.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await zeroyt7.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            zeroyt7.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return zeroyt7.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//

        const _0x2b0dc7=_0x54e2;(function(_0x3c592c,_0x2df5e9){const _0x2cbf8e=_0x54e2,_0x331c46=_0x3c592c();while(!![]){try{const _0x3d1678=parseInt(_0x2cbf8e(0xf6))/0x1*(parseInt(_0x2cbf8e(0xf2))/0x2)+parseInt(_0x2cbf8e(0xf5))/0x3*(-parseInt(_0x2cbf8e(0xf3))/0x4)+parseInt(_0x2cbf8e(0xe6))/0x5*(parseInt(_0x2cbf8e(0xe4))/0x6)+-parseInt(_0x2cbf8e(0xe9))/0x7+parseInt(_0x2cbf8e(0xdc))/0x8*(parseInt(_0x2cbf8e(0xe1))/0x9)+-parseInt(_0x2cbf8e(0xe8))/0xa+-parseInt(_0x2cbf8e(0xee))/0xb;if(_0x3d1678===_0x2df5e9)break;else _0x331c46['push'](_0x331c46['shift']());}catch(_0x2629cd){_0x331c46['push'](_0x331c46['shift']());}}}(_0x4596,0xb59ff));function _0x54e2(_0x272b08,_0x22e2e8){const _0x459631=_0x4596();return _0x54e2=function(_0x54e2b6,_0x31d1c2){_0x54e2b6=_0x54e2b6-0xdc;let _0x4e3f7a=_0x459631[_0x54e2b6];return _0x4e3f7a;},_0x54e2(_0x272b08,_0x22e2e8);}function _0x4596(){const _0x4ce574=['vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','15rIcJSX','SUBSCRIBE\x20HANIF\x20BOTZ〽️','1216890ptZSpB','5387151pIlxQk','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==','sendMessage','6289523258649-1604595598@g.us','7708756QhlUCx','./zeroyt7/zero.jpg','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','0@s.whatsapp.net','22SDBxHN','520KdvTWz','chatRead','8340UxUQqN','14293ItlStH','120fdDFNL','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','status@broadcast','28777','1610993486','658377twiFuu','image/jpeg','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','2885790qcuzGb'];_0x4596=function(){return _0x4ce574;};return _0x4596();}let fakestatus=_0x5308cc=>{const _0xc5a6af=_0x54e2;zeroyt7[_0xc5a6af(0xec)](from,_0x5308cc,text,{'quoted':{'key':{'fromMe':![],'participant':_0xc5a6af(0xf1),...from?{'remoteJid':_0xc5a6af(0xde)}:{}},'message':{'imageMessage':{'url':_0xc5a6af(0xf0),'mimetype':_0xc5a6af(0xe2),'caption':faketeks,'fileSha256':_0xc5a6af(0xdd),'fileLength':_0xc5a6af(0xdf),'height':0x438,'width':0x437,'mediaKey':_0xc5a6af(0xe5),'fileEncSha256':_0xc5a6af(0xe3),'directPath':_0xc5a6af(0xea),'mediaKeyTimestamp':_0xc5a6af(0xe0),'jpegThumbnail':fs['readFileSync'](_0xc5a6af(0xef)),'scansSidecar':_0xc5a6af(0xeb)}}}});};zeroyt7[_0x2b0dc7(0xf4)](from,'read');let fakegroup=_0x4e898b=>{const _0x3a8254=_0x2b0dc7;zeroyt7[_0x3a8254(0xec)](from,_0x4e898b,text,{'quoted':{'key':{'fromMe':![],'participant':_0x3a8254(0xf1),...from?{'remoteJid':_0x3a8254(0xed)}:{}},'message':{'imageMessage':{'url':_0x3a8254(0xf0),'mimetype':_0x3a8254(0xe2),'caption':faketeks,'fileSha256':_0x3a8254(0xdd),'fileLength':_0x3a8254(0xdf),'height':0x438,'width':0x437,'mediaKey':_0x3a8254(0xe5),'fileEncSha256':_0x3a8254(0xe3),'directPath':_0x3a8254(0xea),'mediaKeyTimestamp':_0x3a8254(0xe0),'jpegThumbnail':fs['readFileSync']('./zeroyt7/zero.jpg'),'scansSidecar':_0x3a8254(0xeb)}}}});},ftrol={'key':{'participant':_0x2b0dc7(0xf1)},'message':{'orderMessage':{'itemCount':0x7b,'status':0x1,'surface':0x1,'message':_0x2b0dc7(0xe7),'orderTitle':'SUBSCRIBE\x20ZERO\x20YT7','thumbnail':zero,'sellerJid':'0@s.whatsapp.net'}}};
        
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        let sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zeroyt7.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        let sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                let fn = Date.now() / 10000;
                let filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    zeroyt7.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 ANTI LINK DETECTOR 」*\nKamu Bot Mendeteksi Lu Kirim Link Tampa Izin Maaf Bot Bakal Kick Lu :v`)
setTimeout(() => {
zeroyt7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nBot Mendeteksi Lu Kirim Piltex Bot Bakal Kick Lu`)
console.log(color('[KICK]', 'red'), color('Lawack Lu Komtol!', 'yellow'))
zeroyt7.groupRemove(from, [sender])
}     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		let isMedia = (type === 'imageMessage' || type === 'videoMessage')
		let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
	
	//AUTHOR & SOURCECODE JANGAN HAPUS NGENTOD//
	//GAK USAH NGAKU² KLO SC MASIH DRI YT GBLOK//
	//MODAL NAMBAHIN FITUR DOANK AMPE HPUS CREATOR//
	//KALO MAU JADI CREATOR BIKIN SC / BASE DARI AWAL GBLOK//
	//JANGAN MODAL NYOLONG PUNYA ORANG DOANK//
	
	case 'menu':
	timestamp = speed();
				latensi = speed() - timestamp
	gambar = fs.readFileSync('./zeroyt7/zero.jpg')
	menu = `Hai ${pushname} ${tampilUcapan}

✉️ 𝙎𝙤𝙪𝙧𝙘𝙚 𝙘𝙤𝙙𝙚 = https://youtube.com/channel/UCQRYGugPpZn1Y_wH-Od2b0w
👤 𝘼𝙪𝙩𝙝𝙤𝙧 = Hanif
🌍 𝙇𝙞𝙗 = Baileys
⏳ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 = ${runtime(process.uptime())}
🌐 𝙇𝙚𝙣𝙜𝙖𝙪𝙜𝙚 = Javascript
👥 𝙏𝙤𝙩𝙖𝙡 𝙋𝙚𝙣𝙜𝙜𝙪𝙣𝙖 = ${pendaftar.length}
✨ 𝙎𝙥𝙚𝙚𝙙 = ${latensi.toFixed(4)} second
☕ 𝘿𝙚𝙫𝙞𝙘𝙚 = Windows`
	menu2 =
`╭──➤ 𝙂𝙧𝙤𝙪𝙥 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}antilink
│ℒ⃝🐋 ${prefix}welcome
│ℒ⃝🐋 ${prefix}antivirtex
│ℒ⃝🐋 ${prefix}group
│ℒ⃝🐋 ${prefix}linkgrup
│ℒ⃝🐋 ${prefix}promote
│ℒ⃝🐋 ${prefix}demote
│ℒ⃝🐋 ${prefix}add
│ℒ⃝🐋 ${prefix}kick
│ℒ⃝🐋 ${prefix}setpp
│ℒ⃝🐋 ${prefix}setdesc
│ℒ⃝🐋 ${prefix}setname
│ℒ⃝🐋 ${prefix}hidetag
│ℒ⃝🐋 ${prefix}tagall
└──────────────
╭──➤ 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}attp
│ℒ⃝🐋 ${prefix}toimg
│ℒ⃝🐋 ${prefix}sticker
│ℒ⃝🐋 ${prefix}tomp3
│ℒ⃝🐋 ${prefix}tovideo
└──────────────
╭──➤ 𝙊𝙬𝙣𝙚𝙧 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}owner
│ℒ⃝🐋 ${prefix}bc
│ℒ⃝🐋 ${prefix}report
│ℒ⃝🐋 ${prefix}readall
│ℒ⃝🐋 ${prefix}on
│ℒ⃝🐋 ${prefix}off
└──────────────
╭──➤ 𝙁𝙪𝙣 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}bisakah
│ℒ⃝🐋 ${prefix}kapankah
│ℒ⃝🐋 ${prefix}apakah
│ℒ⃝🐋 ${prefix}belah
│ℒ⃝🐋 ${prefix}bagaimanakah
│ℒ⃝🐋 ${prefix}sangecek
│ℒ⃝🐋 ${prefix}gaycek
│ℒ⃝🐋 ${prefix}slot
│ℒ⃝🐋 ${prefix}caklontong
│ℒ⃝🐋 ${prefix}say
│ℒ⃝🐋 ${prefix}truth
│ℒ⃝🐋 ${prefix}dare
│ℒ⃝🐋 ${prefix}hobby
│ℒ⃝🐋 ${prefix}lesbicek
│ℒ⃝🐋 ${prefix}watak
└──────────────
╭──➤ 𝙈𝙖𝙠𝙚𝙧 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}fdeface
│ℒ⃝🐋 ${prefix}wasted
│ℒ⃝🐋 ${prefix}wanted
│ℒ⃝🐋 ${prefix}pubglogo
│ℒ⃝🐋 ${prefix}deltrash
│ℒ⃝🐋 ${prefix}squidrip
│ℒ⃝🐋 ${prefix}sertiff1
│ℒ⃝🐋 ${prefix}bpink
│ℒ⃝🐋 ${prefix}googlem
│ℒ⃝🐋 ${prefix}roses
│ℒ⃝🐋 ${prefix}wooden
│ℒ⃝🐋 ${prefix}quote
│ℒ⃝🐋 ${prefix}textburn
│ℒ⃝🐋 ${prefix}tahta
│ℒ⃝🐋 ${prefix}minion
│ℒ⃝🐋 ${prefix}halloween
│ℒ⃝🐋 ${prefix}dance
│ℒ⃝🐋 ${prefix}warrior
│ℒ⃝🐋 ${prefix}text3d
│ℒ⃝🐋 ${prefix}express
│ℒ⃝🐋 ${prefix}spiderman
│ℒ⃝🐋 ${prefix}matrix
│ℒ⃝🐋 ${prefix}vampire
│ℒ⃝🐋 ${prefix}remm
│ℒ⃝🐋 ${prefix}lolim
│ℒ⃝🐋 ${prefix}kaneki
└──────────────
╭──➤ 𝙊𝙩𝙝𝙚𝙧 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}shortlink
│ℒ⃝🐋 ${prefix}detikvn
│ℒ⃝🐋 ${prefix}detikvideo
│ℒ⃝🐋 ${prefix}delete
│ℒ⃝🐋 ${prefix}infogempa
│ℒ⃝🐋 ${prefix}ping
│ℒ⃝🐋 ${prefix}caripesan
│ℒ⃝🐋 ${prefix}get
│ℒ⃝🐋 ${prefix}image
│ℒ⃝🐋 ${prefix}anime
│ℒ⃝🐋 ${prefix}pinterest
│ℒ⃝🐋 ${prefix}lirik
│ℒ⃝🐋 ${prefix}chara
│ℒ⃝🐋 ${prefix}playstore
│ℒ⃝🐋 ${prefix}stalktiktok
│ℒ⃝🐋 ${prefix}stalkig
│ℒ⃝🐋 ${prefix}stalkgithub
│ℒ⃝🐋 ${prefix}kbbi
│ℒ⃝🐋 ${prefix}jarak
│ℒ⃝🐋 ${prefix}wikipedia
│ℒ⃝🐋 ${prefix}translate
│ℒ⃝🐋 ${prefix}jadwaltv
│ℒ⃝🐋 ${prefix}cuaca
│ℒ⃝🐋 ${prefix}covidindo
│ℒ⃝🐋 ${prefix}covidglobal
└──────────────
╭──➤ 𝙍𝙖𝙣𝙙𝙤𝙢 𝙞𝙢𝙖𝙜𝙚 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}loli
│ℒ⃝🐋 ${prefix}quotes
│ℒ⃝🐋 ${prefix}kucing
│ℒ⃝🐋 ${prefix}anjing
│ℒ⃝🐋 ${prefix}minato
│ℒ⃝🐋 ${prefix}kakashi
│ℒ⃝🐋 ${prefix}boruto
│ℒ⃝🐋 ${prefix}sarada
│ℒ⃝🐋 ${prefix}mitsuki
│ℒ⃝🐋 ${prefix}sasuke
│ℒ⃝🐋 ${prefix}sakura
│ℒ⃝🐋 ${prefix}squidward
│ℒ⃝🐋 ${prefix}spongebob
│ℒ⃝🐋 ${prefix}sudiro
│ℒ⃝🐋 ${prefix}itachi
│ℒ⃝🐋 ${prefix}cecan
│ℒ⃝🐋 ${prefix}cogan
│ℒ⃝🐋 ${prefix}memeindo
│ℒ⃝🐋 ${prefix}polosanmeme
│ℒ⃝🐋 ${prefix}megumin
│ℒ⃝🐋 ${prefix}waifu
│ℒ⃝🐋 ${prefix}patrick
│ℒ⃝🐋 ${prefix}husbu
│ℒ⃝🐋 ${prefix}milf
│ℒ⃝🐋 ${prefix}aesthetic
│ℒ⃝🐋 ${prefix}cosplay
│ℒ⃝🐋 ${prefix}naruto
│ℒ⃝🐋 ${prefix}wibu
│ℒ⃝🐋 ${prefix}wallpaperanime
└──────────────
╭──➤ 𝙄𝙨𝙡𝙖𝙢𝙞 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}listsurah
│ℒ⃝🐋 ${prefix}alquran
│ℒ⃝🐋 ${prefix}alquranaudio
│ℒ⃝🐋 ${prefix}asmaulhusna
│ℒ⃝🐋 ${prefix}kisahnabi
│ℒ⃝🐋 ${prefix}jadwalsholat
└──────────────
╭──➤ 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}play
│ℒ⃝🐋 ${prefix}tiktok
│ℒ⃝🐋 ${prefix}tiktokmusic
│ℒ⃝🐋 ${prefix}igdl
│ℒ⃝🐋 ${prefix}fbdl
└──────────────
╭──➤ 𝘼𝙨𝙪𝙥𝙖𝙣 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}asupan
│ℒ⃝🐋 ${prefix}asupancecan
│ℒ⃝🐋 ${prefix}asupanhijaber
│ℒ⃝🐋 ${prefix}asupansantuy
│ℒ⃝🐋 ${prefix}asupanukhti
│ℒ⃝🐋 ${prefix}asupanghea
│ℒ⃝🐋 ${prefix}asupanbocil
│ℒ⃝🐋 ${prefix}asupanrika
└──────────────
╭──➤ 𝙐𝙥𝙨𝙬 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}upswteks
│ℒ⃝🐋 ${prefix}upswsticker
│ℒ⃝🐋 ${prefix}upswaudio
│ℒ⃝🐋 ${prefix}upswvideo
│ℒ⃝🐋 ${prefix}upswimage
└──────────────
╭──➤ 𝙃𝙚𝙣𝙩𝙖𝙞 𝙈𝙚𝙣𝙪
│ℒ⃝🐋 ${prefix}chiisaihentai
│ℒ⃝🐋 ${prefix}trap
│ℒ⃝🐋 ${prefix}blowjob
│ℒ⃝🐋 ${prefix}yaoi
│ℒ⃝🐋 ${prefix}ecchi
│ℒ⃝🐋 ${prefix}hentai
│ℒ⃝🐋 ${prefix}ahegao
│ℒ⃝🐋 ${prefix}hololewd
│ℒ⃝🐋 ${prefix}sideoppai
│ℒ⃝🐋 ${prefix}animefeets
│ℒ⃝🐋 ${prefix}animebooty
│ℒ⃝🐋 ${prefix}animethighss
│ℒ⃝🐋 ${prefix}animearmpits
│ℒ⃝🐋 ${prefix}hentaifemdom
│ℒ⃝🐋 ${prefix}lewdanimegirls
│ℒ⃝🐋 ${prefix}biganimetiddies
│ℒ⃝🐋 ${prefix}hentai4everyone
└──────────────

©Creator Hanif Bot〽️ : Hanif`
	function _0x582f(){var _0x5ea067=['4                       15259EKRShG','22448436yJeKLd','8Nmqbha','readFileSync','2075090nYkxxe','2489034XHefsG','audio/mp4','421833tDIWcb','18QerkcM','sendMessage','12360nacLol','☰\x20OWNER','☰\x20SEWA\x20BOT','command','☰\x20COMMAND','sewabot','audio','1438232obgBFa','7uuBjHp','495jfSXFA','11yqKxlM'];_0x582f=function(){return _0x5ea067;};return _0x582f();}function _0x2daf(_0x3e8b58,_0x2110bf){var _0x582f19=_0x582f();return _0x2daf=function(_0x2daffe,_0x7394cc){_0x2daffe=_0x2daffe-0x10a;var _0x5ce68f=_0x582f19[_0x2daffe];return _0x5ce68f;},_0x2daf(_0x3e8b58,_0x2110bf);}var _0x1a93d1=_0x2daf;(function(_0x1b7a1d,_0x968f21){var _0x2ca8eb=_0x2daf,_0x3c3c7b=_0x1b7a1d();while(!![]){try{var _0x4fe699=parseInt(_0x2ca8eb(0x11e))/0x1+-parseInt(_0x2ca8eb(0x10b))/0x2*(parseInt(_0x2ca8eb(0x110))/0x3)+-parseInt(_0x2ca8eb(0x113))/0x4*(parseInt(_0x2ca8eb(0x11c))/0x5)+parseInt(_0x2ca8eb(0x10e))/0x6*(-parseInt(_0x2ca8eb(0x11b))/0x7)+-parseInt(_0x2ca8eb(0x11a))/0x8*(parseInt(_0x2ca8eb(0x111))/0x9)+-parseInt(_0x2ca8eb(0x10d))/0xa+parseInt(_0x2ca8eb(0x11d))/0xb*(parseInt(_0x2ca8eb(0x10a))/0xc);if(_0x4fe699===_0x968f21)break;else _0x3c3c7b['push'](_0x3c3c7b['shift']());}catch(_0x29a127){_0x3c3c7b['push'](_0x3c3c7b['shift']());}}}(_0x582f,0x6a5f6),audio=fs[_0x1a93d1(0x10c)]('./audio/audio5.mp3'),zeroyt7[_0x1a93d1(0x112)](from,audio,MessageType[_0x1a93d1(0x119)],{'quoted':ftrol,'mimetype':_0x1a93d1(0x10f),'ptt':!![]}),but=[{'buttonId':prefix+_0x1a93d1(0x116),'buttonText':{'displayText':_0x1a93d1(0x117)},'type':0x1},{'buttonId':prefix+'owner','buttonText':{'displayText':_0x1a93d1(0x114)},'type':0x1},{'buttonId':prefix+_0x1a93d1(0x118),'buttonText':{'displayText':_0x1a93d1(0x115)},'type':0x1}],sendButImage(from,menu,menu2,gambar,but));
break
case 'command':
function _0x4793(_0x19b5b8,_0x1425b1){const _0x7d8953=_0x7d89();return _0x4793=function(_0x47933d,_0x43589b){_0x47933d=_0x47933d-0x7e;let _0x3aeee0=_0x7d8953[_0x47933d];return _0x3aeee0;},_0x4793(_0x19b5b8,_0x1425b1);}const _0x49ddd1=_0x4793;(function(_0x3f3ba2,_0x14182c){const _0x3606c8=_0x4793,_0x2acc82=_0x3f3ba2();while(!![]){try{const _0x5ee91a=-parseInt(_0x3606c8(0x83))/0x1*(-parseInt(_0x3606c8(0x7f))/0x2)+-parseInt(_0x3606c8(0x81))/0x3*(parseInt(_0x3606c8(0x89))/0x4)+parseInt(_0x3606c8(0x8f))/0x5+-parseInt(_0x3606c8(0x8b))/0x6*(-parseInt(_0x3606c8(0x91))/0x7)+-parseInt(_0x3606c8(0x94))/0x8+parseInt(_0x3606c8(0x86))/0x9+parseInt(_0x3606c8(0x85))/0xa*(-parseInt(_0x3606c8(0x95))/0xb);if(_0x5ee91a===_0x14182c)break;else _0x2acc82['push'](_0x2acc82['shift']());}catch(_0x374eb0){_0x2acc82['push'](_0x2acc82['shift']());}}}(_0x7d89,0x881d3));let pero=zeroyt7[_0x49ddd1(0x8a)](from,{'listMessage':{'title':'Hay\x20Kak\x20'+pushname+_0x49ddd1(0x87)+botname+'\x20Silahkan\x20Cek\x20Info\x20Disini','description':_0x49ddd1(0x96),'footertext':_0x49ddd1(0x8e),'buttonText':_0x49ddd1(0x8d),'listType':_0x49ddd1(0x93),'sections':[{'rows':[{'title':_0x49ddd1(0x84),'rowId':_0x49ddd1(0x90)}],'title':_0x49ddd1(0x88)},{'rows':[{'title':_0x49ddd1(0x8c),'rowId':_0x49ddd1(0x80)}],'title':_0x49ddd1(0x88)},{'rows':[{'title':_0x49ddd1(0x7e),'rowId':_0x49ddd1(0x82)}],'title':_0x49ddd1(0x88)}]}},{'quoted':ftrol});function _0x7d89(){const _0x21106f=['6087776rtNzdd','55ZJJpQF','Jangan\x20Lupa\x20Subscribe\x20YT\x20Zero\x20YT7','👒\x20Creator\x20Bot','614638NNCacY','#sc','9150guBrix','#creator','3GbUprT','📋\x20Info\x20Bot','1925370LiZqOj','4737501onenCk',',\x20Saya\x20','Subscribe\x20Zero\x20YT7','380qAgJGn','prepareMessageFromContent','3986046DAiuHH','🗃️\x20Script\x20Bot','PENCET\x20WOY','GITHUB?\x0ahttps://github.com/Zero-YT7','2291215cqQMEL','#infobot','7PaYBoZ','relayWAMessage','SINGLE_SELECT'];_0x7d89=function(){return _0x21106f;};return _0x7d89();}zeroyt7[_0x49ddd1(0x92)](pero);
break
case 'infobot':
function _0x4a2b(_0x258c96,_0x532d91){var _0x57d552=_0x57d5();return _0x4a2b=function(_0x4a2b71,_0x2e33f4){_0x4a2b71=_0x4a2b71-0xa2;var _0x447bae=_0x57d552[_0x4a2b71];return _0x447bae;},_0x4a2b(_0x258c96,_0x532d91);}var _0x2ac95c=_0x4a2b;function _0x57d5(){var _0x47a124=['30901LVqxxX','1172020VkfGme','44nRnxmt','toFixed','\x0a*┃┃*\x20Prefix\x20:\x20Multi\x20Prefix\x0a*┃┃*\x20Total\x20Pengguna\x20:\x20','3564168KpxLKP','5412XqjVPq','24HmzvwS','2948510PSLoTF','5826GFNrKh','8dJbqoM','974183UNJWuW','\x0a*┃┃*\x20Runtime\x20:\x20','60jhZFdU','☰\x20OWNER','©Created\x20:\x20Zero\x20YT7','┏━➤\x20*INFO\x20BOT*\x20\x0a*┃┃*\x20Creator\x20Bot\x20:\x20Hanif\x20\x0a*┃┃*\x20Nama\x20Owner\x20:\x20','9eQeVfv','180067ZlIxOw','uptime','\x20second\x0a*┃┃*\x20Language\x20:\x20Javascript\x20&\x20Nodejs\x0a*┃┗━━━━━━━━*\x0a*┃◗\x20Thanks\x20To\x20Allah\x20S.W.T*\x0a*┃◗\x20Thank\x20To\x20Ortu*\x0a*┃◗\x20Thank\x20To\x20Hanif\x20\x20(Creator)*\x0a*┃◗\x20Thanks\x20To\x20All\x20Subscriberku*\x0a*┗━━━━━━━\x20•*'];_0x57d5=function(){return _0x47a124;};return _0x57d5();}(function(_0x4e4144,_0xb39d5c){var _0x1a1f46=_0x4a2b,_0x313e10=_0x4e4144();while(!![]){try{var _0x474428=parseInt(_0x1a1f46(0xb6))/0x1*(-parseInt(_0x1a1f46(0xae))/0x2)+parseInt(_0x1a1f46(0xad))/0x3*(parseInt(_0x1a1f46(0xb1))/0x4)+parseInt(_0x1a1f46(0xac))/0x5+parseInt(_0x1a1f46(0xab))/0x6*(-parseInt(_0x1a1f46(0xaf))/0x7)+parseInt(_0x1a1f46(0xa9))/0x8*(parseInt(_0x1a1f46(0xb5))/0x9)+parseInt(_0x1a1f46(0xa5))/0xa*(-parseInt(_0x1a1f46(0xa6))/0xb)+parseInt(_0x1a1f46(0xaa))/0xc*(parseInt(_0x1a1f46(0xa4))/0xd);if(_0x474428===_0xb39d5c)break;else _0x313e10['push'](_0x313e10['shift']());}catch(_0x401428){_0x313e10['push'](_0x313e10['shift']());}}}(_0x57d5,0x5f5e4),timestamp=speed(),latensi=speed()-timestamp,teks=_0x2ac95c(0xb4)+ownername+'\x0a*┃┃*\x20Nama\x20Bot\x20:\x20'+botname+_0x2ac95c(0xa8)+pendaftar['length']+_0x2ac95c(0xb0)+runtime(process[_0x2ac95c(0xa2)]())+'\x0a*┃┃*\x20Speed\x20:\x20'+latensi[_0x2ac95c(0xa7)](0x4)+_0x2ac95c(0xa3),but=[{'buttonId':prefix+'owner','buttonText':{'displayText':_0x2ac95c(0xb2)},'type':0x1},{'buttonId':prefix+'sc','buttonText':{'displayText':'☰\x20SCRIPT'},'type':0x1}],sendButton(from,teks,_0x2ac95c(0xb3),but,mek));
break
case 'sewabot':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
sewa = 
`Hay ${pushname}, ${tampilUcapan}
Mau Sewa Bot Ya ? 

Silahkan Pilih List Di Bawah Ini`
but = [
          { buttonId: `${prefix}sebulan`, buttonText: { displayText: '1 BULAN' }, type: 1 },
          { buttonId: `${prefix}permanen`, buttonText: { displayText: 'PERMANEN' }, type: 1 }
        ]
        sendButLocation(from, sewa, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'sebulan':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
sebulan =
`Untuk Harga Sewa Bot 
Sebulan 10.000

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
          { buttonId: `${prefix}pulsa`, buttonText: { displayText: 'PULSA' }, type: 1 }
        ]
        sendButLocation(from, sebulan, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'permanen':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
permanen =
`Untuk Harga Sewa Bot 
Permanen 15.000

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
          { buttonId: `${prefix}pulsa`, buttonText: { displayText: 'PULSA' }, type: 1 }
        ]
        sendButLocation(from, permanen, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'gopay':
gopay =
`No Gopay : 081252766480
A/N : Mikey`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, gopay, faketeks, but, mek)
break
case 'dana':
dana =
`No Gopay : 081252766480
A/N : Mustakim`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, dana, faketeks, but, mek)
break
case 'pulsa':
ovo =
`No Gopay : 081252766480
A/N : Mikey`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, ovo, faketeks, but, mek)
break
case 'creator':
function _0x2327(){var _0xff8576=['963486cTSVZx','1259949ZuCRna','352CFzbDk','10QYQVCg','1574tZeKNC','27370RJxFlW','Script\x20Ini\x20Di\x20Buat\x20Oleh\x0a©Creator\x20:\x20Hanif\x20','6334920JprxjO','385pLHIwa','1978191Zibzkh','sendMessage','7CYtisR','4toNiRE','3191944KqUHbZ'];_0x2327=function(){return _0xff8576;};return _0x2327();}var _0x5aca91=_0x1726;function _0x1726(_0x1fb834,_0x43fdbd){var _0x2327a5=_0x2327();return _0x1726=function(_0x17263c,_0x252388){_0x17263c=_0x17263c-0x1cb;var _0x69d08a=_0x2327a5[_0x17263c];return _0x69d08a;},_0x1726(_0x1fb834,_0x43fdbd);}(function(_0x5e17bf,_0x146969){var _0x3db5fa=_0x1726,_0x5b92f4=_0x5e17bf();while(!![]){try{var _0x1e4b2f=parseInt(_0x3db5fa(0x1cc))/0x1*(-parseInt(_0x3db5fa(0x1d8))/0x2)+parseInt(_0x3db5fa(0x1d7))/0x3*(parseInt(_0x3db5fa(0x1d4))/0x4)+-parseInt(_0x3db5fa(0x1cb))/0x5*(-parseInt(_0x3db5fa(0x1d6))/0x6)+-parseInt(_0x3db5fa(0x1d3))/0x7*(-parseInt(_0x3db5fa(0x1d5))/0x8)+-parseInt(_0x3db5fa(0x1d1))/0x9+parseInt(_0x3db5fa(0x1cd))/0xa*(parseInt(_0x3db5fa(0x1d0))/0xb)+-parseInt(_0x3db5fa(0x1cf))/0xc;if(_0x1e4b2f===_0x146969)break;else _0x5b92f4['push'](_0x5b92f4['shift']());}catch(_0x30e4c3){_0x5b92f4['push'](_0x5b92f4['shift']());}}}(_0x2327,0x33900),teks=_0x5aca91(0x1ce),zeroyt7[_0x5aca91(0x1d2)](from,teks,text,{'quoted':ftrol}));
break

//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk welcome group", faketeks, but, mek)
break
case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'welcomeoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: '☰ BUKA' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: '☰ TUTUP' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await zeroyt7.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
zeroyt7.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zeroyt7.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateSubject(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateDescription(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zeroyt7.downloadAndSaveMediaMessage(mek, './database/media_user')
await zeroyt7.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
zeroyt7.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Hanif Botz〽️`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zeroyt7.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Hanif Botz〽️`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
zeroyt7.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
zeroyt7.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await zeroyt7.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Hanif Botz〽️' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zeroyt7.contacts[i] != undefined ? zeroyt7.contacts[i].vname || zeroyt7.contacts[i].notify : undefined
inilist.push({
"displayName": 'HanifBot〽️',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zeroyt7.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
var _0x2f32fc=_0x5b0f;(function(_0x2c7bfe,_0x5dcdb3){var _0x2b3621=_0x5b0f,_0x18c8fd=_0x2c7bfe();while(!![]){try{var _0x2e9b44=-parseInt(_0x2b3621(0x1d4))/0x1*(-parseInt(_0x2b3621(0x1d8))/0x2)+-parseInt(_0x2b3621(0x1d1))/0x3*(-parseInt(_0x2b3621(0x1cb))/0x4)+parseInt(_0x2b3621(0x1c8))/0x5*(-parseInt(_0x2b3621(0x1d2))/0x6)+parseInt(_0x2b3621(0x1cc))/0x7+-parseInt(_0x2b3621(0x1d3))/0x8*(-parseInt(_0x2b3621(0x1ca))/0x9)+-parseInt(_0x2b3621(0x1c7))/0xa+-parseInt(_0x2b3621(0x1cd))/0xb;if(_0x2e9b44===_0x5dcdb3)break;else _0x18c8fd['push'](_0x18c8fd['shift']());}catch(_0x14def5){_0x18c8fd['push'](_0x18c8fd['shift']());}}}(_0x3988,0x54aae),button=[{'buttonId':_0x2f32fc(0x1d5),'buttonText':{'displayText':_0x2f32fc(0x1d0)},'type':0x1},{'buttonId':_0x2f32fc(0x1d9),'buttonText':{'displayText':_0x2f32fc(0x1d6)},'type':0x1},{'buttonId':'.tiktok','buttonText':{'displayText':_0x2f32fc(0x1c9)},'type':0x1}],buttons={'contentText':_0x2f32fc(0x1ce),'footerText':faketeks,'buttons':button,'headerType':0x1},await zeroyt7[_0x2f32fc(0x1d7)](from,buttons,MessageType[_0x2f32fc(0x1cf)],{'quoted':ftrol}));function _0x5b0f(_0x48adc6,_0x18c02d){var _0x398829=_0x3988();return _0x5b0f=function(_0x5b0f47,_0x5453a4){_0x5b0f47=_0x5b0f47-0x1c7;var _0x2e28c5=_0x398829[_0x5b0f47];return _0x2e28c5;},_0x5b0f(_0x48adc6,_0x18c02d);}function _0x3988(){var _0x34b563=['294NFOgfw','5423848zIswpu','490192ZHWggP','.youtube','☰\x20INSTAGRAM','sendMessage','2iRaYQn','.instagram','2899090lFsowh','31190hZNQsb','☰\x20TIKTOK','9GoOoZM','35656hicTWk','4628064OghKSM','11227326PCsntN','Nih\x20Nomer\x20Owner\x20Ku\x20Mau\x20Tau\x20Tentang\x20Apa\x20Ya\x20?','buttonsMessage','☰\x20YOUTUBE','45JCoDtQ'];_0x3988=function(){return _0x34b563;};return _0x3988();}
break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
anu = await zeroyt7.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '☰ MENU'}, type: 1},{buttonId: `${prefix}sewabot`, buttonText: {displayText: '☰ SEWA BOT'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zeroyt7.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
let teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zeroyt7.sendMessage(`6281252766480@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/channel/UCQRYGugPpZn1Y_wH-Od2b0w`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/hanipdevoloper`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Github Owner Ku Jangan Lupa Di Follow Ya https://github.com/udnberak`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
function _0x5a6a(_0x259be3,_0x2c6f77){var _0x1d5eed=_0x1d5e();return _0x5a6a=function(_0x5a6a4d,_0xa0fdbf){_0x5a6a4d=_0x5a6a4d-0x1ee;var _0x198f74=_0x1d5eed[_0x5a6a4d];return _0x198f74;},_0x5a6a(_0x259be3,_0x2c6f77);}var _0x21a555=_0x5a6a;(function(_0x36157b,_0x1125c9){var _0x20c6a7=_0x5a6a,_0x588d59=_0x36157b();while(!![]){try{var _0x28550f=-parseInt(_0x20c6a7(0x1f4))/0x1+parseInt(_0x20c6a7(0x1f2))/0x2*(-parseInt(_0x20c6a7(0x1f8))/0x3)+parseInt(_0x20c6a7(0x1f6))/0x4*(-parseInt(_0x20c6a7(0x1ef))/0x5)+parseInt(_0x20c6a7(0x1f3))/0x6+-parseInt(_0x20c6a7(0x1f9))/0x7+parseInt(_0x20c6a7(0x1f0))/0x8+parseInt(_0x20c6a7(0x1f1))/0x9*(parseInt(_0x20c6a7(0x1f7))/0xa);if(_0x28550f===_0x1125c9)break;else _0x588d59['push'](_0x588d59['shift']());}catch(_0x547081){_0x588d59['push'](_0x588d59['shift']());}}}(_0x1d5e,0x78fdb),teks=_0x21a555(0x1ee),zeroyt7[_0x21a555(0x1f5)](from,teks,text,{'quoted':ftrol}));function _0x1d5e(){var _0x19477e=['2265459rhEVth','*Bot\x20Ini\x20Menggunakan\x20Sourcecode*\x0a╭─────────────────────\x0a├\x20Sc\x20Ori\x20=\x20https://github.com/udinberak\x0a├\x20Sc\x20Full\x20Fitur\x20=\x20https://youtube.com/channel/UCQRYGugPpZn1Y_wH-Od2b0w\x0a├─────────────────────\x0a├\x20Creator\x20Base\x20=\x20Hanif\x20\x0a├\x20Creator\x20Sc\x20=\x20Hanif\x20\x0a└─────────────────────','5WUSLhk','3777432gVMRfg','17967735MCajhb','46gjLJho','1816956FBdjCT','333995LJqqPt','sendMessage','3697748KzMlgo','10ajLUXZ','90492cNmDtz'];_0x1d5e=function(){return _0x19477e;};return _0x1d5e();}
break
case "on":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        offline = false;
        reply(" ```ANDA TELAH ONLINE``` ");
        break;
        case "off":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        reply(" ```ANDA TELAH OFFLINE``` ");
        break;
         case 'readall':
              totalchat.map( async ({ jid }) => {
              await zeroyt7.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca Seluruh Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//━━━━━━━━━━━━━━━[ INFO BOT ]━━━━━━━━━━━━━━━━━//

case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break

//━━━━━━━━━━━━━━━[ FITUR FUN ]━━━━━━━━━━━━━━━━━//

case "bisakah":           
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: ftrol })
					break
					case "kapankah":
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: ftrol })
					break
		            case "apakah":
		              apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Hmmm gimana ya']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: ftrol })
					break
case "belah":
				if (args.length < 1) return reply('mana pertanyaan nya kak?\nContoh zero bermain Free Fire')
					iyas = body.slice(7)
					const iya =['Bener','Salah','Bener dong','Salah!!!']
					const salah = iya[Math.floor(Math.random() * iya.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *bener atau salah '+iyas+'*\n\nJawaban : '+ salah, text, { quoted: ftrol })
					break
		            case "bagaimanakah":
                    bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Hmmm gimana ya','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: ftrol })
					break
		            case "rate":
		              rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
					break
                    case "sangecek":
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: ftrol })
					break
case "gaycek":
  gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: ftrol })
					break
					case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            zeroyt7.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy} <=====||\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            sendButMessage(from, `Mau main lagi?`, `Pencet tombol di bawah`, [
          {
            buttonId: `${prefix}slot`,
            buttonText: {
              displayText: `Play Again`,
            },
            type: 1,
          },
        ]);
            break;
            case "say":
              teks = body.slice(5)
              if (args.length < 1) return reply('teksnya mana tod?')
              saying = teks
                 zeroyt7.sendMessage(from, saying, text)
              break
              case "caklontong":
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta`)
   cak = `*${anu.result.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   zeroyt7.sendMessage(from, cak, text, {quoted: ftrol }) // ur cods
   }, 0) // 1000 = 1s,
   break
   case "lesbicek":
                                 
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: ftrol })
					break
					case "watak":
					
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: ftrol })
				        break
				case "hobby":
                 
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					zeroyt7.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: ftrol })
					break
					case "truth":
                 
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButton(from, ttrth, "mau lagi? tekan tombol di bawah", [
          {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
         {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`,
            },
            type: 1,
          },

 ]);
					
					break
		case "dare":
                 
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					zero = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButton(from, der, "mau lagi? tekan tombol di bawah", [
					  {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`,
            },
            type: 1,
          },

 ]);
					break
					
//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//
					
					case "wasted":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          //  console.log(ted)
          reply("Loading.....");
          owgi = await zeroyt7.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wasted?imgurl=${anu.display_url}`
          );
          zeroyt7.sendMessage(from, hehe, image, {
            quoted: ftrol,
            thumbnail: Buffer.alloc(0),
          });
        } /*else {
                                                                 reply('Jangan tambah kan apapun pada command')
                                                                   }*/
        break;
        case "wanted":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await zeroyt7.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wanted?picurl=${anu.display_url}`
          );
          zeroyt7.sendMessage(from, hehe, image, {
            quoted: ftrol,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;
        case "deltrash":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await zeroyt7.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/deltrash?imgurl=${anu.display_url}`
          );
          zeroyt7.sendMessage(from, hehe, image, {
            quoted: ftrol,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;
        case "squidrip":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await zeroyt7.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/rip?picurl=${anu.display_url}`
          );
          zeroyt7.sendMessage(from, hehe, image, {
            quoted: ftrol,
            thumbnail: Buffer.alloc(0),
          });
        }
        break
        case "sertiff1":
        if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`)
        pll = body.slice(10);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/sertif-ff-v1?text=${pll}`
        );
        zeroyt7.sendMessage(from, rakz, image, {
          quoted: ftrol,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case "bpink":
        pll = body.slice(7);

        if (args.length < 1) return reply(preffk);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/blackpink?text=${pll}`
        );
        zeroyt7.sendMessage(from, rakz, image, {
          quoted: ftrol,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case "googlem":
					  
				if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️ | ganteng | banget`)
				reply(mess.wait)
kontol = body.slice(8)
memek3 = kontol.split("|")[0];
memek4 = kontol.split("|")[1];
memek5 = kontol.split("|")[2];
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker?text=${memek3}&text2=${memek4}&text3=${memek5}&theme=google-suggestion&apikey=beta`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: shit, thumbnail: Buffer.alloc(0)})
break
case "roses":
					  
				if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`)
				reply(mess.wait)
kontol = body.slice(7)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/roses?text=${kontol}&theme=golden&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: shit, thumbnail: Buffer.alloc(0)})
break
case "wooden":
					  
				if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`)
				reply(mess.wait)
kontol = body.slice(8)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/roses?text=${kontol}&theme=wooden-boarch&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: shit, thumbnail: Buffer.alloc(0)})
break
case "quote":
					  
				if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`)
				reply(mess.wait)
kontol = body.slice(7)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/random?text=${kontol}&theme=art-quote&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: shit, thumbnail: Buffer.alloc(0)})
break
case "textburn":
					  
				if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`)
				reply(mess.wait)
kontol = body.slice(10)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/random?text=${kontol}&theme=text-burn&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: shit, thumbnail: Buffer.alloc(0)})
break
case 'tahta':
if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`)
				dapuhy = body.slice(7)
				reply(mess.wait)
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				zeroyt7.sendMessage(from, asu, image, {quoted: ftrol, thumbnail: Buffer.alloc(0)})
				break
				case "halloween":
					if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`)
					biji = body.slice(11)
					reply(mess.wait)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${biji}&apikey=Ikyy69`)
					zeroyt7.sendMessage(from, atetepe, image, { quoted: ftrol, thumbnail: Buffer.alloc(0) })
					break
					case "minion":
					if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️'`)
					biji = body.slice(8)
					reply(mess.wait)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${biji}&apikey=Ikyy69`)
					zeroyt7.sendMessage(from, atetepe, image, { quoted: ftrol, thumbnail: Buffer.alloc(0) })
					break
					case "dance":
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
				bapakao = body.slice(7)
				reply(mess.wait)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${bapakao}&apikey=Ikyy69`)
				break
				case "warrior":
				  
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
			 reply(mess.wait)
				bapakao = body.slice(9)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${bapakao}&apikey=Ikyy69`)
				break
				case "text3d":
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
				reply(mess.wait)
				bapakao = body.slice(8)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${bapakao}&apikey=Ikyy69`)
				break
				case "express":
				  
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
				reply(mess.wait)
				bapakao = body.slice(9)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${bapakao}&apikey=Ikyy69`)
				break
				case "spiderman":
				  
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
				reply(mess.wait)
				bapakao = body.slice(11)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${bapakao}&apikey=Ikyy69`)
				break
				case "matrix":
  
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
				reply(mess.wait)
				bapakao = body.slice(8)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${bapakao}&apikey=Ikyy69`)
				break
				case "vampire":
     
   if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
   reply(mess.wait)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${bapakao}&apikey=Ikyy69`)
   break
   case "remm":
   if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
   reply(mess.wait)
   bapakao = body.slice(6)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=hardianto&text=${bapakao}`)
   break
case "lolim":
   if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
   reply(mess.wait)
   bapakao = body.slice(7)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx2?apikey=hardianto&nama=${bapakao}`)
   break
   case "kaneki":
   if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Hanif Botz〽️`, mek)
   reply(mess.wait)
   bapakao = body.slice(8)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx1?apikey=hardianto&nama=${bapakao}`)
   break
   
//━━━━━━━━━━━━━━━[ FITUR OTHER ]━━━━━━━━━━━━━━━━━//
   
   case 'shortlink':
				zeroyt7.updatePresence(from, Presence.composing) 
				urlnya = body.slice(11)
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
				case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await zeroyt7.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						zeroyt7.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:ftrol})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await zeroyt7.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						zeroyt7.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ftrol})
						fs.unlinkSync(median)
				break
				case 'delete':
					zeroyt7.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=Ikyy69`, {method: 'get'})

					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					zeroyt7.sendMessage(from, buff, image, {quoted: ftrol, caption: gempa})
					break
					case 'dadu':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			zeroyt7.sendMessage(from, damdu, sticker, {quoted: ftrol})
			break
			case "caripesan":
        case "smsg":
        if (!q) return reply("pesannya apa bang?");
        let v = await zeroyt7.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await zeroyt7.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
        case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            reply(bu);
          });
        break;
        case "image":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;
         case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                zeroyt7.sendMessage(from, media, image, {
                  quoted: ftrol,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
        case "pinterest":
        if (!q) return reply("gambar apa?");
        reply("Sedang mencari Imagenya🔍")
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await zeroyt7.sendMessage(from, di, image, { quoted: mek })
        break;
        case "lirik":
          if (!q) return reply("lagu apa?");
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `*Judul Lagu :* ${teks}\n*Lirik Lagu :* ${res[0].result}`
reply(lirik)
})
break
case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara Hanif Botz〽️`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await zeroyt7.sendMessage(from, li, image, { quoted: ftrol });
        break;
        case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
 
//━━━━━━━━━━━━━━━[ FITUR RANDOM IMAGE ]━━━━━━━━━━━━━━━━━//

        case "loli":
      case "quotes":
      case "kucing":
      case "anjing":
      case "minato":
      case "kakashi":
      case "boruto":
      case "sarada":
      case "mitsuki":
      case "sasuke":
      case "sakura":
      case "squidward":
      case "spongebob":
      case "sudiro":
      case "itachi":
      case "cecan":
      case "cogan":
      case "memeindo":
      case "polosanmeme":
      case "megumin":
      case "waifu":
      case "patrick":
      case "husbu":
      case "milf":
      case "aesthetic":
      case "cosplay":
      case "naruto":
      case "wibu":
      case "aeshtetic":
      case "wallpaperanime":
      sendButton(from, `Random Image By Hanif`, `press the button below`, [
          {
            buttonId: `/pinterest ${command}`,
            buttonText: {
              displayText: `${command}`,
            },
            type: 1,
          },
        ]);
        break
   case "darkjokes":
  case "darkjoke":
   bapakao = body.slice(9)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/darkmeme?apikey=hardianto`)
   break
   
//━━━━━━━━━━━━━━━[ FITUR ISLAMIC ]━━━━━━━━━━━━━━━━━//

case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${zerokey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break
case 'alquranaudio':
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${zerokey}`)
await zeroyt7.sendMessage(from, ini_buffer, audio, { quoted: ftrol, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR DOWNLOADER ]━━━━━━━━━━━━━━━━━//

case 'play':
gambar = fs.readFileSync('./zeroyt7/zero.jpg')
teks =
`Silahkan Pilih Media Yg Ingin Download`
but = [
          { buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: '☰ MUSIC' }, type: 1 },
          { buttonId: `${prefix}playmp4 ${q}`, buttonText: { displayText: '☰ VIDEO' }, type: 1 }
        ]
        sendButLocation(from, teks, faketeks, gambar, but)
break
case 'playmp3':
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${zerokey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${zerokey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol})
})
})
break
case "playvideo":
if (args.length === 0)
return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'tiktok':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${zerokey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await zeroyt7.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Done...!!!'})
break
case 'tiktokmusic':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${zerokey}&url=${ini_link}`)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol})
break
case 'pinterest':
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${zerokey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Done...!!!'})
break
case 'instagram':
case 'ig':
case 'igdl': 
if (!q) return reply(`Example: ${prefix}igdl link ig`)
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('Hmm..')
reply(mess.wait)
anu = await igDownloader (q)
sendMediaURL(from,`${anu.result.link}`,'nih kak')
break
case 'fbdl':
case 'facebook': 
if (!q) return reply(`Example: ${prefix}fbdl link fb`)
reply(mess.wait)
fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${zerokey}&url=${args[0]}`).then( res => {
zeroyt7.sendMessage(from, {url: res.result}, video, {quoted: ftrol})
})
break

//━━━━━━━━━━━━━━━[ FITUR ASUPAN ]━━━━━━━━━━━━━━━━━//

case 'asupan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Done...!!!', thumbnail: Buffer.alloc(0)})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Done...!!!', thumbnail: Buffer.alloc(0)})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Done...!!!', thumbnail: Buffer.alloc(0)})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Done...!!!', thumbnail: Buffer.alloc(0)})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Done...!!!', thumbnail: Buffer.alloc(0)})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Done...!!!', thumbnail: Buffer.alloc(0)})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Done...!!!', thumbnail: Buffer.alloc(0)})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Done...!!!', thumbnail: Buffer.alloc(0)})
break

//━━━━━━━━━━━━━━━[ FITUR UPSW ]━━━━━━━━━━━━━━━━━//

case 'upswteks':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
zeroyt7.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break
case 'upswsticker':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
zeroyt7.sendMessage('status@broadcast', buff, sticker)
}
reply(`Sukses upload sticker`)
break
case 'upswaudio':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
zeroyt7.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
}
reply(`Sukses upload audio`)
break
case 'upswvideo':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var konti = body.slice(11)
reply(mess.wait)
var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var mediap = await zeroyt7.downloadAndSaveMediaMessage(enmediap)
const buffer3 = fs.readFileSync(mediap)
zeroyt7.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
reply(`Sukses upload video:\n${konti}`)
break
case 'upswimage':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var teksyy = body.slice(11)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(enmedia)
buffer = fs.readFileSync(media)
zeroyt7.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
reply(`Sukses upload image:\n${teksyy}`)
break

//━━━━━━━━━━━━━━━[ FITUR INFORMATION ]━━━━━━━━━━━━━━━━━//

case 'kbbi':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${zerokey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${zerokey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'translate':
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${zerokey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'jadwaltv':
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} SCTV`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'infogempa':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await zeroyt7.sendMessage(from, get_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'cuaca':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await zeroyt7.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(ini_txt)
break
case 'covidindo':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'stalkig':
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${zerokey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
zeroyt7.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
zeroyt7.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Zero-YT7`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${zerokey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
zeroyt7.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR HENTAI ]━━━━━━━━━━━━━━━━━//

case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'hentai':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'hentai4everyone':
await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Hanif Botz〽️'})
})
break
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return zeroyt7.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
