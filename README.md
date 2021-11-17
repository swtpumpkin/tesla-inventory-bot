## Usage

### Set Dot Env

Create dot env file on project root path.

```sh
# dotenv
TELEGRAM_TOKEN= # Telegram bot token
TELEGRAM_CHAT_ID= # Telegram chat id
TESLA_PRODUCT_ID= # Inventory item id
```

### docker build

```sh
docker build -t tesla-inventory-bot .
```

### docker run

```sh
docker run -d --env-file .env --name teslaCombo --restart=always tesla-inventory-bot
```
