angular.module('NS.pages.example.tpl', ['/dist/pages/example/example.html']);

angular.module("/dist/pages/example/example.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/dist/pages/example/example.html",
    "<p>Page template</p>");
}]);
