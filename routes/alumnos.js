const express = require('express');
const router = express.Router();

const alumnoscontrollers = require('../controllers/alumnoscontrollers');
router.get('/', alumnoscontrollers.list);
router.post('/', alumnoscontrollers.save);
router.delete('/:idestudiantes', alumnoscontrollers.delete);
router.get('/:idestudiantes', alumnoscontrollers.edit);
router.put('/:idestudiantes', alumnoscontrollers.update);

module.exports = router;