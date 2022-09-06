const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/apiGenresController');

router.get('/', apiGenresController.list);
router.get('/detail/:id', apiGenresController.detail);

module.exports = router;