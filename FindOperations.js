//Find&Modify
db.create.Collection('podcasts')
db.podcasts.findAndModify({
  query: {_id: ObjectId("65c2a217dd77e720d30e243f")},
  update: {$inc: {downloads: 1}},
  new: true,
});
/*output :null*/


//ForFind&Modify
db.podcasts.insertOne({
  title: "The Atlas Podcast",
  platforms: ["Apple Podcasts", "Spotify"],
  downloads: 6012,
});
/*Output:{
  acknowledged: true,
  insertedId: ObjectId('65c53ef4f61bf4a142e88948')
}*/


