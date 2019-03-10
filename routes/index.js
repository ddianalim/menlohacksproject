var express = require('express');
var router = express.Router();

const Day = require('../models/day');

/* GET home page. */
router.get('/', (req, res) => {
  // 1
  Day.find().sort({ date: +1 }).exec(function(err, days) {
    if (err) {
      console.log(err);
    }

    res.render('days/index', {
      days: days
    });
  });
});

router.get('/breathe/', (req, res) => {
  res.render('breathe');
});

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
