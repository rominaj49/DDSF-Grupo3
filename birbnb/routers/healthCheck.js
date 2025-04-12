
const express = require('express');
const router = express.Router();

router.get('/healthCheck', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Birbnb activo' });
});

module.exports = router;
