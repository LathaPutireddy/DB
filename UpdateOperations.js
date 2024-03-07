//Update
db.createCollection('podcasts')
db.podcasts.updateOne(
  {title: "The Developer Hub"},
  {$set: {topics: ["databases", "MongoDB"]}}
);
/*output:{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}*/
//confirm
db.podcasts.findOne({title: "The Developer Hub"});
/*output: null*/

//updatemany()
db.createCollecton('books')
db.books.updateMany(
  {publishedDate: {$lt: ISODate("2017-04-27T08:00:00.000+00:00")}},
  {$set: {status: "NEW"}}
);
/*output: {
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}*/

//UpdateoneusingCRUD.py
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

    # Filter
    document_to_update = {"_id": ObjectId("65c2cb3a004800a420ffc3dd")}

    # Update
    add_to_balance = {"$inc": {"balance": 100}}

    # Print original document
    pprint.pprint(accounts_collection.find_one(document_to_update))

    # Write an expression that adds to the target account balance by the specified amount.
    result = accounts_collection.update_one(document_to_update, add_to_balance)
    print("Documents updated: " + str(result.modified_count))

    # Print updated document
    pprint.pprint(accounts_collection.find_one(document_to_update))


except Exception as e:
    print(e)
finally:
    client.close()

/*output = lathareddy@Lathas-Air /Applications % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/updateone.py"
None
Documents updated: 0
None*/

//updatemanyUsingCRUD.py
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

    # Filter
    select_accounts = {"account_type": "savings"}

    # Print original document
    set_field = {"$set": {"minimum_balance": 100}}

    # Write an expression that adds to the target account balance by the specified amount.
    result = accounts_collection.update_many(select_accounts, set_field)

    # Print updated document
    print("Documents matched: " + str(result.matched_count))
    print("Documents updated: " + str(result.modified_count))
    pprint.pprint(accounts_collection.find_one(select_accounts))

except Exception as e:
    print(e)
finally:
    client.close()
/*output = lathareddy@Lathas-Air /Applications % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/Updatemany.py"
Documents matched: 1
Documents updated: 1
{'_id': ObjectId('65c6eebfa7a6db822df9e29d'),
 'account_holder': 'Muhammad ibn Musa al-Khwarizmi',
 'account_id': 'MDB829000001',
 'account_type': 'savings',
 'balance': 267914296,
 'minimum_balance': 100} */
