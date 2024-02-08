//insertone()
db.createCollection('books')
db.books.insertOne({
  title: "Deep Dive into React Hooks",
  ISBN: "000000000",
  thumbnailUrl: "",
  publicationDate: ISODate("2019-01-01T00:00:00.000Z"),
  authors: ["Ada Lovelace"],
});
/*output:{
  acknowledged: true,
  insertedId: ObjectId('65c53256f61bf4a142e88944')
}*/

//insertmany()
db.createCollection('Devices')
{ ok: 1 }
db.Devices.insertMany([
  {
    item: 'journal',
    qty: 25,
    tags: ['blank', 'red'],
    size: { h: 14, w: 21, uom: 'cm' }
  },
  {
    item: 'mat',
    qty: 85,
    tags: ['gray'],
    size: { h: 27.9, w: 35.5, uom: 'cm' }
  },
  {
    item: 'mousepad',
    qty: 25,
    tags: ['gel', 'blue'],
    size: { h: 19, w: 22.85, uom: 'cm' }
  }
]);
/*output:{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65c53337f61bf4a142e88945'),
    '1': ObjectId('65c53337f61bf4a142e88946'),
    '2': ObjectId('65c53337f61bf4a142e88947')
  }
}*/

//insertOnepodcast
db.createCollection('podcasts')
db.podcasts.insertOne({
  _id: ObjectId("6261a92dfee1ff300dc80bf1"),
  title: "The MongoDB Podcast",
  platforms: ["Apple Podcasts", "Spotify"],
  year: 2022,
  hosts: [],
  premium_subs: 4152,
  downloads: 2,
  podcast_type: "audio",
});
/*output:{
  acknowledged: true,
  insertedId: ObjectId('6261a92dfee1ff300dc80bf1')
}*/
//find
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

//InsertOneUsingCRUD.py

