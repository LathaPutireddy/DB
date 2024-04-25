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

//DeleteOneUsingCRUD.py
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

    # Filter by ObjectId
    document_to_delete = {"_id": ObjectId("65c2caeaae6140696995984f")}

    # Search for document before delete
    print("Searching for target document before delete: ")
    pprint.pprint(accounts_collection.find_one(document_to_delete))

    # Write an expression that deletes the target account.
    result = accounts_collection.delete_one(document_to_delete)

    # Search for document after delete
    print("Searching for target document after delete: ")
    pprint.pprint(accounts_collection.find_one(document_to_delete))

    print("Documents deleted: " + str(result.deleted_count))


except Exception as e:
    print(e)
finally:
    client.close()
/*Output = lathareddy@Lathas-Air /Applications % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/DeleteOne.py"
Searching for target document before delete: 
None
Searching for target document after delete: 
None
Documents deleted: 0 */

//DeleteManyUsingCRUD.py
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

    # Filter by ObjectId
    documents_to_delete = {"balance": {"$lt": 2000}}

    # Search for sample document before delete
    print("Searching for sample target document before delete: ")
    pprint.pprint(accounts_collection.find_one(documents_to_delete))

    # Write an expression that deletes the target accounts.
    result = accounts_collection.delete_many(documents_to_delete)

    # Search for sample document after delete
    print("Searching for sample target document after delete: ")
    pprint.pprint(accounts_collection.find_one(documents_to_delete))

    print("Documents deleted: " + str(result.deleted_count))


except Exception as e:
    print(e)
finally:
    client.close()
/*output = lathareddy@Lathas-Air /Applications % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/DeleteMany.py"
Searching for sample target document before delete: 
None
Searching for sample target document after delete: 
None
Documents deleted: 0*/

