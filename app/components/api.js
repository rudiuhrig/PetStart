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

	var _mockedPets = [ {    id: 1,    name: 'Lola',    owner: 'Cíntia', type: { id: 1,  description: 'Cachorro' }  },
			         {    id: 2,    name: 'Bily',    owner: 'Melina', type: { id: 1,  description: 'Cachorro' }  },
			         {    id: 3,    name: 'Lessi',    owner: 'Rudi', type: { id: 1,  description: 'Cachorro' }  },
			         {    id: 4,    name: 'Galimãe',   owner: 'Gilson', type: { id: 3,  description: 'Galinha' }  },
			         {    id: 5,    name: 'Garfield',   owner: 'John', type: { id: 2,  description: 'Gato' }  }
			       ];

	var _mockedPetTypes = [ { id: 1,  description: 'Cachorro' },
				   { id: 2,  description: 'Gato' },
				   { id: 3,  description: 'Galinha' }
				 ] ;

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

	var _loadMockedPets = function() {
		return _mockedPets;
	};

	var _loadMockedPet = function(id) {
		var returnPet = null;
		angular.forEach(_mockedPets, function(pet) {
		            	if (pet.id == id) {
		             	returnPet = pet;
		            	}
	        	});

		return returnPet;
	};

	var _loadMockedPetTypes = function() {
		return _mockedPetTypes ;
	};

	var _savePet = function(pet) {
		var petFound = _findPetById(pet.id);
		if (petFound != null) {
			//TODO: remove from array
		}

		_mockedPets.push(angular.copy(pet));
	};

	var _findPetById = function(id) {
		var petFound = null;
	            angular.forEach(_mockedPets, function(pet) {
	       		if(pet.id === id) {
	       			petFound = pet;
	       		}
	    	}, petFound);

	            return petFound;
	}

	//Encapsulate functions
	return {
		searchPets: _searchPets,
		loadPets: _loadPets,
		loadPet: _loadPet,
		loadMockedPets: _loadMockedPets,
		loadMockedPet: _loadMockedPet,
		loadMockedPetTypes: _loadMockedPetTypes,
		savePet: _savePet
	}
}]);