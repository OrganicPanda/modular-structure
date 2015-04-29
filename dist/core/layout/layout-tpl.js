angular.module('NS.core.layout.tpl', ['/dist/core/layout/layout-tpl.html']);

angular.module("/dist/core/layout/layout-tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/dist/core/layout/layout-tpl.html",
    "<!DOCTYPE html><html><head><title></title><base href=\"/\"><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=\"IE=edge\"><meta name=viewport content=\"width=device-width,initial-scale=1\"></head><body></body></html>");
}]);
