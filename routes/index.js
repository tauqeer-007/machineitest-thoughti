var express = require('express');
var router = express.Router();

/*managedRecord routes*/
var managedRecord = require('../api/managed-records');
router.get('/records', managedRecord.recordFetch);

module.exports = router;
