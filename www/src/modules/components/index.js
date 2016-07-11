'use strict';

module.exports =
    angular.module('app.component', [
        require('./directives').name,
        require('./filters').name
    ]);
