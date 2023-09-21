const express = require('express');
const router = express.Router();


// Home Route
router.get('/', (req, res) => {
  const title = 'my_contact';
  res.render('my_contact', {
    title,
  });
});

module.exports = router;
