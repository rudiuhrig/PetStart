'use strict';

angular.module('petstartApp.version', [
  'petstartApp.version.interpolate-filter',
  'petstartApp.version.version-directive'
])

.value('version', '0.1');
