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

    # Get reference to 'vehicles' database
    db = client.vehicles

    # Get reference to 'cars' collection
    cars_collection = db.vehicles

    # Filter by ObjectId
    document_to_delete = {"_id": ObjectId("65d635904ebce1c1233e03ec")}

    # Search for document before delete
    print("Searching for target document before delete: ")
    pprint.pprint(cars_collection.find_one(document_to_delete))

    # Write an expression that deletes the target account.
    result = cars_collection.delete_one(document_to_delete)

    # Search for document after delete
    print("Searching for target document after delete: ")
    pprint.pprint(cars_collection.find_one(document_to_delete))

    print("Documents deleted: " + str(result.deleted_count))


except Exception as e:
    print(e)
finally:
    client.close()

/*output*/
lathareddy@Lathas-MacBook-Air ~ % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/DELETEONE
USINGCRUD.py"
Searching for target document before delete: 
{'_id': ObjectId('65d635904ebce1c1233e03ec'),
 'cost': 33250,
 'vehicle_color': 'WHITE',
 'vehicle_id': 'JETA',
 'vehicle_name': 'VOL'}
Searching for target document after delete: 
None
Documents deleted: 1

//DELETEMANY
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
    cars_collection = db.vehicles

    # Filter by ObjectId
    documents_to_delete = {"cost": {"$lt": 20000}}

    # Search for sample document before delete
    print("Searching for sample target document before delete: ")
    pprint.pprint(cars_collection.find_one(documents_to_delete))

    # Write an expression that deletes the target accounts.
    result = cars_collection.delete_many(documents_to_delete)

    # Search for sample document after delete
    print("Searching for sample target document after delete: ")
    pprint.pprint(cars_collection.find_one(documents_to_delete))

    print("Documents deleted: " + str(result.deleted_count))


except Exception as e:
    print(e)
finally:
    client.close()
/*output*/
lathareddy@Lathas-MacBook-Air ~ % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/DELETEMANYUSINGCRUD.py"
Searching for sample target document before delete: 
None
Searching for sample target document after delete: 
None
Documents deleted: 0
