import * as dotenv from 'dotenv';

dotenv.config();

interface IEnv {
  [key: string]: string;
}

const {
  TELEGRAM_TOKEN,
  TELEGRAM_CHAT_ID,
  TESLA_PRODUCT_ID,
} = process.env as IEnv;

export const telegramToken = TELEGRAM_TOKEN.toString();
export const telegramChatId = Number(TELEGRAM_CHAT_ID);
export const teslaProductId = TESLA_PRODUCT_ID.toString();
