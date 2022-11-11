const express = require('express');
const Controllers = require('../controllers/shows');

const router = express.Router();

router.get('/Shows', Controllers.listAPI);
router.get('/Shows/:id/', Controllers.detailAPI)

router.get('/stream/:id', Controllers.streamAPI)

module.exports = router;
