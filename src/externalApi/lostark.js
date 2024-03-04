const axios = require('axios');

const { ERROR_CODE, createAppError } = require('../libs/appErrorMaker');

const loaInst = axios.create({
  baseURL: 'https://developer-lostark.game.onstove.com',
  timeout: 5000,
  headers: {
    'authorization': `bearer ${process.env.LOSTARK_API_KEY}`,
    'accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

class LostarkAPI {
  async getCharacterInfo(characterName) {
    try {
      const resData = await loaInst.get(`/armories/characters/${characterName}`);
      return resData.data;

    } catch (error) {
      console.log('lostark - getCharacterInfo', error);
      throw createAppError(ERROR_CODE.internalServerError, 'lostark api error');
    }
  }
}

module.exports = new LostarkAPI();