const express = require('express');
const router = express.Router();
const controller = require(`../controller`);
const bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/',controller.template.getTemplates);
router.post('/',controller.template.addTemplate);



module.exports = router;
