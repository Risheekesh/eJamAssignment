"use strict";

const model = require('../model');

exports.getDeployment = async (req, res) => {
    const deploymentModel = model.deployment
    try {
        deploymentModel.find({}, (err, result) => {
            if (err) {
                res.status(500).send({ success: false, msg: "Something went wrong get deployment find query", err: err });
            } else {
                res.status(200).send({ success: true, data: result });
            }

        })
    } catch (ex) {
        console.log(ex)
        res.status(500).send({ success: false, msg: "Something went wrong in Get deployment data ", err: ex });
    }
}




exports.addDeployment = async (req, res) => {
    const { body } = req;
    const deploymentModel = model.deployment;
    const deploymentModelData = new deploymentModel(body);
    try {
        deploymentModelData.save((err, result) => {
            if (err) {
                res.status(500).send({ success: false, msg: "Something went wrong in Deployment save Data", err: err });
            } else {
                res.send({ success: true, msg: "Deployment data save successfully", results: result });
            }

        })
    } catch (ex) {
        res.status(500).send({ success: false, msg: "Something went wrong Add Deployment Data", err: ex });
    }
}

exports.deleteDeployment = async (req, res) => {
    const { params } = req;
    const deploymetModel = model.deployment;
    if (params.id) {
        try {
            deploymetModel.deleteOne({ _id: params.id }, (err, result) => {
                if (err) {
                    res.status(500).send({ success: false, msg: "Something went wrong delete depoyment Data", err: err });
                } else {
                    res.status(200).send({ success: true, data: result });
                }
            });
        } catch (ex) {
            res.status(500).send({ success: false, msg: "Something went wrong Delete Deployment Data", err: ex });
        }
    }else{
        res.status(400).send({ success: false, msg: "id is not present in params", err: err });
    }
}