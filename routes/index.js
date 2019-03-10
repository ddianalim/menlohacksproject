var express = require('express');
var router = express.Router();

const Day = require('../models/day');

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

  day.save(function(err, day) {
    if (err) {
      console.log(err);
    }
    return res.redirect('/days/' + day._id);
  });
});

router.get('/days/:id', (req, res) => {
  Day.findById(req.params.id, (err, day) => {
    if (err) {
      console.log(err);
    }
    res.render('days/show', {
      day: day
    });
  });
});

module.exports = router;
