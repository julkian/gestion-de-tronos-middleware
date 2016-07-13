function userMeProvider() {
  // Configuration and default parameters
  var params = {};
  var baseUrl = '';
  var serviceBaseUrl = '/rest/me';
  this.config = function (config) {
    params = angular.copy(config);
    baseUrl = params.baseUrl || baseUrl;
    delete params.baseUrl;
  };
  this.$get = function ($resource) {
    // Allowed operations
    var actions = {
      me: {
        url: baseUrl + serviceBaseUrl,
        method: 'GET'
      }
    };
    return $resource(baseUrl + serviceBaseUrl, null, actions);
  };
}


module.exports = {
  userMeProvider: userMeProvider
};
