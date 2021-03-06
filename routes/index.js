const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api/v1', apiRoutes);

module.exports = router;