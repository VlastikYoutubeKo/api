const express = require("express");
const app = express();
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const dec = text => entities.decode(text);
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/home-page.html");
});

app.get("/random-emoji", (request, response) => {
  const emojis = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 🥰 😘 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 🥵 😞 😟 🥶 🥴 😤 😢 😭 😦 😧 🥳 😨 😩 🤯 😬 😰 😱 😳 🤪 😵 😡 🥺 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤥 🤫 🤭 🧐 🤓 😈 👿 🤡 👹 👺 💀 ☠️ 👻 👽 👾 🤖 💩 🙊 💋 💘 💝 💖 💗 💓 💞 💕 💌 ❣️ 💔 ❤️ 🧡 💛 💚 💙 💜 🖤 💟 💍 💎 💐 💒 👶 🧒 👦 👧 🧑 👨 👱‍♂️ 🧔 👩 👱‍♀️ 🧓 👴 👵 👶 🧒 👦 👧 🧑 👨 👱‍♂️ 🧔 👩 👱‍♀️ 🧓 👴 👵 👨‍⚕️ 👩‍⚕️ 👨‍🎓 👩‍🎓 👨‍🏫 👩‍🏫 👨‍⚖️ 👩‍⚖️ 👨‍🌾 👩‍🌾 👨‍🍳 👩‍🍳 👨‍🔧 👩‍🔧 👨‍🏭 👩‍🏭 👨‍💼 👩‍💼 👨‍🔬 👩‍🔬 👨‍💻 👩‍💻 👨‍🎤 👩‍🎤 👨‍🎨 👩‍🎨 👨‍✈️ 👩‍✈️ 👨‍🚀 👩‍🚀 👨‍🚒 👩‍🚒 👮‍♂️ 👮‍♀️ 🕵️‍♂️ 🕵️‍♀️ 💂‍♂️ 💂‍♀️ 👷‍♂️ 👷‍♀️ 🤴 👸 👳‍♂️ 👳‍♀️ 👲 🧕 🤵 👰 🤰 🤱 👼 🎅 🤶 🧙‍♂️ 🧙‍♀️ 🧚‍♂️ 🧚‍♀️ 👨‍🦰 🧛‍♂️ 🧛‍♀️ 👨‍🦱 👨‍🦳 👨‍🦲 🧜‍♂️ 🧜‍♀️ 🧝‍♂️ 👩‍🦰 👩‍🦱 🧝‍♀️ 👩‍🦳 🧞‍♂️ 👩‍🦲 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 🙍‍♂️ 🙍‍♀️ 🙎‍♂️ 🙎‍♀️ 🙅‍♂️ 🙅‍♀️ 🙆‍♂️ 🙆‍♀️ 💁‍♂️ 💁‍♀️ 🙋‍♂️ 🙋‍♀️ 🙇‍♂️ 🙇‍♀️ 🤦 🤦‍♂️ 🤦‍♀️ 🤷 🤷‍♂️ 🤷‍♀️ 💆‍♂️ 💆‍♀️ 💇‍♂️ 💇‍♀️ 👤 👥 🦸‍♂️ 🦸‍♀️ 🦹‍♂️ 🦹‍♀️ 👫 👬 👭 👩‍❤️‍💋‍👨 👨‍❤️‍💋‍👨 👩‍❤️‍💋‍👩 👩‍❤️‍👨 👨‍❤️‍👨 👩‍❤️‍👩 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍ 🦵 🦶 🤳 💪 👈 👉 ☝️ 👆 🖕 👇 ✌️ 🤞 🖖 🤘 🤙 🖐️ ✋ 👌 👍 👎 ✊ 👊 🤛 🤜 🤚 👋 🤟 ✍️ 👏 👐 🙌 🤲 🙏 🤝 👂 👃 👀 👁️ 🧠 👅 👄 🚶‍♂️ 🚶‍♀️ 🏃‍♂️ 🏃‍♀️ 💃 🕺 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖‍♀️ 🧗‍♂️ 🧗‍♀️ 🧘‍♂️ 🧘‍♀️ 🛌 🕴️ 🗣️ 🤺 🏇 ⛷️ 🏂 🏌️‍♂️ 🏌️‍♀️ 🏄‍♂️ 🏄‍♀️ 🚣‍♂️ 🚣‍♀️ 🏊‍♂️ 🏊‍♀️ ⛹️‍♂️ ⛹️‍♀️ 🏋️‍♂️ 🏋️‍♀️ 🚴‍♂️ 🚴‍♀️ 🚵‍♂️ 🚵‍♀️ 🏎️ 🏍️ 🤸 🤸‍♂️ 🤸‍♀️ 🤼 🤼‍♂️ 🤼‍♀️ 🤽 🤽‍♂️ 🤽‍♀️ 🤾 🤾‍♂️ 🤾‍♀️ 🤹 🤹‍♂️ 🤹‍♀️ 🎖️ 🏆 🏅 🥇 🥈 🥉 ⚽ ⚾ 🏀 🏐 🏈 🏉 🎾 🎳 🏏 🏑 🥎 🏒 🏓 🏸 🥊 🥋 🥏 🥅 ⛸️ 🎣 🥍 🎿 🛷 🥌 🎯 🎱 🧿 🧩 🧸 🧵 🧶📢 📣 📯 🔔 🎼 🎵 🎶 🎙️ 🎚️ 🎛️ 🎧 📻 🎷 🎸 🎹 🎺 🎻 🥁 💽 💿 📀 🎥 🎞️ 📽️ 🎬 📺 📷 📸 📹 📼 🥭 🍇 🍈 🍉 🍊 🍋 🍌 🍍 🍎 🍏 🍐 🍑 🍒 🥬 🍓 🥝 🍅 🥥 🥑 🍆 🥔 🥕 🌽 🌶️ 🥯 🥒 🥦 🥜 🌰 🍞 🥐 🥖 🥨 🥞 🧀 🍖 🍗 🥩 🥓 🍔 🍟 🍕 🌭 🥪 🌮 🌯 🥙 🥚 🧂 🍳 🥘 🍲 🥣 🥗 🍿 🥫 🍱 🍘 🍙 🍚 🍛 🍜 🥮 🍝 🍠 🍢 🍣 🍤 🍥 🍡 🥟 🥠 🥡 🍦 🍧 🍨 🍩 🍪 🧁 🎂 🍰 🥧 🍫 🍬 🍭 🍮 🍯 🍼 🥛 ☕ 🍵 🍶 🍾 🍷 🍸 🍹 🍺 🍻 🥂 🥃 🥤 🥢 🍽️ 🍴 🥄 🏺 😺 😸 😹 😻 😼 😽 🙀 😿 😾 🙈 🙉 🦝 🐵 🐒 🦍 🐶 🐕 🐩 🐺 🦊 🐱 🐈 🦁 🐯 🐅 🐆 🐴 🐎 🦄 🦓 🦌 🐮 🦙 🐂 🐃 🐄 🐷 🦛 🐖 🐗 🐽 🐏 🐑 🐐 🐪 🐫 🦒 🐘 🦏 🐭 🐁 🐀 🦘 🐹 🦡 🐰 🐇 🐿️ 🦔 🦇 🐻 🐨 🐼 🐾 🦃 🐔 🦢 🐓 🐣 🐤 🦚 🐥 🐦 🦜 🐧 🕊️ 🦅 🦆 🦉 🐸 🐊 🐢 🦎 🐍 🐲 🐉 🦕 🦖 🐳 🐋 🐬 🐟 🐠 🐡 🦈 🐙 🐚 🦀 🦟 🦐 🦑 🦠 🐌 🦋 🐛 🐜 🐝 🐞 🦗 🕷️ 🕸️ 🦂 🦞 🌸 💮 🏵️ 🌹 🥀 🌺 🌻 🌼 🌷 🌱 🌲 🌳 🌴 🌵 🌾 🌿 ☘️ 🍀 🍁 🍂 🍃 🍄 ⌛ ⏳ ⚡ 🎆 🎇 🔇 🔈 🔉 🔊 🔕 🔒 🔓 🔏 🔐 🚮 🚰 ♿ 🚹 🚺 🚻 🚼 🚾 🛂 🛃 🛄 🛅 ⚠️ 🚸 ⛔ 🚫 🚳 🚭 🚯 🚱 🚷 📵 🔞 ⏭️ ⏯️ ⏮️ ⏸️ ⏹️ ⏺️ ⏏️ 🎦 🔅 🔆 📶 📳 📴 🔱 ℹ️ Ⓜ️ 🅿️ 🧭 ⬆️ ↗️ ➡️ ↘️ ⬇️ ↙️ ⬅️ ↖️ ↕️ ↔️ ↩️ ↪️ ⤴️ ⤵️ 🔃 🔄 🔀 🔁 🔂 ▶️ ⏩ ◀️ ⏪ 🔼 ⏫ 🔽 ⏬ 🦷 🦴 🛀 👣 💣 🔪 🧱 🛢️ ⛽ 🛹 🚥 🚦 🚧 🛎️ 🧳 ⛱️ 🔥 🧨 🎗️ 🎟️ 🎫 🧧 🔮 🎲 🎴 🎭 🖼️ 🎨 🎤 🔍 🔎 🕯️ 💡 🔦 🏮 📜 🧮 🔑 🗝️ 🔨 ⛏️ ⚒️ 🛠️ 🗡️ ⚔️ 🔫 🏹 🛡️ 🔧 🔩 ⚙️ 🗜️ ⚖️ ⛓️ ⚗️ 🔬 🔭 📡 💉 💊 🚪 🛏️ 🛋️ 🚽 🚿 🛁 🛒 🚬 ⚰️ ⚱️ 🧰 🧲 🧪 🧴 🧷 🧹 🧻 🧼 🧽 🧯 💠 ♟️ 💺 🎮 🕹️ 🎰 📱 📲 ☎️ 📞 📟 📠 💻 🖥️ 🖨️ ⌨️ 🖱️ 🖲️ 💾 📔 📕 📖 📗 📘 📙 📚 📓 📒 📃 📄 📰 🗞️ 📑 🔖 🏷️ 💰 💴 💵 💶 💷 💸 💳 💹 💱 ✉️ 📧 📨 📩 📤 📥 📦 📫 📪 📬 📭 📮 🗳️ ✏️ ✒️ 🖋️ 🖊️ 🖌️ 🖍️ 📝 💼 📁 📂 🗂️ 📅 📆 🗒️ 🗓️ 📇 📈 📉 📊 📋 📌 📍 📎 🖇️ 📏 📐 ✂️ 🗃️ 🗄️ 🗑️ 🧾 💅 👓 🕶️ 👔 👕 👖 🧣 🧤 🧥 🧦 👗 👘 👙 👚 👛 👜 👝 🛍️ 🎒 👞 👟 👠 👡 👢 👑 👒 🎩 🎓 🧢 ⛑️ 📿 💄 🌂 ☂️ 🎽 🥽 🥼 🥾 🥿 🧺 🚂 🚃 🚄 🚅 🚆 🚇 🚈 🚉 🚊 🚝 🚞 🚋 🚌 🚍 🚎 🚐 🚑 🚒 🚓 🚔 🚕 🚖 🚗 🚘 🚙 🚚 🚛 🚜 🚲 🛴 🛵 🚏 🛣️ 🛤️ ⛵ 🛶 🚤 🛳️ ⛴️ 🛥️ 🚢 ✈️ 🛩️ 🛫 🛬 🚁 🚟 🚠 🚡 🛰️ 🚀 🛸 🌍 🌎 🌏 🌐 🗺️ 🗾 🏔️ ⛰️ 🗻 🏕️ 🏖️ 🏜️ 🏝️ 🏞️ 🏟️ 🏛️ 🏗️ 🏘️ 🏚️ 🏠 🏡 🏢 🏣 🏤 🏥 🏦 🏨 🏩 🏪 🏫 🏬 🏭 🏯 🏰 🗼 🗽 ⛪ 🕌 🕍 ⛩️ 🕋 ⛲ ⛺ 🏙️ 🎠 🎡 🎢 🎪 ⛳ 🗿 💦 🌋 🌁 🌃 🌄 🌅 🌆 🌇 🌉 🌌 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌙 🌚 🌛 🌜 🌡️ ☀️ 🌝 🌞 🌟 🌠 ☁️ ⛅ ⛈️ 🌤️ 🌥️ 🌦️ 🌧️ 🌨️ 🌩️ 🌪️ 🌫️ 🌬️ 🌀 🌈 ☔ ❄️ ☃️ ⛄ ☄️ 💧 🌊 🎑 ⌚ ⏰ ⏱️ ⏲️ 🕰️ 🕛 🕧 🕐 🕜 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 🕙 🕥 🕚 🕦 🏧 🔙 🔚 🔛 🔜 🔝 🔰 ‼️ ⁉️ ❓ ❔ ❕ ❗ ™️ #️⃣ *️⃣ 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 💯 🔠 🔡 🔢 🔣 🔤 🅰️ 🆎 🅱️ 🆑 🆒 🆓 🆔 🆕 🆖 🅾️ 🆗 🆘 🆙 🆚 🈁 🈂️ 🈷️ 🈶 🈯 🉐 🈹 🈚 🈲 🉑 🈸 🈴 🈳 ㊗️ ㊙️ 🈺 🈵 🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿 💢 ♨️ 💈 ⚓ ♠️ ♥️ ♦️ ♣️ 💲 ☢️ ☣️ 🛐 ⚛️ 🕉️ ✡️ ☸️ ☯️ ✝️ ☦️ ☪️ ☮️ 🕎 🔯 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ ♀️ ♂️ ⚕️ ♻️ ⚜️ ©️ ®️ ♾️ 👁️‍🗨️ 💤 💥 💨 💫 💬 🗨️ 🗯️ 💭 🕳️ 🚨 🛑 ⭐ 🎃 🎄 ✨ 🎈 🎉 🎊 🎋 🎍 🎎 🎏 🎐 🎀 🎁 🃏 🀄 🔋 🔌 🔗 🧫 🧬 📛 ⭕ ✅ ☑️ ✔️ ✖️ ❌ ❎ ➕ ➖ ➗ ➰ ➿ 〽️ ✳️ ✴️ ❇️ 〰️ 🔴 🔵 ⚪ ⚫ ⬜ ⬛ ◼️ ◻️ ◽ ◾ ▫️ ▪️ 🔶 🔷 🔸 🔹 🔺 🔻 🔘 🔲 🔳 🏻 🏼 🏽 🏾 🏿 🏁 🚩 🎌 🏴 🏳️ 🏳️‍🌈 🇦🇨 🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇮 🇦🇱 🇦🇲 🇦🇴 🇦🇶 🇦🇷 🇦🇸 🇦🇹 🇦🇺 🇦🇼 🇦🇽 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇱 🇧🇲 🇧🇳 🇧🇴 🇧🇶 🇧🇷 🇧🇸 🇧🇹 🇧🇻 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇨 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇰 🇨🇱 🇨🇲 🇨🇳 🇨🇴 🇨🇵 🇨🇷 🇨🇺 🇨🇻 🇨🇼 🇨🇽 🇨🇾 🇨🇿 🇩🇪 🇩🇬 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇦 🇪🇨 🇪🇪 🇪🇬 🇪🇭 🇪🇷 🇪🇸 🇪🇹 🇪🇺 🇫🇮 🏴‍☠️ 🇫🇯 🇫🇰 🇫🇲 🇫🇴 🇫🇷 🇬🇦 🇬🇧 🇬🇩 🇬🇪 🇬🇫 🇬🇬 🇬🇭 🇬🇮 🇬🇱 🇬🇲 🇬🇳 🇬🇵 🇬🇶 🇬🇷 🇬🇸 🇬🇹 🇬🇺 🇬🇼 🇬🇾 🇭🇰 🇭🇲 🇭🇳 🇭🇷 🇭🇹 🇭🇺 🇮🇨 🇮🇩 🇮🇪 🇮🇱 🇮🇲 🇮🇳 🇮🇴 🇮🇶 🇮🇷 🇮🇸 🇮🇹 🇯🇪 🇯🇲 🇯🇴 🇯🇵 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇷 🇰🇼 🇰🇾 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇫 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇴 🇲🇵 🇲🇶 🇲🇷 🇲🇸 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇨 🇳🇪 🇳🇫 🇳🇬 🇳🇮 🇳🇱 🇳🇴 🇳🇵 🇳🇷 🇳🇺 🇳🇿 🇴🇲 🇵🇦 🇵🇪 🇵🇫 🇵🇬 🇵🇭 🇵🇰 🇵🇱 🇵🇲 🇵🇳 🇵🇷 🇵🇸 🇵🇹 🇵🇼 🇵🇾 🇶🇦 🇷🇪 🇷🇴 🇷🇸 🇷🇺 🇷🇼 🇸🇦 🇸🇧 🇸🇨 🇸🇩 🇸🇪 🇸🇬 🇸🇭 🇸🇮 🇸🇯 🇸🇰 🇸🇱 🇸🇲 🇸🇳 🇸🇴 🇸🇷 🇸🇸 🇸🇹 🇸🇻 🇸🇽 🇸🇾 🇸🇿 🇹🇦 🇹🇨 🇹🇩 🇹🇫 🇹🇬 🇹🇭 🇹🇯 🇹🇰 🇹🇱 🇹🇲 🇹🇳 🇹🇴 🇹🇷 🇹🇹 🇹🇻 🇹🇼 🇹🇿 🇺🇦 🇺🇬 🇺🇲 🇺🇳 🇺🇸 🇺🇾 🇺🇿 🇻🇦 🇻🇨 🇻🇪 🇻🇬 🇻🇮 🇻🇳 🇻🇺 🇼🇫 🇼🇸 🇽🇰 🇾🇪 🇾🇹 🇿🇦 🇿🇲 🇿🇼 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿".split(
    " "
  );
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const emojiJson = { emoji: emoji };

  response.json(emojiJson);
});

app.get("/yt-search", (request, response) => {
  (async() => {

 
  const search = request.query.search;
  if (!search) {
    return response.json({"message": "you gotta give me something to search"})
  }
  	  const yt = require('yt-search')
   
    const searching = await yt(search)
    const song = searching.videos[0]
    if (!song) {
      return response.json({"message": "no results found"})
    }
    response.json({"query": search, "title": song.title, "url": song.url, "thumbnail": song.thumbnail, "duration": song.timestamp, "uploaded": song.ago, "views": song.views, "uploader_name": song.author.name, "uploader_url": song.author.url})
     })()
})

app.get('/random-lenny', (request, response) => {
  const ears = require(__dirname + '/ears.json');
const eyes = require(__dirname + '/eyes.json');
const mouths = require(__dirname + '/mouths.json');
function ear() {
  const e = ears[Math.floor(Math.random() * ears.length)];
  if (e.length == 1) {
  
   console.log(new Array(2).fill(e[0]));
   return new Array(2).fill(e[0]);
  } else {
   console.log(e);
   return e;
  }
  
}
function mouth() {
  return mouths[Math.floor(Math.random() * mouths.length)].shift()
}

function eye() {
  const e = eyes[Math.floor(Math.random() * eyes.length)];
  if (e.length == 1) {
    return new Array(2).fill(e[0]);
  } else {
    return e;
  }
}

function lenny() {
  const theEyes = eye();
  const theEars = ear();
  const theMouth = mouth();
  const weird = ['|','/','!','-','I'][Math.floor(Math.random() * ['|','/','!','-','I'].length)];
  const result = ({
    lenny: `${theEars.shift()}${theEyes.shift()}${theMouth}${theEyes.pop()}${theEars.pop()}`.toString().replace(/undefined/g,weird)
  });
  return result;
}
response.json(lenny());
})

app.get('/twitter', (request, response) => {
  const twitterUserInfo = require('twitter-user-info');
  twitterUserInfo(request.query.username, function (res) {
    if (!res || !request.query.username) {
      return response.json({"message": "user not found"});
    }
    response.json(res);
  })
})

app.get('/google-search', (request, response) => {
  const requestt = require('request');
  const search = request.query.q;
  const give = msg => response.json(msg);
  if (!search) {
    return response.json({"message": "you gotta give me something to search"})
  }
   var options = {
        url: "https://google.com/search?q=" + search,
        method: "GET",
        headers: {"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36"},
        followRedirect: true
    };
     requestt(options, function(error, response, responseBody) {
     if (error) {
       return give({"message": "no results found"})
     }
     if (!responseBody.split('<h3 class="LC20lb DKV0Md"><span>')[1]) {
       return give({"message": "no results found"})
     }
     const title = dec(responseBody.split('<h3 class="LC20lb DKV0Md"><span>')[1].split('</span>')[0]);
     const link = dec(responseBody.split('<div class="yuRUbf"><a href="')[1].split('"')[0]);
     const description = dec(responseBody.split('<span class="aCOpRe"><span>')[1].split('</span></span>')[0].split('<em>').join('**').split('</em>').join('**'));
     const result = {
       title: title,
       link: link,
       description: description
     }
      give(result)
     })

})

app.get("/translate", (request, response) => {
  if (!request.query.text) {
    return response.json({"message": "you gotta give me something to translate :/"})
  }
  
  const translate = require("@vitalets/google-translate-api");

  translate(request.query.text, { to: "en" }).then(transed => {
    response.json({
      text: request.query.text,
      translated: transed.text,
      translated_from: transed.from.language.iso
    });
  });
});


app.get('/weather', (request, response) => {
  const place = request.query.place;
  const weather = require("weather-js")
weather.find({search: place, degreeType: 'C'}, function(err, result) {
    try {
     
   
    response.json({"location": result[0].location.name, "temperature": result[0].current.temperature + ' Celcius',"sky_text": result[0].skytext,"humidity": result[0].current.humidity,"wind_speed": result[0].current.windspeed,"observation_time": result[0].current.observationtime,"wind_display": result[0].current.winddisplay,"image_url": result[0].current.imageUrl})

    
    } catch(err) {
      response.json({"message": "no places found"})
    }
})})



app.get("/image-search", (request, response) => {
  const give = thing => response.json(thing);
 
    var search = request.query.query;
    if (!search) {
      return give({"message": "you gotta give me something to search :/"})
    }
    let requestt = require('request')
    let cheerio = require('cheerio')
    
    var options = {
        url: "http://api.scraperapi.com/?api_key=fd03e5675d682fdcb6e7e9ce36263ba1&url=http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    requestt(options, function(error, response, responseBody) {
        if (error) {
            
           return give({"query": search, "result": "No results "})
        }
 
        
 
        $ = cheerio.load(responseBody);
 
        
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        if (!urls.length) {
            
            return give({"query": search, "result": "No results "})
        }
      give({query: search, result: urls[Math.floor(Math.random() * urls.length)]});
      
    })
        
        
})

 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});