const express = require('express');
const router = express.Router();
const controller = require(`../controller`);
const bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/',controller.deployment.getDeployment);
router.post('/',controller.deployment.addDeployment);
router.delete('/:id',controller.deployment.deleteDeployment);


module.exports = router;
