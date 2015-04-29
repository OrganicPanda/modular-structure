angular.module('NS.core.constants', [])

  .constant('example', 'value')

  /**
   *
   */
  .service('constant', function() {
    var module = angular.module('NS.core.constants');

    module._invokeQueue.forEach(function(el) {
      if (el[1] === 'constant') {
        var name = el[2][0]
          , value = el[2][1];
        this[name] = value;
      }
    }, this);

    Object.freeze(this);
  });
