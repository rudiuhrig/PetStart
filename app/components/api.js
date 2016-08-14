'use strict';

/**
 * API methods for restful web services
 * @project PetStart
 * @author Rudi Uhrig Neto [rudi.uhrig@gmail.com]
 * @since 02/06/2016
 * @copyright Rudi Uhrig Neto 2016
 */
angular.module('petstartApp.api', [])

.factory("PetStartAPI", ['$http', function($http) {

	//Prepare Basic Auth and custom header
	$http.defaults.headers.common['Authorization'] = 'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==';
	$http.defaults.headers.post['X-AppGlu-Environment'] = 'staging';

	/**
	* Prepare params to works with rest json
	* @param {string} keyParam
	* @param {string} keyParam
	* @returns {string} Json
	*/
	var _prepareJsonPost = function(keyParam, valueParam) {
	        var jsonPost = {
	            params: {
	                [keyParam]: valueParam
	            }
	        };
	        return jsonPost;
    	};

	/**
	* Execute post request to search pets
	* @param {string} stopName
	* @returns {string} Json
	*/
	var _searchPets = function(petName) {
		var routeParams = _prepareJsonPost('stopName', petName);
		return $http.post("https://api.appglu.com/v1/queries/findRoutesByStopName/run", routeParams);
	};

	var _loadPets = function() {
		return $http.get('mockups/pets.json');
	}

	var _loadPet = function(id) {
		return $http.get("http:///petstart/pets/" + id);
	};


	//Encapsulate functions
	return {
		searchPets: _searchPets,
		loadPets: _loadPets,
		loadPet: _loadPet
	}
}]);