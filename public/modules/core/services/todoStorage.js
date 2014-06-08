/*global angular */

/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular.module('core')
	.factory('todoStorage', function () {
		'use strict';

		var todos = [];
		
		return {
			get: function () {
				return todos;
			},

			put: function (todos) {
				this.todos = todos;
			}
		};
	});
