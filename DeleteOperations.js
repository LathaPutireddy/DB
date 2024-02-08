//delete
db.createCollection('birds')
db.birds.deleteOne({_id: ObjectId("65c2ae34dd77e720d30e2440")});
/*output:{
  acknowledged: true,
  deletedCount: 0
}*/

//deleteMany()
db.birds.deleteMany({conservationStatus:"Least Concern"})
/*output:{
  acknowledged: true,
  deletedCount: 0
}*/

//for finding many birds
db.birds.find({conservationStatus:"Least Concern"})
