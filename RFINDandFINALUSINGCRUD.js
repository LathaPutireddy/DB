from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint
uri = "mongodb+srv://putireddylatha96:Plr2096@cluster0.eehlqkd.mongodb.net"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.vehicles

    # Get reference to 'accounts' collection
    car_collection = db.vehicles

    # inserting one Vehicle
    new_car = {
        "vehicle_name": "BMW",
        "vehicle_id": "2023BMWX3xDrive30i",
        "vehicle_color": "black",
        "cost": 44250,
    }

    # inserting one car
    doccument_to_find = {
        "_id": ObjectId("65d62cc2c4d3d5acb9d5eca0")
    }

    # Write an expression that inserts the 'new_account' document into the 'accounts' collection.
    result = car_collection.insert_one(doccument_to_find)

    pprint.pprint(result)


except Exception as e:
    print(e)
finally:
    client.close()

/*output
lathareddy@Lathas-MacBook-Air ~ % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/FINDUSING
CRUD.py"
E11000 duplicate key collection: vehicles.vehicles index: _id_ dup key: { _id: ObjectId('65d62aceb4e93c2aa6ab6ea5') }, full error: {'index': 0, 'code': 11000, 'errmsg': "E11000 duplicate key error collection: vehicles.vehicles index: _id_ dup key: { _id: ObjectId('65d62aceb4e93c2aa6ab6ea5') }", 'keyPattern': {'_id': 1}, 'keyValue': {'_id': ObjectId('65d62aceb4e93c2aa6ab6ea5')}} */

FINALUSINGCRUD
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint
uri = "mongodb+srv://putireddylatha96:Plr2096@cluster0.eehlqkd.mongodb.net"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.vehicles

    # Get reference to 'accounts' collection
    cars_collection = db.accounts

    # inserting one account
    documents_to_find = {"cost": {"$gt": 33250,}}

    # Write an expression that selects the documents matching the query constraint in the 'accounts' collection.
    cursor = cars_collection.find(documents_to_find)

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

/*output*/
lathareddy@Lathas-MacBook-Air ~ % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/FINDMANYU
SINGCRUD.py"
# of documents found: 0

