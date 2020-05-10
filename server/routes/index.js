"use strict";

const express =  require('express');
const router =  express.Router();
const deployment =  require('./deployment');
const template =  require('./template');


router.use('/deployment',deployment);
router.use('/template', template);

module.exports = router;
