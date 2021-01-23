const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

/**
 * GET /api/user
 * @summary This is the summary or description of the endpoint
 * @return {object} 200 - success response
 */
router.get('/', async function (req, res) {
  controller
    .list()
    .then(lista => {
      response.success(req, res, lista);
    })
    .catch(error => {
      response.error(req, res, error);
    });
});

/**
 * GET /api/user/:id
 * @summary This is the summary or description of the endpoint
 * @return {object} 200 - success response
 */
router.get('/:id', async function (req, res) {
  controller
    .get(req.params.id)
    .then(user => {
      response.success(req, res, user);
    })
    .catch(error => {
      response.error(req, res, error);
    });
});

module.exports = router;
