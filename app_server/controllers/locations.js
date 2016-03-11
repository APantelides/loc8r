/* Get home page */
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { 
    title: 'Loc8er - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8er',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake, or a pint? Let Loc8r help you find the place you are looking for.",
    locations: [{
      name: 'Starbucks',
      address: '1901 J Street, Sacramento, CA 95814',
      rating: '3',
      facilities:['Hot Beverages','Food & Dessert','Average wifi'],
      distance: '0.5 mi'
    },{
      name: 'The Mill',
      address: '1827 I Street, Sacramento, CA 95811',
      rating: '5',
      facilities:['Hot Beverages','Dessert','Premium wifi'],
      distance: '0.6 mi'
    },{
      name: 'Temple Coffee Roasters',
      address: '2829 S Street, Sacramento, CA 95816',
      rating: '4',
      facilities:['Hot Beverages','Food & Dessert','Premium wifi'],
      distance: '0.9 mi'
    }]                   
  });
};

/* Get location page */
module.exports.locationInfo = function(req, res, next) {
  res.render('location-info', { 
    title: 'Starbucks',
    pageHeader: {title: 'Starbucks'},
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: "If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you."
    },
    location: {
      name: 'Starbucks',
      address: '1901 J Street, Sacramento, CA 95814',
      rating: '3',
      facilities:['Hot Beverages','Food & Dessert','Average wifi'],
      coords: {lat:38.577404, lng:-121.480823},
      openingTimes: [{
        days: "Monday - Saturday",
        opening: '5:00 AM',
        closing: '9:00 PM',
        closed: false
      },{
        days: 'Sunday',
        opening: '6:00 AM',
        closing: '7:00 PM',
        closed: false
      }],
      review: [{
        author: 'Teste Clees',
        rating: 4,
        timestamp: "10 March 2016",
        reviewText: "What a fantastic place. I can't say enough good things about it!"
      },{
        author: 'Albert',
        rating: 2,
        timestamp: "10 March 2016",
        reviewText: "Meh."
      }]
    }
  });
};

/* Get review page */
module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { 
    title: 'Review Starbucks on Loc8r',
    pageHeader: {title: 'Review Starbucks'}
  });
};