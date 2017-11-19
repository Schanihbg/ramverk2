/**
 * Test for handle route file.
 */
"use strict";

/* global describe it */

var assert = require("assert");
var express = require('express');
var router = express.Router();

const handleRoute = require("../../routes/handleRoute.js");

let testRoute = {route: "/test", renderPath: "testPath", title: "TestTitle"};

describe("Check handleRoute file", function() {
    it("should be a route function", function() {
        assert.equal(handleRoute(router, testRoute), router);
    });
});
