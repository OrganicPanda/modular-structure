angular.module('NS.components.example.tpl', ['/dist/components/example/example-tpl.html']);

angular.module("/dist/components/example/example-tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/dist/components/example/example-tpl.html",
    "<p>Component template</p>");
}]);
