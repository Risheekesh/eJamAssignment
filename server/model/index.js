"use strict";

let model = {};
const config = require('../config')
const mongoose = require('mongoose');
const options =  { useNewUrlParser: true  , useUnifiedTopology: true}
try{
    mongoose.connect(`mongodb://${config.get('database_mongodb.username')}:${config.get('database_mongodb.password')}@${config.get('database_mongodb.host')}:${config.get('database_mongodb.port')}/${config.get(`database_mongodb.dbName`)}` , options)

}catch(e){
   console.log('Mongo conn error',e)
    res.status(500).send({ error: 'Connection Failed,Please try again.' })
}

model["deployment"]=require("./deployment"); 
model["template"]=require("./template"); 


module.exports = model;