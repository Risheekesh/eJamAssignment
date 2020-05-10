var convict = require('convict');
 
// Define a schema
var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "staging"],
    default: "development",
    env: "NODE_ENV"
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3001,
    env: "PORT",
    arg: "port"
  },
  database_mongodb:{
    host:{
      doc: "MongoDb Host",
      format: "*",
      default: "<host>",
      env: "MONGO_HOST"
    },
    port:{
      doc: "Mongodb Port",
      format: "port",
      default: 4041,
      env: "MONGO_PORT"
    },
    username:{
      doc: "Mongodb Username",
      format: "*",
      default: "<username>",
      env: "MONGO_USERNAME"
    },
    password:{
      doc: "Mongodb Password",
      format: '*',
      default: "<password>",
      env: "MONGO_PASSWORD"
    },
    dbName:{
        doc: "Mongodb databasename",
        format: '*',
        default: "battle",
        env: "MONGO_DBNAME"
    }
  },
  base_url : {
        doc: "api url",
        format: 'url',
        default: "http://localhost:4041",
        env: "BASE_URL"
  }
  
});
 
// Load environment dependent configuration
var env = config.get('env');
config.loadFile(`${__dirname}/${env}.json`);
 
// Perform validation
config.validate({allowed: 'strict'});
 
module.exports = config;
