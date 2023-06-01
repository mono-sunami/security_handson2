const express = require('express');
const router = express.Router();

const allow = 'http://localhost:3000';

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // ハンズオン③
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', 'X-Token');
  }
  return res.json({ message: '成功' });
});

router.get('/', (req, res) => {
  res.setHeader('X-Timestamp', Date.now());
  let message = req.query.message;
  const lang = req.headers['x-lang'];

  if (message === '') {
    res.status(400);
    if (lang === 'en') {
      message = 'message is empty.';
    } else {
      message = 'messageの値が空です。';
    }
  }
  res.send({ message });
});

router.use(express.json());

router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

module.exports = router;
