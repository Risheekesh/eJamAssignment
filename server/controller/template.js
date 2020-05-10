"use strict";

const model = require('../model');

exports.getTemplates = async (req, res) => {
    const templateModel = model.template
    try {
        templateModel.find({}, (err, result) => {
            if (err) {
                res.status(500).send({ success: false, msg: "Something went wrong get Template find query" , err: err });
            } else {
                res.status(200).send({ success: true, data: result });
            }

        })
    }catch(ex){
        console.log(ex)
        res.status(500).send({ success: false, msg: "Something went wrong in Get Template data ", err: ex });
    }
}




exports.addTemplate = async (req, res) => {
    const { body } = req;
    const templateModel = model.template;
    const templateModelData = new templateModel(body);
    try{
        templateModelData.save((err, result) => {
            if (err) {
                res.status(500).send({ success: false, msg: "Something went wrong in Template save Data" , err : err});
            } else {
                res.send({ success: true, msg: "Template data save successfully", results: result });
            }

        })
    }catch(ex){
        res.status(500).send({ success: false, msg: "Something went wrong Add Template Data" , err: ex});
    }
}