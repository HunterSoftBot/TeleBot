const fetch = require('node-fetch');

const plugin = {
  commands: ['/meme', '/memeindo'],
  tags: ['internet'],
  init: async (bot, { buttonUrl, mess, api, apikey }) => {
    bot.onText(/^\/fbdl(?: (.+))?$/, async (msg, match) => {
      const chatId = msg.chat.id;
      try {
        const get = await fetch(api + '/api/random/meme?apikey=' + apikey);
        const js = await get.json();
        const meme = api + '/api/random/meme?apikey=' + apikey
        
        bot.sendPhoto(chatId, meme, { reply_to_message_id: msg.message_id });
      } catch (error) {
        console.error('Error:', error);
        bot.sendMessage(chatId, 'An error occurred while processing your request.', { reply_to_message_id: msg.message_id });
      }
    });
  },
};

module.exports = plugin;