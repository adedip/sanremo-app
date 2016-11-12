/**
*  Module
*
* Description
*/
angular.module('core', [lbServices]).
  factory('$voter', function(Voter){
    var ret = {};

    // This function reloads the currently logged in user
    ret.load = function() {
      User.findById(1, function(v) {
        ret.data = v;
      });
    };

    ret.load();

    return ret;
  }).

  