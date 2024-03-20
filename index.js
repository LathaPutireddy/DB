const express  = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://putireddylatha96:Plr2096@cluster0.eehlqkd.mongodb.net/Databases')

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const UserModel = mongoose.model("users", UserSchema)

app.get("/getUsers",(req, res)=>{
    res.json(UserModel.find({}).then(function(users){
        res.json(users)

    })).catch(function(err){
        console.log(err)

    })

})
app.listen(3001, () => {
    console.log("server is running")
})
