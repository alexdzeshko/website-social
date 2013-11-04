/**
 * @author Stas Sarosek
 * @version 0.0.1
 */

'use strict';

websiteSocial.config([
	'$routeProvider',
	'$locationProvider',
	function ($routeProvider, $locationProvider) {

		$routeProvider.when('/home', {
			templateUrl: 'app/home/home.tpl.html',
			controller: HomeCtrl,
			controllerAs: 'home'
		});

		$routeProvider.when('/about-us', {
			templateUrl: 'app/about-us/about-us.tpl.html'
		});

		$routeProvider.when('/services', {
			templateUrl: 'app/services/services.tpl.html'
		});

		$routeProvider.otherwise({
			redirectTo: '/home'
		});

		$locationProvider.html5Mode(false);
	}
]);