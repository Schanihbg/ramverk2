module.exports = function(router, aRoute) {
    return router.get(aRoute.route, function(req, res) {
        res.render(aRoute.renderPath, {
            title: aRoute.title,
            urlPath: req.path
        });
    });
};
