const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/apiMoviesController');

router.post('/create', apiMoviesController.create);
router.delete('/delete/:id', apiMoviesController.destroy);

module.exports = router;