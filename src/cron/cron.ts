import axios from 'axios';
import {
  telegramChatId,
  telegramToken,
  teslaProductId,
} from 'config/environment';
import { CronJob } from 'cron';
import * as qs from 'querystring';

const token = telegramToken;
const chat_id = telegramChatId;
const randomNumberZeroToFiftyNine = Math.floor(Math.random() * 60);

new CronJob(
  `${randomNumberZeroToFiftyNine} * * * * *`,
  async function () {
    const data = await axios({
      method: 'POST',
      url: 'https://shop.tesla.com/ko_kr/inventory.json',
      data: [teslaProductId], // combo
    });
    console.log(new Date().toLocaleString());
    console.log('purchasable', data.data[0].purchasable);
    if (data.data[0].purchasable) {
      await axios({
        method: 'GET',
        url: `https://api.telegram.org/bot${token}/sendmessage?${qs.stringify({
          chat_id,
          text: 'Tesla Shop Item Buy Now!',
        })}`,
      });
    }
  },
  null,
  true,
);
