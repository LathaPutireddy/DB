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

//Insertbird
db.createCollection('birds')
db.birds.insertMany([
  {
    name: "Bald Eagle",
    scientificName: "Haliaeetus leucocephalus",
    habitat: "Forests, lakes, rivers, coasts",
    diet: ["Fish", "Small mammals", "Waterfowl"],
    conservationStatus: "Least Concern",
    lifespan: 20, // in years
    wingspan: 6.6, // in feet
    imageUrl: "https://example.com/bald_eagle.jpg",
    description: "The bald eagle is a bird of prey found in North America...",
    relatedSpecies: ["Golden Eagle", "White-tailed Eagle"],
  },
  {
    name: "Mallard",
    scientificName: "Anas platyrhynchos",
    habitat: "Lakes, ponds, marshes",
    diet: ["Aquatic plants", "Insects", "Small fish"],
    conservationStatus: "Least Concern",
    lifespan: 5, // in years
    wingspan: 2.1, // in feet
    imageUrl: "https://example.com/mallard.jpg",
    description:
      "The mallard is a dabbling duck that breeds throughout the temperate and subtropical Americas...",
    relatedSpecies: ["Northern Pintail", "Gadwall"],
  },
  {
    name: "Peregrine Falcon",
    scientificName: "Falco peregrinus",
    habitat: "Cliffs, tall buildings, open country",
    diet: ["Birds", "Small mammals"],
    conservationStatus: "Least Concern",
    lifespan: 15, // in years
    wingspan: 3.4, // in feet
    imageUrl: "https://example.com/peregrine_falcon.jpg",
    description: "The peregrine falcon is a widespread bird of prey...",
    relatedSpecies: ["Gyrfalcon", "Prairie Falcon"],
  },
]);
/*output:{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65c53fc6f61bf4a142e88949'),
    '1': ObjectId('65c53fc6f61bf4a142e8894a'),
    '2': ObjectId('65c53fc6f61bf4a142e8894b')
  }
 }*/




