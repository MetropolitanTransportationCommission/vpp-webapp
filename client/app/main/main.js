'use strict';

angular.module('vppApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('home', {
                url: "/home",
                templateUrl: 'public/templates/home/home.html',
                controller: 'HomeCtrl'
            })
            .state('map', {
                url: "/map",
                templateUrl: 'public/templates/mapping/mapping.html',
                controller: 'MapCtrl',
                resolve: {
                    promiseObj: function ($q, $rootScope, wish) {
                        var deferred = $q.defer(),
                            deps = {

                                //ESRI Map
                                Map: 'esri/map',
                                esriConfig: 'esri/config',
                                //Map Layer Tools
                                FeatureLayer: 'esri/layers/FeatureLayer',
                                InfoTemplate: 'esri/InfoTemplate',
                                //Map Popup Tools
                                Popup: 'esri/dijit/Popup',
                                PopupTemplate: 'esri/dijit/PopupTemplate',
                                //Symbol Tools
                                SimpleFillSymbol: 'esri/symbols/SimpleFillSymbol',
                                SimpleMarkerSymbol: 'esri/symbols/SimpleMarkerSymbol',
                                SimpleLineSymbol: 'esri/symbols/SimpleLineSymbol',
                                TextSymbol: 'esri/symbols/TextSymbol',
                                //dojo Stuff
                                Color: 'dojo/_base/Color',
                                parser: 'dojo/parser',
                                GreySkies: 'dojox/charting/themes/GreySkies',
                                number: 'dojo/number',
                                dom: 'dojo/dom',
                                on: 'dojo/on',
                                query: 'dojo/query',
                                domStyle: 'dojo/dom-style',
                                domConstruct: 'dojo/dom-construct',
                                domReady: 'dojo/domReady',
                                //Services
                                GeometryService: 'esri/tasks/GeometryService',
                                Extent: 'esri/geometry/Extent',
                                //Renderers
                                HeatmapRenderer: 'esri/renderers/HeatmapRenderer',
                                ClassBreaksRenderer: 'esri/renderers/ClassBreaksRenderer',
                                SimpleRenderer: 'esri/renderers/SimpleRenderer',
                                ScaleDependentRenderer: 'esri/renderers/ScaleDependentRenderer'
                            };


                        wish.loadDependencies(deps, function () {
                            deferred.resolve();
                            if (!$rootScope.$$phase) {
                                $rootScope.$apply();
                            }
                        });

                        return deferred.promise;
                    }
                }
            })
            .state('database', {
                url: "/database",
                templateUrl: 'public/templates/database/database.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: "/about",
                templateUrl: 'public/templates/about/about.html',
                controller: 'HomeCtrl'
            })
            .state('research', {
                url: "/research",
                templateUrl: 'public/templates/research/research.html',
                controller: 'HomeCtrl'
            });
    })
    .service('wish', function () {

        // it's not require... it's a wish?
        var wish = {};

        function _loadDependencies(deps, next) {
            var reqArr = _.values(deps),
                keysArr = _.keys(deps);

            // use the dojo require (required by arcgis + dojo) && save refs
            // to required obs
            require(reqArr, function () {
                var args = arguments;

                _.each(keysArr, function (name, idx) {
                    wish[name] = args[idx];
                });

                next();
            });
        }

        return {
            loadDependencies: function (deps, next) {
                _loadDependencies(deps, next);
            },

            get: function () {
                return wish;
            }
        };
    });