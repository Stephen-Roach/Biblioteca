const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('also trying to login!');
  res.json({
    data: 'Trying to log in',
  });
});

module.exports = router;
