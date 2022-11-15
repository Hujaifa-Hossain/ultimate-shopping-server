const routes = require("express").Router();

routes.route("/api/users").post().get();

module.exports = routes;
