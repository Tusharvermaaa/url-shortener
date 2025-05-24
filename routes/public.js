const express = require("express");
const { redirecttosite, deleteparticular } = require("../controller/url");
const public_router = express.Router();

public_router.route("/:id").get(redirecttosite).delete(deleteparticular);

module.exports = public_router;
