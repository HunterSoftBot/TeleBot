const plugin = {
  commands: ['/start'],
  tags: ['main'],
  init: (bot, { buttonUrl }) => {
    bot.onText(/^\/start$/, (msg) => {
      const From = msg.chat.id;
      const user = msg.from;
      const caption = `Haii ${user.first_name}! Selamat datang di Anya HSB. Bot ketiga dari Hunter Soft Bot. bot pertama dan kedua ada di whatsapp. kunjungi website kami huntersoftbot.biz.id

jika ada kendala silakan type /creator untuk menghubungi pemilik bot.`;
      const replyMarkup = {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Script Bot', url: buttonUrl }],
          ],
        },
      };
      bot.sendMessage(From, caption, { reply_to_message_id: msg.message_id, ...replyMarkup });
    });
  }
};

module.exports = plugin;
