const express = require('express');
const router = express.Router();


// Home Route
router.get('/', (req, res) => {
  const title = 'portfolio';
  res.render('services/services', {
    title,
  });
});

module.exports = router;
