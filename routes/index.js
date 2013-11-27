var moment = require('moment');

/*
 * GET home page.
 */

exports.index = function(req, res){
  var now = moment().format('MMM Do YY, h:mm:ss a');
  res.render('index', { title: 'Test - page', date: now });
};
