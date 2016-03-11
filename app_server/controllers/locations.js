/* Get home page */
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { title: 'Home' })};

/* Get location page */
module.exports.locationInfo = function(req, res, next) {
  res.render('location-info', { title: 'Location information' })};

/* Get review page */
module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { title: 'Add review' })};