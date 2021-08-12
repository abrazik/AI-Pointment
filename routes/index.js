const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

// Commented to test controller routes
// router.use('./api/v1');

router.use('./api', apiRoutes);

module.exports = router;