const express = require('express');
const router = express.Router();
const rescueRouter = require('../controllers/rescueRouter');

//INDUCES

router.get('/', rescueRouter.index);
router.get('/seed', rescueRouter.seed);
router.get('/:id', rescueRouter.show);
router.put('/:id', rescueRouter.update);
router.delete('/:id', rescueRouter.delete);

module.exports = router;

