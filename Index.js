1. Creating an index - single field index

db.student.createIndex({"student_id":223344},
{
"createdCollectionAutomatically" : false,
"numIndexesBefore" : 1,
"numIndexsAfter" : 2,
"ok": 1
})
student_id_223344
next give db.student.getindexes()

o/p:  
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { student_id: 223344 }, name: 'student_id_223344' }
]

2. compound index

b.student.createIndex({student_id: 223344 , student_id: 777777},
 {
"createdCollectionAutomatically" : false,
"numIndexesBefore" : 1,
"numIndexsAfter" : 2,
"ok": 1
})
student_id_777777
next give db.student.getindexes()
o/p: 
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { student_id: 223344 }, name: 'student_id_223344' },
  { v: 2, key: { student_id: 777777 }, name: 'student_id_777777' }
]

3. Multikey index

b.student.createIndex({student_id:1},
 {
"createdCollectionAutomatically" : false,
"numIndexesBefore" : 1,
"numIndexsAfter" : 2,
"ok": 1
})
student_id_1
db.student.getIndexes()
o/p: 
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { student_id: 223344 }, name: 'student_id_223344' },
  { v: 2, key: { student_id: 777777 }, name: 'student_id_777777' },
  { v: 2, key: { student_id: 1 }, name: 'student_id_1' }
]

4. Geospatial Indexex
db.student.createIndex({"score":"2dsphere"})
db.student.getIndexes()
o/p:
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { student_id: 223344 }, name: 'student_id_223344' },
  { v: 2, key: { student_id: 777777 }, name: 'student_id_777777' },
  { v: 2, key: { student_id: 1 }, name: 'student_id_1' },
  {
    v: 2,
    key: { score: '2dsphere' },
    name: 'score_2dsphere',
    '2dsphereIndexVersion': 3
  }
]

5.Dropping Index 
db.student.dropIndex( {key: { student_id: 223344 }})
o/p:
{
  ok: 0,
  errmsg: "can't find index with key: { key: { student_id: 223344 } }",
  code: 27,
  codeName: 'IndexNotFound'
}




