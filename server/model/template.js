const mongoose = require('mongoose')
const schema = mongoose.Schema;

let templateModelSchema = new schema({
    "name": {type: String, require: true},
    "versions" : [{
        type: String
    }]
})

const templateModel =  mongoose.model('template',templateModelSchema);

module.exports = templateModel;