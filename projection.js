//to find restaurants
db.createCollection('restaurants')
db.restaurants.findOne({borough: "Brooklyn"});
/*output: null*/

//to project
db.restaurants.findOne({borough: "Brooklyn"}, {cuisine: 1, zipcode: 1});
/*output: null*/

//for neglecting id - exclusion
db.restaurants.findOne({borough: "Brooklyn"}, {cuisine: 0, zipcode: 0, _id: 0});
/*output: null*/


//exclusion
db.restaurants.findOne({borough: "Brooklyn"}, {cuisine: 1, zipcode: 1, _id: 0});
/*output: null*/


//switch to training_sample db to run these 
db.createCollection('inspections')
db.inspections.find(
    { sector: "Restaurant - 818" },
    { business_name: 1, result: 1, _id: 0 }
  )

db.inspections.find(
    { result: { $in: ["Pass", "Warning"] } },
    { date: 0, "address.zip": 0 }
)
