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

//findoneUsingCRUD.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint
uri = "mongodb+srv://putireddylatha96:Plr2096@cluster0.eehlqkd.mongodb.net/"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.bank

    # Get reference to 'accounts' collection
    accounts_collection = db.accounts

    # inserting one account
    doccument_to_find = {
        "_id": ObjectId("65c2caeaae6140696995984e")
    }

    # Write an expression that inserts the 'new_account' document into the 'accounts' collection.
    result = accounts_collection.insert_one(doccument_to_find)

    pprint.pprint(result)


except Exception as e:
    print(e)
finally:
    client.close()
/*output = lathareddy@Lathas-Air /Applications % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/Findone.py"
E11000 duplicate key error collection: bank.accounts index: _id_ dup key: { _id: ObjectId('65c2caeaae6140696995984e') }, full error: {'index': 0, 'code': 11000, 'errmsg': "E11000 duplicate key error collection: bank.accounts index: _id_ dup key: { _id: ObjectId('65c2caeaae6140696995984e') }", 'keyPattern': {'_id': 1}, 'keyValue': {'_id': ObjectId('65c2caeaae6140696995984e')}}*/



  //findmanyusingCRUD.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint
uri = "mongodb+srv://putireddylatha96:Plr2096@cluster0.eehlqkd.mongodb.net/"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.bank

    # Get reference to 'accounts' collection
    accounts_collection = db.accounts

    # inserting one account
    documents_to_find = {"balance": {"$gt": 4700}}

    # Write an expression that selects the documents matching the query constraint in the 'accounts' collection.
    cursor = accounts_collection.find(documents_to_find)

    num_docs = 0
    for document in cursor:
        num_docs += 1
        pprint.pprint(document)
        print()
    print("# of documents found: " + str(num_docs))


except Exception as e:
    print(e)
finally:
    client.close()

/*output = lathareddy@Lathas-Air /Applications % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/Findmany.py"
{'_id': ObjectId('65c6eb94627ce833faa3e450'),
 'account_holder': 'Linus Torvalds',
 'account_id': 'MDB829001337',
 'account_type': 'checking',
 'balance': 50352434,
 'last_updated': datetime.datetime(2024, 2, 10, 3, 20, 52, 604000)}

{'_id': ObjectId('65c6ebf807f0c4bc4327552c'),
 'account_holder': 'Linus Torvalds',
 'account_id': 'MDB829001337',
 'account_type': 'checking',
 'balance': 50352434,
 'last_updated': datetime.datetime(2024, 2, 10, 3, 22, 32, 612000)}

{'_id': ObjectId('65c6eebfa7a6db822df9e29c'),
 'account_holder': 'Ada Lovelace',
 'account_id': 'MDB011235813',
 'account_type': 'checking',
 'balance': 60218}

{'_id': ObjectId('65c6eebfa7a6db822df9e29d'),
 'account_holder': 'Muhammad ibn Musa al-Khwarizmi',
 'account_id': 'MDB829000001',
 'account_type': 'savings',
 'balance': 267914296}

# of documents found: 4 */

  
      
