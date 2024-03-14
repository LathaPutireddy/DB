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

    # Filter
    document_to_update = {"_id": ObjectId("65d62cc2c4d3d5acb9d5eca0")}

    # Update
    add_to_balance = {"$inc": {"cost": 100}}

    # Print original document
    pprint.pprint(cars_collection.find_one(document_to_update))

    # Write an expression that adds to the target account balance by the specified amount.
    result = cars_collection.update_one(document_to_update, add_to_balance)
    print("Documents updated: " + str(result.modified_count))

    # Print updated document
    pprint.pprint(cars_collection.find_one(document_to_update))


except Exception as e:
    print(e)
finally:
    client.close()

/*output*/
lathareddy@Lathas-MacBook-Air ~ % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/UPDATEONE
USINGCRUD.py"
{'_id': ObjectId('65d62cc2c4d3d5acb9d5eca0'),
 'cost': 33250,
 'vehicle_color': 'WHITE',
 'vehicle_id': 'JETA',
 'vehicle_name': 'VOL'}
Documents updated: 1
{'_id': ObjectId('65d62cc2c4d3d5acb9d5eca0'),
 'cost': 33350,
 'vehicle_color': 'WHITE',
 'vehicle_id': 'JETA',
 'vehicle_name': 'VOL'}

//UPDATEMANY()
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint
uri = "mongodb+srv://nikshepkulli9:mongodb1234@cluster0.2z6l7np.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.Vehicles

    # Get reference to 'accounts' collection
    cars_collection = db.accounts

    # Filter
    select_car = {"vehicle_name": "BMW",}

    # Print original document
    set_field = {"$set": {"minimum_cost": 44250}}

    # Write an expression that adds to the target account balance by the specified amount.
    result = cars_collection.update_many(select_car, set_field)

    # Print updated document
    print("Documents matched: " + str(result.matched_count))
    print("Documents updated: " + str(result.modified_count))
    pprint.pprint(cars_collection.find_one(select_car))

except Exception as e:
    print(e)
finally:
    client.close()
