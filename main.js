const dotenv = require('dotenv');
const fs = require('fs');
const message = require('./message');

dotenv.config();

const name = process.env.NAME;
const number = process.env.NUMBER;

const resultMessage = message.create(name, number);

fs.writeFileSync('result.txt', resultMessage);

console.log('処理が完了しました。')