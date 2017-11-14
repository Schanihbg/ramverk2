var express = require('express');
var router = express.Router();
var handleRoute = require("./handleRoute.js");

let homeRoute = {route: "/", renderPath: "home", title: "Home"};
let reportRoute = {route: "/report", renderPath: "report", title: "Report"};
let aboutRoute = {route: "/about", renderPath: "about", title: "About"};

let routes = [homeRoute, reportRoute, aboutRoute];

/* GET pages. */

for (var i in routes) {
    handleRoute(router, routes[i]);
}

module.exports = router;
