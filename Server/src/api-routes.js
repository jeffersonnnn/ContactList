let router = require('express').Router();

router.get('/', function (req, res) {
 res.json({
  status: 'API is working',
  message: 'Welcome to the API. Crafted with <3!'
 });
})

// Import contact controller
var contactController = require('./contactController');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;