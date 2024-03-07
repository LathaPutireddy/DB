
db.createCollection('trips')
db.trips.countDocuments();
/* output: 0*/

//for counting trip duration more than 12o and subsriber
db.trips.countDocuments({tripduration: {$gt: 120}, usertype: "Subscriber"})
/* output: 0 */

//ascending order
db.listingsAndReviews.find({bed_type: "Real Bed"}).sort({name: 1});

//descending order
db.listingsAndReviews.find({bed_type: "Real Bed"}).sort({name: -1});

//to simplify for understanding, we can use projections
db.listingsAndReviews.find({bed_type: "Real Bed"}, {name: 1}).sort({name: 1});
db.listingsAndReviews.find({bed_type: "Real Bed"}, {name: -1}).sort({name: -1});

//limiting results to n
db.listingsAndReviews
  .find({bed_type: "Real Bed"}, {property_type: "Apartment"})
  .sort({name: -1})
  .limit(3);
