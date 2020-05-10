const mongoose = require('mongoose')
const schema = mongoose.Schema;

let deploymentModelSchema = new schema({
    "url": {type: String, require: true},
    "templateName" : { type: String, required: true , unique: false },
    "version": { type: String, required: true },
    "deployementAt":   { type: Date, default: new Date() }
})

const deploymentModel =  mongoose.model('deployemnt',deploymentModelSchema);

module.exports = deploymentModel;