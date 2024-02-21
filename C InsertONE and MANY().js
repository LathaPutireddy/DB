from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
import pprint

uri = "mongodb+srv://putireddylatha96:Plr2096@cluster0.eehlqkd.mongodb.net"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.vehicles

    # Get reference to 'vehicles' collection
    car_collection = db.vehicles

    # inserting one Vehicle
    new_car = {
        "vehicle_name": "BMW",
        "vehicle_id": "2023BMWX3xDrive30i",
        "vehicle_color": "black",
        "cost": 44250,
    }

    # Write an expression that inserts the 'new_car' document into the 'vehicles' collection.
    result = car_collection.insert_one(new_car)

    document_id = result.inserted_id
    pprint.pprint(f"_id of inserted document: {document_id}")


except Exception as e:
    print(e)
finally:
    client.close()

//*output*//
lathareddy@Lathas-MacBook-Air ~ % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/INSERTONE
USINGCRUD.py"
'_id of inserted document: 65d62aceb4e93c2aa6ab6ea5'




//INSERTMAY()
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
import pprint

uri = "mongodb+srv://putireddylatha96:Plr2096@cluster0.eehlqkd.mongodb.net"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.vehicles

    # Get reference to 'vehicles' collection
    car_collection = db.vehicles

    # inserting one Vehicle
    new_cars = [
        {
        "vehicle_name": "BMW",
        "vehicle_id": "2023BMWX3xDrive30i",
        "vehicle_color": "black",
        "cost": 44250,
    },
    {
        "vehicle_name": "VOL",
        "vehicle_id": "JETA",
        "vehicle_color": "WHITE",
        "cost": 33250,
    }
    ]
    
    # Write an expression that inserts the 'new_car' document into the 'vehicles' collection.
    result = car_collection.insert_many(new_cars)

    document_ids = result.inserted_ids
    print("# of documents inserted: " + str(len(document_ids)))
    print(f"_ids of inserted documents: {document_ids}")


except Exception as e:
    print(e)
finally:
    client.close()

/*output/
      lathareddy@Lathas-MacBook-Air ~ % /usr/local/bin/python3 "/Users/lathareddy/Library/Mobile Documents/com~apple~CloudDocs/D1/INSERTMAN
YUSINGCRUD.py"
# of documents inserted: 2
_ids of inserted documents: [ObjectId('65d62cc2c4d3d5acb9d5ec9f'), ObjectId('65d62cc2c4d3d5acb9d5eca0')]
