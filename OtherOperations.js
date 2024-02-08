//set.js
//to find
db.createCollection('podcasts')
db.podcasts.findOne({title: "The MongoDB Podcast"});
db.podcasts.findOne({_id: ObjectId("6261a92dfee1ff300dc80bf1")});
/*output:{
  _id: ObjectId('6261a92dfee1ff300dc80bf1'),
  title: 'The MongoDB Podcast',
  platforms: [
    'Apple Podcasts',
    'Spotify'
  ],
  year: 2022,
  hosts: [],
  premium_subs: 4152,
  downloads: 2,
  podcast_type: 'audio'
}*/


//to set array
db.podcasts.updateOne({_id: ObjectId("6261a92dfee1ff300dc80bf1")},{$set:{subscribers:98562}})
/*output:{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}*/

//push.js
db.podcasts.updateOne(
  {_id: ObjectId("6261a92dfee1ff300dc80bf1")},
  {$push: {hosts: "Nic Raboy"}}
);
/*output:{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}*/
//confirm
db.podcasts.findOne({title: "The Developer Hub"});
/*output: null*/

//replaceone()
db.createCollection('books')
db.books.replaceOne(
  {_id: ObjectId("65c292b7dd77e720d30e243e")},
  {
    _id: ObjectId("65c292b7dd77e720d30e243e"),
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-4",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
);

db.books.replaceOne(
  {_id: ObjectId("65c292b7dd77e720d30e243e")},
  {
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-6",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
);
/*output :{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}*/

