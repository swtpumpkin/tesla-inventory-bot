import * as dotenv from 'dotenv';

dotenv.config();

interface IEnv {
  [key: string]: string;
}

const {
  TELEGRAM_TOKEN,
  TELEGRAM_CHAT_ID,
  TESLA_PRODUCT_ID,
  TESLA_PRODUCT_NAME,
} = process.env as IEnv;

export const telegramToken = TELEGRAM_TOKEN.toString();
export const telegramChatId = Number(TELEGRAM_CHAT_ID);
export const teslaProductId = TESLA_PRODUCT_ID.toString();
export const teslaProductName = TESLA_PRODUCT_NAME.toString();
