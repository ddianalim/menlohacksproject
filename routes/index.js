var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Perfectly Positive' });
});

module.exports = router;

router.get('/days/new', (req, res) => {
  res.render('days/new');
});

router.post('/days', (req, res) => {
  const day = new Day(req.body);

  review.save(function(err, day) {
    if (err) {
      console.log(err);
    }

    return res.redirect('/days/' + day._id);
  });
});
