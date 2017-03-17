webpackJsonp([0,4],{

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(588);


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QueryParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });

var QueryParameter = (function () {
    function QueryParameter(key, value) {
        this.key = key;
        this.value = value;
    }
    return QueryParameter;
}());
var ApiService = (function () {
    function ApiService(apiUrl, http) {
        this.apiUrl = apiUrl;
        this.http = http;
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ withCredentials: true });
    }
    ApiService.prototype.get = function (url, params, headers) {
        var queryParameters = params && params.length > 0 ? this.buildQueryParams(params) : "";
        if (headers) {
            this.requestOptions.headers = headers;
        }
        return this.http.get(this.apiUrl.concat(url).concat(queryParameters), this.requestOptions);
    };
    ApiService.prototype.buildQueryParams = function (params) {
        var queryString = "?";
        params.forEach(function (parameter) {
            if (queryString.length > 1)
                queryString = queryString.concat("&");
            queryString = queryString.concat(parameter.key, "=", parameter.value);
        });
        return queryString;
    };
    ApiService.prototype.post = function (url, payload) {
        return this.http.post(this.apiUrl.concat(url), payload);
    };
    ApiService.prototype.put = function (url, payload) {
        return this.http.put(this.apiUrl.concat(url), payload);
    };
    ApiService.prototype.delete = function (url, params) {
        var queryParameters = params && params.length > 0 ? this.buildQueryParams(params) : "";
        return this.http.delete(this.apiUrl.concat(url).concat(queryParameters));
    };
    return ApiService;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/api.service.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = orderIndexValidator;
function orderIndexValidator(control) {
    var positiveDigitOnlyPattern = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (control.value && !control.value.toString().match(positiveDigitOnlyPattern)) {
        return { invalidOrder: true };
    }
}
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/order.index.validator.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteProtector; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteProtector = (function () {
    function RouteProtector(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    RouteProtector.prototype.canActivate = function () {
        var authenticated = false;
        if (this.authenticationService.isLoggedIn()) {
            authenticated = true;
        }
        else {
            this.router.navigate(["login"]);
        }
        return authenticated;
    };
    RouteProtector = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], RouteProtector);
    return RouteProtector;
    var _a, _b;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/app.protected.route.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = (function () {
    function CategoriesComponent() {
        this.pageHeader = "Categories";
    }
    CategoriesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'categories',
            template: "<h3>{{pageHeader}}</h3><router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/categories.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_validators_order_index_validator__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryFormComponent = (function () {
    function CategoryFormComponent(router, activatedRoute, apiService, formBuilder, toastsManager) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastsManager = toastsManager;
        this.pageLoadingComplete = false;
        this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        this.category = {
            name: undefined,
            theme: undefined,
            parentId: undefined,
            orderIndex: undefined
        };
    }
    CategoryFormComponent.prototype.ngOnInit = function () {
        this.getCategoriesData();
        if (this.newCategory()) {
            this.initForm();
        }
        else {
            this.loadCategory();
        }
    };
    CategoryFormComponent.prototype.loadCategory = function () {
        var _this = this;
        this.apiService
            .get("/categories/".concat(this.id.toString()))
            .subscribe(function (response) {
            _this.category = response.json();
            _this.initForm();
        }, function (error) {
            _this.toastsManager.error("Failed to retrieve user with id ".concat(_this.id.toString()), "Failure");
        });
    };
    CategoryFormComponent.prototype.getCategoriesData = function () {
        var _this = this;
        this.apiService
            .get("/categories")
            .subscribe(function (response) {
            _this.allCategories = response.json();
            _this.parentCategories = _this.allCategories.filter(function (value) {
                return value.id === value.parentId;
            });
            _this.listOfThemes = _this.allCategories.map(function (value) {
                return value.theme;
            });
            _this.listOfThemes = _this.listOfThemes.filter(function (value) {
                return value !== null;
            });
        }, function (error) {
            _this.toastsManager.error("Failed to get categories list", "Failure");
        });
    };
    CategoryFormComponent.prototype.initForm = function () {
        this.categoryForm = this.formBuilder.group({
            name: [this.category.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            theme: [this.category.theme],
            parentId: [this.category.parentId],
            orderIndex: [this.category.orderIndex, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__common_validators_order_index_validator__["a" /* orderIndexValidator */]])]
        });
        this.pageLoadingComplete = true;
    };
    CategoryFormComponent.prototype.newCategory = function () {
        return isNaN(this.id) ? true : false;
    };
    CategoryFormComponent.prototype.onSubmit = function () {
        if (this.newCategory()) {
            this.saveCategory();
        }
        else {
            this.updateCategory();
        }
    };
    CategoryFormComponent.prototype.saveCategory = function () {
        var _this = this;
        this.apiService
            .post("/categories", this.categoryForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["categories"]);
            _this.toastsManager
                .success("Category ".concat(_this.categoryForm.value.name).concat(" has been created successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to save ".concat(_this.categoryForm.value.name), "Failure");
        });
    };
    CategoryFormComponent.prototype.updateCategory = function () {
        var _this = this;
        console.log(this.categoryForm.value);
        this.apiService
            .put("/categories/".concat(this.id.toString()), this.categoryForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["categories"]);
            _this.toastsManager
                .success("Level ".concat(_this.categoryForm.value.name).concat(" has been updated successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to update ".concat(_this.categoryForm.value.name), "Failure");
        });
    };
    CategoryFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category-form',
            template: __webpack_require__(900),
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _e) || Object])
    ], CategoryFormComponent);
    return CategoryFormComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/category-form.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryListComponent = (function () {
    function CategoryListComponent(apiService, toastsManager) {
        this.apiService = apiService;
        this.toastsManager = toastsManager;
        this.pageLoadingComplete = false;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.fetchCategories();
    };
    CategoryListComponent.prototype.fetchCategories = function () {
        var _this = this;
        this.apiService
            .get("/categories")
            .subscribe(function (response) {
            _this.categories = response.json();
            _this.setPageLoaded(true);
        }, function (error) {
            _this.setPageLoaded(true);
            _this.toastsManager.error("Failed to get category list", "Failure");
        });
    };
    CategoryListComponent.prototype.setPageLoaded = function (completionStatus) {
        this.pageLoadingComplete = completionStatus;
    };
    CategoryListComponent.prototype.removeFromList = function (removedCategory) {
        this.categories = this.categories.filter(function (category) {
            return removedCategory.id !== category.id;
        });
    };
    CategoryListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'categories',
            template: __webpack_require__(902)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _b) || Object])
    ], CategoryListComponent);
    return CategoryListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/category-list.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







function dateValidator(control) {
    if (!control.parent) {
        return;
    }
    var registrationDate = control.parent.controls["registrationDate"];
    var startDate = control.parent.controls["startDate"];
    var endDate = control.parent.controls["endDate"];
    if (registrationDate.dirty && startDate.dirty && endDate.dirty) {
        var registeration = __WEBPACK_IMPORTED_MODULE_6_moment__(+registrationDate.value);
        var start = __WEBPACK_IMPORTED_MODULE_6_moment__(+startDate.value);
        var end = __WEBPACK_IMPORTED_MODULE_6_moment__(+endDate.value);
        if (registeration.isAfter(start) || start.isAfter(end)) {
            return { wrongOrder: true };
        }
    }
    if (registrationDate.hasError("wrongOrder")) {
        registrationDate.setErrors(null, { emitEvent: true });
    }
    if (startDate.hasError("wrongOrder")) {
        startDate.setErrors(null, { emitEvent: true });
    }
    if (endDate.hasError("wrongOrder")) {
        endDate.setErrors(null, { emitEvent: true });
    }
}
var EventFormComponent = (function () {
    function EventFormComponent(currentUser, router, activatedRoute, apiService, formBuilder, toastsManager, mapsApiLoader, ngZone) {
        var _this = this;
        this.currentUser = currentUser;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastsManager = toastsManager;
        this.mapsApiLoader = mapsApiLoader;
        this.ngZone = ngZone;
        this.pageLoadingComplete = false;
        this.event = {};
        this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        this.user = JSON.parse(localStorage.getItem(currentUser));
    }
    EventFormComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getOrganizations();
        this.getLevels();
        this.getRegions();
        if (this.newEvent()) {
            this.initEvent();
            this.initForm();
        }
        else {
            this.loadEvent();
        }
    };
    EventFormComponent.prototype.newEvent = function () {
        return isNaN(this.id) ? true : false;
    };
    EventFormComponent.prototype.loadEvent = function () {
        var _this = this;
        this.apiService
            .get("/events/".concat(this.id.toString()))
            .subscribe(function (response) {
            _this.event = response.json();
            _this.initForm();
        }, function (error) {
            _this.toastsManager.error("Failed to retrieve event with id ".concat(_this.id.toString()), "Failure");
        });
    };
    EventFormComponent.prototype.formatDates = function () {
        if (!this.event.id) {
            return;
        }
    };
    EventFormComponent.prototype.initEvent = function () {
        this.event = {
            title: undefined,
            description: undefined,
            registrationDate: undefined,
            startDate: undefined,
            endDate: undefined,
            geoDescription: undefined,
            latitude: undefined,
            longitude: undefined,
            mapZoom: undefined,
            organizationId: undefined,
            regionId: undefined,
            levelId: undefined,
            categoryId: undefined,
            createdBy: undefined
        };
    };
    EventFormComponent.prototype.initForm = function () {
        var _this = this;
        this.eventForm = this.formBuilder.group({
            title: [this.event.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            description: [this.event.description],
            registrationDate: [this.event.registrationDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, dateValidator])],
            startDate: [this.event.startDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, dateValidator])],
            endDate: [this.event.endDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, dateValidator])],
            geoDescription: [this.event.geoDescription],
            latitude: [this.event.latitude],
            longitude: [this.event.longitude],
            mapZoom: [this.event.mapZoom],
            organizationId: [this.event.organizationId, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            regionId: [this.event.regionId, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            levelId: [this.event.levelId, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            categoryId: [this.event.categoryId, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            createdBy: [this.event.createdBy]
        });
        setTimeout(function () {
            _this.initLocationAutocomplete(); /* Timeout is necessary here to init google autocomplete properly  */
            _this.formatDates();
        }, 10);
        this.initLocation();
        this.pageLoadingComplete = true;
    };
    EventFormComponent.prototype.getCategories = function () {
        var _this = this;
        this.apiService
            .get("/categories")
            .subscribe(function (response) {
            _this.allCategories = response.json()
                .reduce(function (result, value) {
                if (value.parentId === value.id) {
                    result[value.id] = Object.assign({}, result[value.id] || { options: [] }, value);
                }
                else {
                    (result[value.parentId] || (result[value.parentId] = { options: [] })).options.push(value);
                }
                return result;
            }, [])
                .filter(function (x) { return !!x; });
        }, function (error) {
            _this.toastsManager.error("Failed to get categories list", "Failure");
        });
    };
    EventFormComponent.prototype.getOrganizations = function () {
        var _this = this;
        this.apiService
            .get("/organizations")
            .subscribe(function (response) {
            _this.allOrganizations = response.json();
        }, function (error) {
            _this.toastsManager.error("Failed to get organizations list", "Failure");
        });
    };
    EventFormComponent.prototype.getLevels = function () {
        var _this = this;
        this.apiService
            .get("/levels")
            .subscribe(function (response) {
            _this.allLevels = response.json();
        }, function (error) {
            _this.toastsManager.error("Failed to get levels list", "Failure");
        });
    };
    EventFormComponent.prototype.getRegions = function () {
        var _this = this;
        this.apiService
            .get("/regions")
            .subscribe(function (response) {
            _this.allRegions = response.json();
        }, function (error) {
            _this.toastsManager.error("Failed to get regions list", "Failure");
        });
    };
    EventFormComponent.prototype.initLocation = function () {
        var _this = this;
        if (!this.event.latitude && !this.event.longitude && "geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.event.latitude = position.coords.latitude;
                _this.event.longitude = position.coords.longitude;
                _this.event.mapZoom = 12;
            });
        }
    };
    EventFormComponent.prototype.initLocationAutocomplete = function () {
        var _this = this;
        this.mapsApiLoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.locationRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.eventForm.controls["latitude"].setValue(place.geometry.location.lat());
                    _this.eventForm.controls["longitude"].setValue(place.geometry.location.lng());
                    _this.eventForm.controls["mapZoom"].setValue(12);
                    _this.event.latitude = place.geometry.location.lat();
                    _this.event.longitude = place.geometry.location.lng();
                    _this.event.mapZoom = 12;
                });
            });
        });
    };
    EventFormComponent.prototype.onSubmit = function () {
        this.toMillis("registrationDate");
        this.toMillis("startDate");
        this.toMillis("endDate");
        if (this.newEvent()) {
            this.setCreatedBy();
            this.saveEvent();
        }
        else {
            this.updateEvent();
        }
    };
    EventFormComponent.prototype.saveEvent = function () {
        var _this = this;
        this.apiService
            .post("/events", this.eventForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["events"]);
            _this.toastsManager.success("Event ".concat(_this.eventForm.controls["title"].value).concat(" has been created"), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to create event ".concat(_this.eventForm.controls["title"].value), "Failure");
        });
    };
    EventFormComponent.prototype.updateEvent = function () {
        var _this = this;
        this.apiService
            .put("/events/".concat(this.event.id), this.eventForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["events"]);
            _this.toastsManager.success("Event ".concat(_this.eventForm.controls["title"].value).concat(" has been updated"), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to update event ".concat(_this.eventForm.controls["title"].value), "Failure");
        });
    };
    EventFormComponent.prototype.toMillis = function (key) {
        var millis = this.eventForm.controls[key].value.length === 10
            ? 1000 * +this.eventForm.controls[key].value : this.eventForm.controls[key].value;
        this.eventForm.controls[key].setValue(millis);
    };
    EventFormComponent.prototype.setCreatedBy = function () {
        this.eventForm.controls["createdBy"].setValue(this.user.id);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("location"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], EventFormComponent.prototype, "locationRef", void 0);
    EventFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'event-form',
            template: __webpack_require__(903),
            styles: ["\n        .sebm-google-map-container {\n            height: 350px;\n        }\n  "]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("currentUser")), 
        __metadata('design:paramtypes', [String, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["MapsAPILoader"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["MapsAPILoader"]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _h) || Object])
    ], EventFormComponent);
    return EventFormComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/event-form.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventListComponent = (function () {
    function EventListComponent(apiService, router, activatedRoute, toastManager) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastManager = toastManager;
        this.pageLoadingComplete = false;
        this.orderProperty = "title";
        this.direction = "asc";
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.getTotalPageCount();
    };
    EventListComponent.prototype.getTotalPageCount = function () {
        var _this = this;
        this.apiService
            .get("/events/count")
            .subscribe(function (response) {
            _this.eventsCount = response.json().count;
            _this.fetchPage({ pageNumber: 1, limit: 10 });
        }, function (error) {
            _this.toastManager.error("Failed to get events count", "Failure");
        });
    };
    EventListComponent.prototype.fetchPage = function (parameters) {
        var _this = this;
        this.updateCurrentPage(parameters.pageNumber);
        this.updateLimit(parameters.limit);
        this.apiService
            .get("/events/with_relations", this.appendQueryParameters(parameters))
            .subscribe(function (response) {
            _this.events = response.json();
            _this.setPageLoaded(true);
        }, function (error) {
            _this.toastManager.error("Failed to get event page ", "Failure");
        });
    };
    EventListComponent.prototype.updateCurrentPage = function (page) {
        this.page = page;
    };
    EventListComponent.prototype.updateLimit = function (limit) {
        this.limit = limit;
    };
    EventListComponent.prototype.appendQueryParameters = function (queryParameters) {
        var parameters = [];
        parameters.push({ key: "page", value: queryParameters.pageNumber });
        parameters.push({ key: "limit", value: queryParameters.limit });
        parameters.push({ key: "orderBy", value: this.orderProperty });
        parameters.push({ key: "direction", value: this.direction });
        return parameters;
    };
    EventListComponent.prototype.setPageLoaded = function (completionStatus) {
        this.pageLoadingComplete = completionStatus;
    };
    EventListComponent.prototype.createEvent = function () {
        this.router.navigate(['./', "add"], { relativeTo: this.activatedRoute });
    };
    EventListComponent.prototype.removeFromList = function (removedEvent) {
        this.events.forEach(function (item) {
            if (item.event.id === removedEvent.id) {
                item.event.deleted = true;
            }
        });
    };
    EventListComponent.prototype.orderBy = function (element) {
        var direction = element.getAttribute("dir");
        element.setAttribute("dir", direction === "up" ? "down" : "up");
        this.orderProperty = element.title;
        this.direction = direction === "up" ? "desc" : "asc";
        this.fetchPage({
            pageNumber: this.page,
            limit: this.limit,
            orderBy: this.orderProperty,
            direction: this.direction
        });
    };
    EventListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'event-list',
            template: __webpack_require__(905)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === 'function' && _d) || Object])
    ], EventListComponent);
    return EventListComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/event-list.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = (function () {
    function EventsComponent() {
        this.pageHeader = "Events";
    }
    EventsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "events",
            template: "<h3>{{pageHeader}}</h3><router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], EventsComponent);
    return EventsComponent;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/events.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_validators_order_index_validator__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LevelFormComponent = (function () {
    function LevelFormComponent(router, activatedRoute, apiService, formBuilder, toastsManager) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastsManager = toastsManager;
        this.pageLoadingComplete = false;
        this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        this.level = {
            name: undefined,
            deleted: [false],
            orderIndex: undefined
        };
    }
    LevelFormComponent.prototype.ngOnInit = function () {
        if (this.newLevel()) {
            this.initForm();
        }
        else {
            this.loadLevel();
        }
    };
    LevelFormComponent.prototype.loadLevel = function () {
        var _this = this;
        this.apiService
            .get("/levels/".concat(this.id.toString()))
            .subscribe(function (response) {
            _this.level = response.json();
            _this.initForm();
        }, function (error) {
            _this.toastsManager.error("Failed to retrieve user with id ".concat(_this.id.toString()), "Failure");
        });
    };
    LevelFormComponent.prototype.initForm = function () {
        this.levelForm = this.formBuilder.group({
            name: [this.level.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            orderIndex: [this.level.orderIndex, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__common_validators_order_index_validator__["a" /* orderIndexValidator */]])]
        });
        this.pageLoadingComplete = true;
    };
    LevelFormComponent.prototype.newLevel = function () {
        return isNaN(this.id) ? true : false;
    };
    LevelFormComponent.prototype.onSubmit = function () {
        if (this.newLevel()) {
            this.saveLevel();
        }
        else {
            this.updateLevel();
        }
    };
    LevelFormComponent.prototype.saveLevel = function () {
        var _this = this;
        this.apiService
            .post("/levels", this.levelForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["levels"]);
            _this.toastsManager
                .success("Level ".concat(_this.levelForm.value.name).concat(" has been created successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to save ".concat(_this.levelForm.value.name), "Failure");
        });
    };
    LevelFormComponent.prototype.updateLevel = function () {
        var _this = this;
        this.apiService
            .put("/levels/".concat(this.id.toString()), this.levelForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["levels"]);
            _this.toastsManager
                .success("Level ".concat(_this.levelForm.value.name).concat(" has been updated successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to update ".concat(_this.levelForm.value.name), "Failure");
        });
    };
    LevelFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-level-form',
            template: __webpack_require__(907),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _e) || Object])
    ], LevelFormComponent);
    return LevelFormComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/level-form.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LevelListComponent = (function () {
    function LevelListComponent(apiService, toastsManager, authenticationService, superAdminRole) {
        this.apiService = apiService;
        this.toastsManager = toastsManager;
        this.authenticationService = authenticationService;
        this.superAdminRole = superAdminRole;
        this.pageLoadingComplete = false;
    }
    LevelListComponent.prototype.ngOnInit = function () {
        this.fetchLevels([new __WEBPACK_IMPORTED_MODULE_1__services_api_service__["b" /* QueryParameter */]("withDeleted", this.authenticationService.hasRole(this.superAdminRole))]);
    };
    LevelListComponent.prototype.fetchLevels = function (parameters) {
        var _this = this;
        this.apiService
            .get("/levels", parameters)
            .subscribe(function (response) {
            _this.levels = response.json();
            _this.setPageLoaded(true);
        }, function (error) {
            _this.setPageLoaded(true);
            _this.toastsManager.error("Failed to get level list", "Failure");
        });
    };
    LevelListComponent.prototype.setPageLoaded = function (completionStatus) {
        this.pageLoadingComplete = completionStatus;
    };
    LevelListComponent.prototype.markLevelAsDeleted = function (id) {
        this.levels.map(function (level) {
            if (level.id === id) {
                level.deleted = true;
            }
        });
    };
    LevelListComponent.prototype.restoreLevel = function (id) {
        this.levels.map(function (level) {
            if (level.id === id) {
                level.deleted = false;
            }
        });
    };
    LevelListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-level-list',
            template: __webpack_require__(909),
            styles: []
        }),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("superAdminRole")), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object, String])
    ], LevelListComponent);
    return LevelListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/level-list.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LevelsComponent = (function () {
    function LevelsComponent() {
        this.pageHeader = "Levels";
    }
    LevelsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-levels',
            template: "<h3>{{pageHeader}}</h3><router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], LevelsComponent);
    return LevelsComponent;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/levels.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LoginComponent = (function () {
    function LoginComponent(router, fb, apiService, currentUser, toastsManager, containerRef) {
        this.router = router;
        this.apiService = apiService;
        this.currentUser = currentUser;
        this.toastsManager = toastsManager;
        this.pageLoadingComplete = true;
        this.loginForm = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.pageLoadingComplete = false;
        this.apiService
            .post("/authenticate/login", this.loginForm.value)
            .subscribe(function (response) {
            var user = response.json();
            localStorage.setItem(_this.currentUser, JSON.stringify(user));
            _this.router.navigate(["users"]);
            _this.pageLoadingComplete = true;
            _this.toastsManager.success("You're logged in as ".concat(user.username), "Success");
        }, function (err) {
            _this.toastsManager.error("Failed to authorize ".concat(_this.loginForm.value.username), "Failure");
            _this.pageLoadingComplete = true;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(910),
            styles: [__webpack_require__(898)]
        }),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("currentUser")), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, String, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _e) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/login.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_attachment_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_validators_order_index_validator__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrganizationFormComponent = (function () {
    function OrganizationFormComponent(router, activatedRoute, apiService, attachmentService, formBuilder, toastsManager) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.attachmentService = attachmentService;
        this.formBuilder = formBuilder;
        this.toastsManager = toastsManager;
        this.pageLoadingComplete = false;
        this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        this.organization = {
            name: undefined,
            description: undefined,
            attachmentId: undefined,
            orderIndex: undefined
        };
    }
    OrganizationFormComponent.prototype.ngOnInit = function () {
        if (this.newOrganization()) {
            this.initForm();
        }
        else {
            this.loadOrganization();
        }
    };
    OrganizationFormComponent.prototype.loadOrganization = function () {
        var _this = this;
        this.apiService
            .get("/organizations/".concat(this.id.toString()))
            .subscribe(function (response) {
            _this.organization = response.json();
            _this.attachmentId = _this.organization.attachmentId;
            _this.initForm();
        }, function (error) {
            _this.toastsManager.error("Failed to retrieve user with id ".concat(_this.id.toString()), "Failure");
        });
    };
    OrganizationFormComponent.prototype.initForm = function () {
        this.organizationForm = this.formBuilder.group({
            name: [this.organization.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            description: [this.organization.description],
            orderIndex: [this.organization.orderIndex, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__common_validators_order_index_validator__["a" /* orderIndexValidator */]])],
            attachmentId: [this.organization.attachmentId]
        });
        this.pageLoadingComplete = true;
    };
    OrganizationFormComponent.prototype.newOrganization = function () {
        return isNaN(this.id) ? true : false;
    };
    OrganizationFormComponent.prototype.handleSelection = function (fileInput) {
        var _this = this;
        if (!fileInput.files) {
            return;
        }
        var selectedFile = fileInput.files[0];
        this.attachmentService
            .upload(selectedFile)
            .subscribe(function (response) {
            _this.toastsManager.success("Attachment has been uploaded ");
            if (_this.attachmentId) {
                _this.removePreviouslyUploaded();
            }
            _this.attachmentId = response.json();
        }, function (error) {
            _this.toastsManager.error("Failed to upload attachment ", selectedFile.name);
        });
    };
    OrganizationFormComponent.prototype.removePreviouslyUploaded = function () {
        var _this = this;
        this.apiService
            .delete("/attachments/".concat(this.attachmentId.toString()))
            .subscribe(function (response) { }, function (error) {
            _this.toastsManager.warning("Failed to remove previously uploaded file", "Unused upload removal");
        });
    };
    OrganizationFormComponent.prototype.getAttachmentUrl = function () {
        return this.attachmentService.getAttachmentUrl(this.attachmentId);
    };
    OrganizationFormComponent.prototype.onSubmit = function () {
        this.setAttachment();
        if (this.newOrganization()) {
            this.saveOrganization();
        }
        else {
            this.updateOrganization();
        }
    };
    OrganizationFormComponent.prototype.saveOrganization = function () {
        var _this = this;
        this.apiService
            .post("/organizations", this.organizationForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["organizations"]);
            _this.toastsManager
                .success("Organization ".concat(_this.organizationForm.value.name).concat(" has been created successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to save ".concat(_this.organizationForm.value.name), "Failure");
        });
    };
    OrganizationFormComponent.prototype.updateOrganization = function () {
        var _this = this;
        this.apiService
            .put("/organizations/".concat(this.id.toString()), this.organizationForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["organizations"]);
            _this.toastsManager
                .success("Organization ".concat(_this.organizationForm.value.name).concat(" has been updated successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to update ".concat(_this.organizationForm.value.name), "Failure");
        });
    };
    OrganizationFormComponent.prototype.setAttachment = function () {
        this.organizationForm.controls["attachmentId"].setValue(this.attachmentId);
    };
    OrganizationFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'organization-form',
            template: __webpack_require__(911)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_attachment_service__["a" /* AttachmentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_attachment_service__["a" /* AttachmentService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _f) || Object])
    ], OrganizationFormComponent);
    return OrganizationFormComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/organization-form.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationListComponent = (function () {
    function OrganizationListComponent(apiService, router, activatedRoute, toastsManager) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastsManager = toastsManager;
        this.pageLoadingComplete = false;
    }
    OrganizationListComponent.prototype.ngOnInit = function () {
        this.fetchOrganizations();
    };
    OrganizationListComponent.prototype.fetchOrganizations = function () {
        var _this = this;
        this.apiService
            .get("/organizations")
            .subscribe(function (response) {
            _this.organizations = response.json();
            _this.setPageLoaded(true);
        }, function (error) {
            _this.setPageLoaded(true);
            _this.toastsManager.error("Failed to get organization list", "Failure");
        });
    };
    OrganizationListComponent.prototype.setPageLoaded = function (completionStatus) {
        this.pageLoadingComplete = completionStatus;
    };
    OrganizationListComponent.prototype.createOrganization = function () {
        this.router.navigate(['./', "add"], { relativeTo: this.activatedRoute });
    };
    OrganizationListComponent.prototype.removeFromList = function (removedOrganization) {
        this.organizations = this.organizations.filter(function (organization) {
            return removedOrganization.id !== organization.id;
        });
    };
    OrganizationListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'organizations',
            template: __webpack_require__(913)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _d) || Object])
    ], OrganizationListComponent);
    return OrganizationListComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/organization-list.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrganizationsComponent = (function () {
    function OrganizationsComponent() {
        this.pageHeader = "Organizations";
    }
    OrganizationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'organizations',
            template: "<h3>{{pageHeader}}</h3><router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], OrganizationsComponent);
    return OrganizationsComponent;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/organizations.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_validators_order_index_validator__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegionFormComponent = (function () {
    function RegionFormComponent(router, activatedRoute, apiService, formBuilder, toastsManager) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastsManager = toastsManager;
        this.pageLoadingComplete = false;
        this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        this.region = {
            name: undefined,
            deleted: [false],
            orderIndex: undefined
        };
    }
    RegionFormComponent.prototype.ngOnInit = function () {
        if (this.newRegion()) {
            this.initForm();
        }
        else {
            this.loadRegion();
        }
    };
    RegionFormComponent.prototype.loadRegion = function () {
        var _this = this;
        this.apiService
            .get("/regions/".concat(this.id.toString()))
            .subscribe(function (response) {
            _this.region = response.json();
            _this.initForm();
        }, function (error) {
            _this.toastsManager.error("Failed to retrieve user with id ".concat(_this.id.toString()), "Failure");
        });
    };
    RegionFormComponent.prototype.initForm = function () {
        this.regionForm = this.formBuilder.group({
            name: [this.region.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            orderIndex: [this.region.orderIndex, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__common_validators_order_index_validator__["a" /* orderIndexValidator */]])]
        });
        this.pageLoadingComplete = true;
    };
    RegionFormComponent.prototype.newRegion = function () {
        return isNaN(this.id) ? true : false;
    };
    RegionFormComponent.prototype.onSubmit = function () {
        if (this.newRegion()) {
            this.saveRegion();
        }
        else {
            this.updateRegion();
        }
    };
    RegionFormComponent.prototype.saveRegion = function () {
        var _this = this;
        this.apiService
            .post("/regions", this.regionForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["regions"]);
            _this.toastsManager
                .success("Region ".concat(_this.regionForm.value.name).concat(" has been created successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to save ".concat(_this.regionForm.value.name), "Failure");
        });
    };
    RegionFormComponent.prototype.updateRegion = function () {
        var _this = this;
        this.apiService
            .put("/regions/".concat(this.id.toString()), this.regionForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["regions"]);
            _this.toastsManager
                .success("Region ".concat(_this.regionForm.value.name).concat(" has been updated successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to update ".concat(_this.regionForm.value.name), "Failure");
        });
    };
    RegionFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-region-form',
            template: __webpack_require__(914)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _e) || Object])
    ], RegionFormComponent);
    return RegionFormComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/region-form.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegionListComponent = (function () {
    function RegionListComponent(apiService, toastsManager) {
        this.apiService = apiService;
        this.toastsManager = toastsManager;
        this.pageLoadingComplete = false;
    }
    RegionListComponent.prototype.ngOnInit = function () {
        this.fetchLevels();
    };
    RegionListComponent.prototype.fetchLevels = function () {
        var _this = this;
        this.apiService
            .get("/regions")
            .subscribe(function (response) {
            _this.regions = response.json();
            _this.setPageLoaded(true);
        }, function (error) {
            _this.setPageLoaded(true);
            _this.toastsManager.error("Failed to get level list", "Failure");
        });
    };
    RegionListComponent.prototype.setPageLoaded = function (completionStatus) {
        this.pageLoadingComplete = completionStatus;
    };
    RegionListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-region-list',
            template: __webpack_require__(916),
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _b) || Object])
    ], RegionListComponent);
    return RegionListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/region-list.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegionsComponent = (function () {
    function RegionsComponent() {
        this.pageHeader = "Regions";
    }
    RegionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-regions',
            template: "<h3>{{pageHeader}}</h3><router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], RegionsComponent);
    return RegionsComponent;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/regions.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentService; });
var AttachmentService = (function () {
    function AttachmentService(apiUrl, http) {
        this.apiUrl = apiUrl;
        this.http = http;
        this.attachmentApiUrl = "/attachments";
    }
    AttachmentService.prototype.upload = function (multipartData) {
        var formData = new FormData();
        formData.append('file', multipartData, multipartData.name);
        return this.http.post(this.apiUrl.concat(this.attachmentApiUrl), formData);
    };
    AttachmentService.prototype.getAttachmentUrl = function (id) {
        return this.apiUrl.concat(this.attachmentApiUrl).concat("/").concat(id.toString()).concat("?size=100");
    };
    return AttachmentService;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/attachment.service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function passwordValidator(control) {
    if (!control.parent) {
        return;
    }
    var password = control.parent.controls["password"];
    var confirmedPassword = control.parent.controls["confirmedPassword"];
    if (password.dirty && confirmedPassword.dirty && password.value !== confirmedPassword.value) {
        return { passwordMismatch: true };
    }
    if (password.hasError("passwordMismatch")) {
        password.setErrors(null, { emitEvent: true });
    }
    if (confirmedPassword.hasError("passwordMismatch")) {
        confirmedPassword.setErrors(null, { emitEvent: true });
    }
}
var UserFormComponent = (function () {
    function UserFormComponent(router, activatedRoute, apiService, authenticationService, formBuilder, toastsManager) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.toastsManager = toastsManager;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.pageLoadingComplete = false;
        this.user = {};
        this.password = {};
        this.opened = false;
        this.allRoles = [
            { name: "ADMIN", authority: "ROLE_ADMIN", selected: false },
            { name: "USER", authority: "ROLE_USER", selected: false },
            { name: "GUEST", authority: "ROLE_GUEST", selected: false }
        ];
        this.additionalUsernameErrors = {
            invalidEmail: false,
            alreadyExists: false
        };
        this.additionalPasswordErrors = {
            checked: true
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.newUser()) {
                _this.initUser();
                _this.initUserCreationFrom();
            }
            else {
                _this.loadUser();
            }
        });
    };
    UserFormComponent.prototype.newUser = function () {
        return isNaN(this.id) ? true : false;
    };
    UserFormComponent.prototype.loadUser = function () {
        var _this = this;
        this.apiService
            .get("/users/".concat(this.id.toString()))
            .subscribe(function (response) {
            _this.user = response.json();
            _this.initUserEditingForm();
            _this.initPasswordResettingForm();
        }, function (error) {
            _this.toastsManager.error("Failed to retrieve user with id ".concat(_this.id.toString()), "Failure");
        });
    };
    UserFormComponent.prototype.initUser = function () {
        this.user = {
            username: null,
            password: null,
            confirmedPassword: null,
            enabled: true,
            roles: []
        };
    };
    UserFormComponent.prototype.initUserCreationFrom = function () {
        this.userForm = this.formBuilder.group({
            username: [this.user.username, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, passwordValidator.bind(this)])],
            confirmedPassword: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, passwordValidator.bind(this)])],
            enabled: [this.user.enabled],
            roles: []
        });
        this.passwordInput = this.userForm.controls["password"];
        this.confirmedPasswordInput = this.userForm.controls["confirmedPassword"];
        // this.pageLoadingComplete = true;
        this.setPageLoadingStatus(true);
        this.selectDefaultRole();
    };
    UserFormComponent.prototype.selectDefaultRole = function () {
        this.allRoles[1].selected = true;
    };
    UserFormComponent.prototype.initUserEditingForm = function () {
        this.userForm = this.formBuilder.group({
            username: [this.user.username, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            enabled: [this.user.enabled],
            roles: []
        });
        this.initRoles();
        // this.pageLoadingComplete = true;
    };
    UserFormComponent.prototype.setPageLoadingStatus = function (status) {
        this.pageLoadingComplete = status;
    };
    UserFormComponent.prototype.initRoles = function () {
        var _this = this;
        this.allRoles.forEach(function (role) {
            if (_this.user.roles.find(function (userRole) { return userRole.authority === role.authority; })) {
                role.selected = true;
            }
        });
    };
    UserFormComponent.prototype.onSubmit = function () {
        this.prepareRoles();
        if (this.newUser()) {
            this.saveUser();
        }
        else {
            this.updateUser();
        }
    };
    UserFormComponent.prototype.prepareRoles = function () {
        var _this = this;
        this.user.roles = [];
        this.allRoles.forEach(function (role) {
            if (role.selected)
                _this.user.roles.push({ authority: role.authority });
        });
        this.userForm.controls["roles"].setValue(this.user.roles);
    };
    UserFormComponent.prototype.toggleRole = function (role) {
        role.selected = !role.selected;
    };
    UserFormComponent.prototype.saveUser = function () {
        var _this = this;
        this.apiService
            .post("/users", this.userForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["users"]);
            _this.toastsManager
                .success("User ".concat(_this.userForm.value.username).concat(" has been created successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to save ".concat(_this.userForm.value.username), "Failure");
        });
    };
    UserFormComponent.prototype.updateUser = function () {
        var _this = this;
        this.apiService
            .put("/users/".concat(this.id.toString()), this.userForm.value)
            .subscribe(function (response) {
            _this.router.navigate(["users"]);
            _this.toastsManager
                .success("User ".concat(_this.userForm.value.username).concat(" has been updated successfully."), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to update ".concat(_this.userForm.value.username), "Failure");
        });
    };
    UserFormComponent.prototype.validateUsername = function (usernameInput) {
        var _this = this;
        var username = usernameInput.value;
        this.additionalUsernameErrors.invalidEmail = !this.emailRegex.test(username);
        this.apiService
            .get("/users/exists", [new __WEBPACK_IMPORTED_MODULE_2__services_api_service__["b" /* QueryParameter */]("username", username)])
            .subscribe(function (response) {
            var json = response.json();
            _this.additionalUsernameErrors.alreadyExists = _this.newUser() && json.exists;
        }, function (error) {
            _this.toastsManager.error("Failed to check whether or not user with specified email address exists", "Failure");
        });
    };
    UserFormComponent.prototype.openDialog = function () {
        this.toggleDialog();
    };
    UserFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.apiService
            .post("/users/" + this.id + "/reset_password", this.passwordResettingForm.value.password)
            .subscribe(function (response) {
            _this.toastsManager.success("Password has been reset successfully", "Success");
            _this.toggleDialog();
        }, function (error) {
            _this.toastsManager.warning("Failed to reset password", "Unsuccessful attempt");
            _this.toggleDialog();
        });
    };
    UserFormComponent.prototype.initPasswordResettingForm = function () {
        this.passwordResettingForm = this.formBuilder.group({
            password: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, passwordValidator.bind(this)])],
            confirmedPassword: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, passwordValidator.bind(this)])]
        });
        if (!this.hasRole("ROLE_SUPER_ADMIN") && this.hasPermission()) {
            this.passwordResettingForm.addControl("current", new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]));
        }
        this.newPasswordInput = this.passwordResettingForm.controls["password"];
        this.confirmedResetPasswordInput = this.passwordResettingForm.controls["confirmedPassword"];
        this.setPageLoadingStatus(true);
    };
    UserFormComponent.prototype.checkCurrentPassword = function () {
        var _this = this;
        this.apiService
            .post("/users/" + this.id + "/check_password", this.passwordResettingForm.value.current)
            .subscribe(function (response) {
            _this.additionalPasswordErrors.checked = !_this.newUser() && response.json().checked;
        }, function (error) {
            _this.toastsManager.warning("Failed to check current password", "Unsuccessful attempt");
        });
    };
    UserFormComponent.prototype.toggleDialog = function () {
        this.opened = !this.opened;
    };
    UserFormComponent.prototype.hasRole = function (role) {
        return this.authenticationService.hasRole(role);
    };
    UserFormComponent.prototype.hasPermission = function () {
        return this.authenticationService.getCurrentUserName() === this.user.username;
    };
    UserFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(918)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _f) || Object])
    ], UserFormComponent);
    return UserFormComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/user-form.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(apiService, toastsManager) {
        this.apiService = apiService;
        this.toastsManager = toastsManager;
        this.pageLoadingComplete = false;
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.fetchUsers();
    };
    UserListComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.apiService
            .get("/users")
            .subscribe(function (response) {
            _this.users = response.json();
            _this.setPageLoaded(true);
        }, function (error) {
            _this.setPageLoaded(true);
            _this.toastsManager.error("Failed to get user list", "Failure");
        });
    };
    UserListComponent.prototype.setPageLoaded = function (completionStatus) {
        this.pageLoadingComplete = completionStatus;
    };
    UserListComponent.prototype.removeFromList = function (removedUser) {
        this.users = this.users.filter(function (user) {
            return removedUser.id !== user.id;
        });
    };
    UserListComponent.prototype.getUsers = function () {
        return this.users;
    };
    UserListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-list',
            template: "<div spinner [spinnerClasses]=\"['spinner-lg']\" *ngIf=\"!pageLoadingComplete\"></div>\n                <div *ngIf=\"pageLoadingComplete\">\n                    <p><a [routerLink]=\"['./add']\" class=\"btn btn-outline\">Create User</a></p>\n                    \n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th></th>\n                                <th>Id</th>\n                                <th>Name</th>\n                                <th>Roles</th>\n                                <th>External</th>\n                                <th>Enabled</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let user of users\" user-item [user]=\"user\" (onUserRemoval)=\"removeFromList($event)\"></tr>\n                        </tbody>\n                    </table>\n                </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _b) || Object])
    ], UserListComponent);
    return UserListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/user-list.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
        this.pageHeader = "Users";
    }
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'users',
            template: "<h3>{{pageHeader}}</h3><router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/users.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    environmentName: 'development',
    apiUrl: 'http://176.9.51.110:28081/v1',
    currentUser: "currentUser",
    sessionExpirationTimeSeconds: 600,
    userRole: 'ROLE_USER',
    adminRole: 'ROLE_ADMIN',
    superAdminRole: 'ROLE_SUPER_ADMIN'
};
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/environment.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var AuthenticationService = (function () {
    function AuthenticationService(apiService, currentUser) {
        this.apiService = apiService;
        this.currentUser = currentUser;
    }
    AuthenticationService.prototype.getCurrentUser = function () {
        return this.apiService.get("/users/user");
    };
    AuthenticationService.prototype.getCurrentUserName = function () {
        var user = JSON.parse(localStorage.getItem(this.currentUser));
        return user ? user.username : "";
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return localStorage.getItem(this.currentUser) !== null;
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(this.currentUser);
        return this.apiService.post("/authenticate/logout");
    };
    AuthenticationService.prototype.getCurrentUserRoles = function () {
        return localStorage.getItem(this.currentUser) === null ? [] : JSON.parse(localStorage.getItem(this.currentUser)).authorities;
    };
    AuthenticationService.prototype.hasRole = function (role) {
        return this.getCurrentUserRoles().find(function (authority) { return authority.authority === role; }) !== undefined;
    };
    return AuthenticationService;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/authentication.service.js.map

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 587;


/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(712);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/main.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = (function () {
    function AppComponent(authenticationService, currentUser, toastsManager, containerRef) {
        this.authenticationService = authenticationService;
        this.currentUser = currentUser;
        this.toastsManager = toastsManager;
        this.toastsManager.setRootViewContainerRef(containerRef);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.performLoginCheck();
    };
    AppComponent.prototype.performLoginCheck = function () {
        var _this = this;
        if (this.authenticationService.isLoggedIn()) {
            return;
        }
        this.authenticationService.getCurrentUser()
            .subscribe(function (response) {
            localStorage.setItem(_this.currentUser, JSON.stringify(response.json()));
        }, function (error) {
            localStorage.removeItem(_this.currentUser);
            var json = error.json();
            if (json.message === "USER_IS_NOT_AUTHORIZED") {
                _this.toastsManager.warning("Please sign in to proceed.", "Authorization check");
            }
            else {
                _this.toastsManager.error("Failed to get current user.", "Error");
            }
        });
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ncfc',
            template: __webpack_require__(899)
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("currentUser")), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, String, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/app.component.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clarity_angular__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clarity_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_clarity_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__organizations_organization_list_organization_list_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__organizations_organization_form_organization_form_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__categories_categories_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__categories_category_list_category_list_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__categories_category_form_category_form_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users_user_form_user_form_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__users_users_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_user_list_user_list_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_user_list_user_item_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environments_environment__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__levels_levels_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__regions_region_list_region_list_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__regions_region_form_region_form_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__organizations_organizations_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__levels_level_list_level_list_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__levels_level_form_level_form_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__regions_regions_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_authentication_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_protected_route__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_cors_service__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__common_spinner_spinner_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__organizations_organization_item_organization_item_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_attachment_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__events_events_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__events_event_list_event_list_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__events_event_form_event_form_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__events_event_item_event_item_component__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__common_pipes_trimmer_pipe__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_google_maps_core__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__common_datepicker_datepicker_directive__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__common_pager_pager_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__categories_category_item_category_item_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__levels_level_item_level_item_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__regions_region_item_region_item_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__common_activity_tracker_activity_tracker_directive__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__events_event_form_datepicker_component__ = __webpack_require__(721);
/* unused harmony export apiServiceFactory */
/* unused harmony export attachmentServiceFactory */
/* unused harmony export authenticationServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















































function apiServiceFactory(apiUrl, http) {
    return new __WEBPACK_IMPORTED_MODULE_29__services_api_service__["a" /* ApiService */](apiUrl, http);
}
function attachmentServiceFactory(apiUrl, http) {
    return new __WEBPACK_IMPORTED_MODULE_35__services_attachment_service__["a" /* AttachmentService */](apiUrl, http);
}
function authenticationServiceFactory(apiService, currentUser) {
    return new __WEBPACK_IMPORTED_MODULE_28__services_authentication_service__["a" /* AuthenticationService */](apiService, currentUser);
}
var options = {
    animate: 'fade',
    showCloseButton: true,
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__organizations_organizations_component__["a" /* OrganizationsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__categories_category_list_category_list_component__["a" /* CategoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__organizations_organizations_component__["a" /* OrganizationsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__organizations_organization_list_organization_list_component__["a" /* OrganizationListComponent */],
                __WEBPACK_IMPORTED_MODULE_34__organizations_organization_item_organization_item_component__["a" /* OrganizationItemComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__organizations_organization_form_organization_form_component__["a" /* OrganizationFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__categories_category_form_category_form_component__["a" /* CategoryFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__users_user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__users_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__users_user_list_user_item_component__["a" /* UserItemComponent */],
                __WEBPACK_IMPORTED_MODULE_36__events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_37__events_event_list_event_list_component__["a" /* EventListComponent */],
                __WEBPACK_IMPORTED_MODULE_39__events_event_item_event_item_component__["a" /* EventItemComponent */],
                __WEBPACK_IMPORTED_MODULE_38__events_event_form_event_form_component__["a" /* EventFormComponent */],
                __WEBPACK_IMPORTED_MODULE_21__levels_levels_component__["a" /* LevelsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__levels_level_list_level_list_component__["a" /* LevelListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__levels_level_form_level_form_component__["a" /* LevelFormComponent */],
                __WEBPACK_IMPORTED_MODULE_27__regions_regions_component__["a" /* RegionsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__regions_region_list_region_list_component__["a" /* RegionListComponent */],
                __WEBPACK_IMPORTED_MODULE_23__regions_region_form_region_form_component__["a" /* RegionFormComponent */],
                __WEBPACK_IMPORTED_MODULE_32__common_spinner_spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_40__common_pipes_trimmer_pipe__["a" /* Trimmer */],
                __WEBPACK_IMPORTED_MODULE_42__common_datepicker_datepicker_directive__["a" /* NcfcDatepicker */],
                __WEBPACK_IMPORTED_MODULE_43__common_pager_pager_component__["a" /* NcfcPagerComponent */],
                __WEBPACK_IMPORTED_MODULE_44__categories_category_item_category_item_component__["a" /* CategoryItemComponent */],
                __WEBPACK_IMPORTED_MODULE_45__levels_level_item_level_item_component__["a" /* LevelItemComponent */],
                __WEBPACK_IMPORTED_MODULE_46__regions_region_item_region_item_component__["a" /* RegionItemComponent */],
                __WEBPACK_IMPORTED_MODULE_47__common_activity_tracker_activity_tracker_directive__["a" /* ActivityTracker */],
                __WEBPACK_IMPORTED_MODULE_48__events_event_form_datepicker_component__["a" /* DatepickerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_33_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(options),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_clarity_angular__["ClarityModule"].forChild(),
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_41_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyA1vysDtyLk9sZz-QL0B26zmDF4rTlpG1Q",
                    libraries: ["places"]
                })
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["HashLocationStrategy"] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* BrowserXhr */], useClass: __WEBPACK_IMPORTED_MODULE_31__services_cors_service__["a" /* CorsService */] },
                { provide: 'apiUrl', useValue: __WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].apiUrl },
                { provide: 'currentUser', useValue: __WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].currentUser },
                { provide: 'sessionExpirationTime', useValue: __WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].sessionExpirationTimeSeconds },
                { provide: 'userRole', useValue: __WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].userRole },
                { provide: 'adminRole', useValue: __WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].adminRole },
                { provide: 'superAdminRole', useValue: __WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].superAdminRole },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_29__services_api_service__["a" /* ApiService */],
                    useFactory: apiServiceFactory,
                    deps: ['apiUrl', __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_35__services_attachment_service__["a" /* AttachmentService */],
                    useFactory: attachmentServiceFactory,
                    deps: ['apiUrl', __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_28__services_authentication_service__["a" /* AuthenticationService */],
                    useFactory: authenticationServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_29__services_api_service__["a" /* ApiService */], 'currentUser']
                },
                { provide: __WEBPACK_IMPORTED_MODULE_30__app_protected_route__["a" /* RouteProtector */], useClass: __WEBPACK_IMPORTED_MODULE_30__app_protected_route__["a" /* RouteProtector */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/app.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organizations_organizations_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__levels_levels_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__regions_regions_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_events_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__organizations_organization_routes__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categories_category_routes__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__regions_region_routes__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__levels_level_routes__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_user_routes__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__events_event_routes__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_protected_route__ = __webpack_require__(381);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });















var applicationRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    {
        path: 'categories',
        component: __WEBPACK_IMPORTED_MODULE_2__categories_categories_component__["a" /* CategoriesComponent */],
        children: __WEBPACK_IMPORTED_MODULE_9__categories_category_routes__["a" /* CATEGORY_ROUTES */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__app_protected_route__["a" /* RouteProtector */]]
    },
    {
        path: 'organizations',
        component: __WEBPACK_IMPORTED_MODULE_3__organizations_organizations_component__["a" /* OrganizationsComponent */],
        children: __WEBPACK_IMPORTED_MODULE_8__organizations_organization_routes__["a" /* ORGANIZATION_ROUTES */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__app_protected_route__["a" /* RouteProtector */]]
    },
    {
        path: 'levels',
        component: __WEBPACK_IMPORTED_MODULE_5__levels_levels_component__["a" /* LevelsComponent */],
        children: __WEBPACK_IMPORTED_MODULE_11__levels_level_routes__["a" /* LEVEL_ROUTES */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__app_protected_route__["a" /* RouteProtector */]]
    },
    {
        path: 'regions',
        component: __WEBPACK_IMPORTED_MODULE_6__regions_regions_component__["a" /* RegionsComponent */],
        children: __WEBPACK_IMPORTED_MODULE_10__regions_region_routes__["a" /* REGION_ROUTES */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__app_protected_route__["a" /* RouteProtector */]]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_4__users_users_component__["a" /* UsersComponent */],
        children: __WEBPACK_IMPORTED_MODULE_12__users_user_routes__["a" /* USER_ROUTES */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__app_protected_route__["a" /* RouteProtector */]]
    },
    {
        path: 'events',
        component: __WEBPACK_IMPORTED_MODULE_7__events_events_component__["a" /* EventsComponent */],
        children: __WEBPACK_IMPORTED_MODULE_13__events_event_routes__["a" /* EVENT_ROUTES */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__app_protected_route__["a" /* RouteProtector */]]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(applicationRoutes);
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/app.routing.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CategoryItemComponent = (function () {
    function CategoryItemComponent(apiUrl, apiService, toastsManager) {
        this.apiUrl = apiUrl;
        this.apiService = apiService;
        this.toastsManager = toastsManager;
        this.opened = false;
        this.onRemoval = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CategoryItemComponent.prototype.confirm = function (event) {
        event.preventDefault();
        this.toggleDialog();
    };
    CategoryItemComponent.prototype.toggleDialog = function () {
        this.opened = !this.opened;
    };
    CategoryItemComponent.prototype.deleteCategory = function () {
        var _this = this;
        this.apiService
            .delete("/categories/".concat(this.category.id))
            .subscribe(function (response) {
            _this.onRemoval.emit(_this.category);
            _this.toggleDialog();
            _this.toastsManager.success(_this.category.name.concat(" has been deleted"), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to delete ".concat(_this.category.name), "Failure");
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CategoryItemComponent.prototype, "category", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CategoryItemComponent.prototype, "onRemoval", void 0);
    CategoryItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[category-item]',
            template: __webpack_require__(901)
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("apiUrl")), 
        __metadata('design:paramtypes', [String, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _c) || Object])
    ], CategoryItemComponent);
    return CategoryItemComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/category-item.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_list_category_list_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_form_category_form_component__ = __webpack_require__(383);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORY_ROUTES; });


var CATEGORY_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__category_list_category_list_component__["a" /* CategoryListComponent */], pathMatch: 'full' },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__category_form_category_form_component__["a" /* CategoryFormComponent */] }
];
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/category.routes.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityTracker; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ActivityTracker = (function () {
    function ActivityTracker(expirationTime, authenticationService, toastManager, router, hostElement) {
        this.expirationTime = expirationTime;
        this.authenticationService = authenticationService;
        this.toastManager = toastManager;
        this.router = router;
        this.hostElement = hostElement;
        this.CHECK_INTERVAL_MSEC = 1000;
    }
    ActivityTracker.prototype.ngOnInit = function () {
        this.resetExpirationTime();
        this.activityObservable = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](this.expirationTime);
        this.subscribe();
        this.countDown();
        this.trackUserActivity();
    };
    ActivityTracker.prototype.subscribe = function () {
        var _this = this;
        this.activityObservable.subscribe(function (timeToLogout) {
            if (timeToLogout === 0 && _this.authenticationService.isLoggedIn()) {
                _this.logout();
            }
        });
    };
    ;
    ActivityTracker.prototype.countDown = function () {
        var _this = this;
        this.intervalPromise = window.setInterval(function () {
            _this.activityObservable.next(--_this.timeToLogout);
        }, this.CHECK_INTERVAL_MSEC);
    };
    ActivityTracker.prototype.trackUserActivity = function () {
        this.trackMouseMove();
        this.trackKeyUp();
    };
    ActivityTracker.prototype.trackMouseMove = function () {
        var _this = this;
        this.hostElement.nativeElement.onmousemove = function (event) {
            _this.resetExpirationTime();
        };
    };
    ActivityTracker.prototype.trackKeyUp = function () {
        var _this = this;
        console.log(this.hostElement.nativeElement.onkeyup);
        this.hostElement.nativeElement.onkeyup = function (event) {
            _this.resetExpirationTime();
        };
    };
    ActivityTracker.prototype.resetExpirationTime = function () {
        this.timeToLogout = this.expirationTime;
    };
    ActivityTracker.prototype.logout = function () {
        var _this = this;
        this.authenticationService.logout()
            .subscribe(function (response) {
            _this.toastManager.warning("Your session has expired, please login", "Session expired");
            _this.router.navigateByUrl("login");
        }, function (error) {
            _this.toastManager.warning("Unsuccessful logout attempt", "Session expired");
            _this.router.navigateByUrl("login");
        });
    };
    ActivityTracker.prototype.ngOnDestroy = function () {
        window.clearInterval(this.intervalPromise);
    };
    ActivityTracker = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "[activity-tracker]"
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("sessionExpirationTime")), 
        __metadata('design:paramtypes', [Number, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _d) || Object])
    ], ActivityTracker);
    return ActivityTracker;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/activity.tracker.directive.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NcfcDatepicker; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Flatpickr = __webpack_require__(448);
/**
 *  Wrapper directive for flatpickr.
 *  For exhausting reference see https://chmln.github.io/flatpickr/
 *
 */
var NcfcDatepicker = (function () {
    function NcfcDatepicker(hostElement) {
        this.hostElement = hostElement;
        this.defaultConfig = {
            dateFormat: 'U',
            altInput: true,
            altFormat: 'd-F-Y H:i K',
            enableTime: true,
            weekNumbers: true
        };
    }
    NcfcDatepicker.prototype.ngOnInit = function () {
        this.datepicker = new Flatpickr(this.hostElement.nativeElement, this.config ? this.config : this.defaultConfig);
    };
    NcfcDatepicker.prototype.setDate = function (value) {
        this.datepicker.setDate(value);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], NcfcDatepicker.prototype, "config", void 0);
    NcfcDatepicker = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[datepicker]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], NcfcDatepicker);
    return NcfcDatepicker;
    var _a;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/datepicker-directive.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NcfcPagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NcfcPagerComponent = (function () {
    function NcfcPagerComponent() {
        this.onPageSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currentPage = 1;
        this.limit = 10;
    }
    NcfcPagerComponent.prototype.ngOnInit = function () {
        this.calculateLastPage();
    };
    NcfcPagerComponent.prototype.calculateLastPage = function () {
        this.lastPage = parseInt((this.totalItemsCount / this.limit).toString());
    };
    NcfcPagerComponent.prototype.toFirstPage = function (event) {
        event.preventDefault();
        this.currentPage = 1;
        this.fetchPage();
    };
    NcfcPagerComponent.prototype.toLastPage = function (event) {
        event.preventDefault();
        this.currentPage = this.lastPage;
        this.fetchPage();
    };
    NcfcPagerComponent.prototype.toPage = function (pageNumber) {
        this.currentPage = +pageNumber > this.lastPage ? this.lastPage : +pageNumber;
        this.fetchPage();
    };
    NcfcPagerComponent.prototype.nextPage = function (event) {
        event.preventDefault();
        ++this.currentPage;
        this.fetchPage();
    };
    NcfcPagerComponent.prototype.previousPage = function (event) {
        event.preventDefault();
        --this.currentPage;
        this.fetchPage();
    };
    NcfcPagerComponent.prototype.fetchPage = function () {
        this.onPageSelect.emit({ pageNumber: this.currentPage, limit: this.limit });
    };
    NcfcPagerComponent.prototype.isFirst = function () {
        return this.currentPage === 1;
    };
    NcfcPagerComponent.prototype.isLast = function () {
        return this.currentPage === this.lastPage;
    };
    NcfcPagerComponent.prototype.setLimit = function (limit) {
        this.limit = +limit;
        this.calculateLastPage();
        if (this.currentPage > this.lastPage)
            this.currentPage = this.lastPage;
        this.onPageSelect.emit({ pageNumber: this.currentPage, limit: this.limit });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], NcfcPagerComponent.prototype, "totalItemsCount", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], NcfcPagerComponent.prototype, "onPageSelect", void 0);
    NcfcPagerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pager",
            styles: [__webpack_require__(897)],
            template: "\n            <ul class=\"list-unstyled\">\n                <li class=\"pager-link\"><button type=\"button\" class=\"btn btn-outline\" (click)=\"toFirstPage($event)\" [disabled]=\"isFirst()\">First</button></li>\n                <li class=\"pager-link\"><button class=\"btn btn-outline\" (click)=\"previousPage($event)\" [disabled]=\"isFirst()\">Prev</button></li>\n                <li class=\"pager-link\"><input type=\"text\" size=\"5\" class=\"pager-input\" (blur)=\"toPage(pageInput.value)\" value=\"{{currentPage}}\" #pageInput/></li>\n                <li class=\"pager-link\"><button class=\"btn btn-outline\" (click)=\"nextPage($event)\" [disabled]=\"isLast()\">Next</button></li>\n                <li class=\"pager-link\"><button class=\"btn btn-outline\" (click)=\"toLastPage($event)\" [disabled]=\"isLast()\">Last</button></li>\n            </ul>\n            \n            <div class=\"page-select-wrapper\">\n                <label>Display By:</label>\n                <div class=\"select pager-select\">\n                    <select class=\"pager-select\" (change)=\"setLimit($event.target.value)\">\n                        <option value=\"10\">10</option>\n                        <option value=\"15\">15</option>\n                        <option value=\"20\">20</option>\n                        <option value=\"25\">25</option>\n                    </select>\n                </div>\n            </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], NcfcPagerComponent);
    return NcfcPagerComponent;
    var _a;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/pager.component.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trimmer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 *  Trims number to fixed number of digits.
 *
 *  Usage:
 *      value| trim:3
 *
 *  Example:
 *      {{60.04016046515261 | trim:2}} -> 60.04
 *
 */
var Trimmer = (function () {
    function Trimmer() {
    }
    Trimmer.prototype.transform = function (value, trimTo) {
        return value.toFixed(trimTo);
    };
    Trimmer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "trim" }), 
        __metadata('design:paramtypes', [])
    ], Trimmer);
    return Trimmer;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/trimmer-pipe.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 *  Spinner component acts as a placeholder to provide a notification of a long running process.
 *
 *  There are several configuration options:
 *
 *  — spinnerClasses - list of class names with specify spinner size. Available classes are: .spinner-sm, .spinner-md, and .spinner-lg
 *  (defaults to .spinner-md)
 *
 *  — centerAligned - whether or not place spinner in the center of the screen(defaults to true)
 *
 *  For more information see here https://vmware.github.io/clarity/documentation/spinners
 */
var SpinnerComponent = (function () {
    function SpinnerComponent(hostElement) {
        this.hostElement = hostElement;
        this.CENTER_ALIGNED_CLASS_NAME = "center-aligned";
        this.spinnerClasses = "spinner-md";
        this.centerAligned = true;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        if (this.centerAligned) {
            this.hostElement.nativeElement.classList.add(this.CENTER_ALIGNED_CLASS_NAME);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SpinnerComponent.prototype, "spinnerClasses", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], SpinnerComponent.prototype, "centerAligned", void 0);
    SpinnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[spinner]',
            template: "<span class=\"spinner\" [ngClass]=\"spinnerClasses\">Loading...</span>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], SpinnerComponent);
    return SpinnerComponent;
    var _a;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/spinner.component.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Flatpickr = __webpack_require__(448);
var DatepickerComponent = (function () {
    function DatepickerComponent(hostElement) {
        this.hostElement = hostElement;
        // registers 'fn' that will be fired when changes are made
        // this is how we emit the changes back to the form
        // the method set in registerOnChange, it is just
        // a placeholder for a method that takes one parameter,
        // we use it to emit changes back to the form
        this.propagateChange = function (_) {
        };
        this.defaultConfig = {
            dateFormat: 'U',
            altInput: true,
            altFormat: 'd-F-Y H:i K',
            enableTime: true,
            weekNumbers: true
        };
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        var inputField = this.hostElement.nativeElement.getElementsByTagName('input')[0];
        this.datepicker = new Flatpickr(inputField, this.config ? this.config : this.defaultConfig);
    };
    // this is the initial value set to the component
    DatepickerComponent.prototype.writeValue = function (obj) {
        if (!obj) {
            return;
        }
        this.datepicker.setDate(obj, false);
    };
    DatepickerComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    // not used, used for touch input
    DatepickerComponent.prototype.registerOnTouched = function () {
    };
    // change events from the select
    DatepickerComponent.prototype.onChange = function (event) {
        // get value from select
        var data = parseInt(event.target.value, 10) * 1000;
        // update the form
        this.propagateChange(data);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "config", void 0);
    DatepickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'datepicker',
            template: "\n        <input type=\"number\" (change)=\"onChange($event)\">\n    ",
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DatepickerComponent; }),
                    multi: true,
                }
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], DatepickerComponent);
    return DatepickerComponent;
    var _a;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/datepicker.component.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventItemComponent = (function () {
    function EventItemComponent(apiService, router, activatedRoute, toastsManager) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastsManager = toastsManager;
        this.opened = false;
        this.onRemoval = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EventItemComponent.prototype.ngOnInit = function () {
        this.prepareDates();
    };
    EventItemComponent.prototype.prepareDates = function () {
    };
    EventItemComponent.prototype.editEvent = function (event, anEvent) {
        event.preventDefault();
        this.router.navigate(['./', anEvent.id], { relativeTo: this.activatedRoute });
    };
    EventItemComponent.prototype.confirm = function (event) {
        event.preventDefault();
        this.toggleDialog();
    };
    EventItemComponent.prototype.deleteEvent = function (id) {
        var _this = this;
        this.apiService
            .delete("/events/".concat(this.item.event.id))
            .subscribe(function (response) {
            _this.onRemoval.emit(_this.item.event);
            _this.toggleDialog();
            _this.toastsManager.success(_this.item.event.title.concat(" has been deleted"), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to delete ".concat(_this.item.event.title), "Failure");
            _this.toggleDialog();
        });
    };
    EventItemComponent.prototype.toggleDialog = function () {
        this.opened = !this.opened;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EventItemComponent.prototype, "item", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], EventItemComponent.prototype, "onRemoval", void 0);
    EventItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[event-item]',
            template: __webpack_require__(904)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === 'function' && _e) || Object])
    ], EventItemComponent);
    return EventItemComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/event-item.component.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_list_event_list_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_form_event_form_component__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EVENT_ROUTES; });


var EVENT_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__event_list_event_list_component__["a" /* EventListComponent */], pathMatch: 'full' },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__event_form_event_form_component__["a" /* EventFormComponent */] }
];
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/event.routes.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HeaderComponent = (function () {
    function HeaderComponent(authenticationService, router, currentUser) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.currentUser = currentUser;
        this.title = 'NCF Application';
        this.user = {};
        this.user = JSON.parse(localStorage.getItem(this.currentUser));
    }
    HeaderComponent.prototype.logout = function (event) {
        var _this = this;
        event.preventDefault();
        this.authenticationService.logout()
            .subscribe(function (response) {
            _this.router.navigate(["login"]);
        }, function (error) {
            console.log("Failed to complete logout request", error);
        });
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-header]',
            template: __webpack_require__(906),
        }),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("currentUser")), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, String])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/header.component.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LevelItemComponent = (function () {
    function LevelItemComponent(apiUrl, superAdminRole, apiService, router, activatedRoute, toastsManager, authenticationService) {
        this.apiUrl = apiUrl;
        this.superAdminRole = superAdminRole;
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastsManager = toastsManager;
        this.authenticationService = authenticationService;
        this.opened = false;
        this.onRemoval = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onRestore = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LevelItemComponent.prototype.editLevel = function (event, level) {
        event.preventDefault();
        this.router.navigate(['./', level.id], { relativeTo: this.activatedRoute });
    };
    LevelItemComponent.prototype.confirm = function (event) {
        event.preventDefault();
        this.toggleDialog();
    };
    LevelItemComponent.prototype.toggleDialog = function () {
        this.opened = !this.opened;
    };
    LevelItemComponent.prototype.deleteLevel = function () {
        var _this = this;
        this.apiService
            .delete("/levels/" + this.level.id)
            .subscribe(function (response) {
            _this.onRemoval.emit(_this.level.id);
            _this.toggleDialog();
            _this.toastsManager.success(_this.level.name.concat(" has been deleted"), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to delete ".concat(_this.level.name), "Failure");
        });
    };
    LevelItemComponent.prototype.hasRole = function (role) {
        return this.authenticationService.hasRole(role);
    };
    LevelItemComponent.prototype.restoreLevel = function (event, level) {
        var _this = this;
        event.preventDefault();
        this.apiService
            .put("/levels/" + level.id + "/restore")
            .subscribe(function (response) {
            _this.onRestore.emit(_this.level.id);
            _this.toastsManager.success("Level " + level.name + " has been successfully restored", "Success");
        }, function (error) {
            _this.toastsManager.warning("Failed to restore level " + level.name, "Unsuccessful attempt");
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LevelItemComponent.prototype, "level", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], LevelItemComponent.prototype, "onRemoval", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], LevelItemComponent.prototype, "onRestore", void 0);
    LevelItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[level-item]',
            template: __webpack_require__(908),
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("apiUrl")),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("superAdminRole")), 
        __metadata('design:paramtypes', [String, String, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _g) || Object])
    ], LevelItemComponent);
    return LevelItemComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/level-item.component.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__level_list_level_list_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level_form_level_form_component__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEVEL_ROUTES; });


var LEVEL_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__level_list_level_list_component__["a" /* LevelListComponent */], pathMatch: 'full' },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__level_form_level_form_component__["a" /* LevelFormComponent */] }
];
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/level.routes.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var OrganizationItemComponent = (function () {
    function OrganizationItemComponent(apiUrl, apiService, router, activatedRoute, toastsManager) {
        this.apiUrl = apiUrl;
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastsManager = toastsManager;
        this.opened = false;
        this.onRemoval = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    OrganizationItemComponent.prototype.ngOnInit = function () {
    };
    OrganizationItemComponent.prototype.editOrganization = function (event, organization) {
        event.preventDefault();
        this.router.navigate(['./', organization.id], { relativeTo: this.activatedRoute });
    };
    OrganizationItemComponent.prototype.confirm = function (event) {
        event.preventDefault();
        this.toggleDialog();
    };
    OrganizationItemComponent.prototype.toggleDialog = function () {
        this.opened = !this.opened;
    };
    OrganizationItemComponent.prototype.getLogoUrl = function () {
        return this.apiUrl
            .concat("/attachments/")
            .concat(this.organization.attachmentId)
            .concat("?size=50");
    };
    OrganizationItemComponent.prototype.deleteOrganization = function (id) {
        var _this = this;
        this.apiService
            .delete("/organizations/".concat(this.organization.id))
            .subscribe(function (response) {
            _this.onRemoval.emit(_this.organization);
            _this.toggleDialog();
            _this.toastsManager.success(_this.organization.name.concat(" has been deleted"), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to delete ".concat(_this.organization.name), "Failure");
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], OrganizationItemComponent.prototype, "organization", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], OrganizationItemComponent.prototype, "onRemoval", void 0);
    OrganizationItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[organization-item]',
            template: __webpack_require__(912)
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("apiUrl")), 
        __metadata('design:paramtypes', [String, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _e) || Object])
    ], OrganizationItemComponent);
    return OrganizationItemComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/organization-item.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__organization_list_organization_list_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__organization_form_organization_form_component__ = __webpack_require__(392);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ORGANIZATION_ROUTES; });


var ORGANIZATION_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__organization_list_organization_list_component__["a" /* OrganizationListComponent */], pathMatch: 'full' },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__organization_form_organization_form_component__["a" /* OrganizationFormComponent */] }
];
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/organization.routes.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var RegionItemComponent = (function () {
    function RegionItemComponent(apiUrl, apiService, router, activatedRoute, toastsManager) {
        this.apiUrl = apiUrl;
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastsManager = toastsManager;
        this.opened = false;
        this.onRemoval = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RegionItemComponent.prototype.editRegion = function (event, region) {
        event.preventDefault();
        this.router.navigate(['./', region.id], { relativeTo: this.activatedRoute });
    };
    RegionItemComponent.prototype.confirm = function (event) {
        event.preventDefault();
        this.toggleDialog();
    };
    RegionItemComponent.prototype.toggleDialog = function () {
        this.opened = !this.opened;
    };
    RegionItemComponent.prototype.deleteRegion = function () {
        var _this = this;
        this.apiService
            .delete("/regions/".concat(this.region.id))
            .subscribe(function (response) {
            _this.onRemoval.emit(_this.region);
            _this.toggleDialog();
            _this.toastsManager.success(_this.region.name.concat(" has been deleted"), "Success");
        }, function (error) {
            _this.toastsManager.error("Failed to delete ".concat(_this.region.name), "Failure");
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RegionItemComponent.prototype, "region", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], RegionItemComponent.prototype, "onRemoval", void 0);
    RegionItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[region-item]',
            template: __webpack_require__(915)
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("apiUrl")), 
        __metadata('design:paramtypes', [String, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _e) || Object])
    ], RegionItemComponent);
    return RegionItemComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/region-item.component.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__region_list_region_list_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__region_form_region_form_component__ = __webpack_require__(395);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REGION_ROUTES; });


var REGION_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__region_list_region_list_component__["a" /* RegionListComponent */], pathMatch: 'full' },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__region_form_region_form_component__["a" /* RegionFormComponent */] }
];
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/region.routes.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorsService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 *  This class intended to allow CORS requests with credentials globally.
 */
var CorsService = (function (_super) {
    __extends(CorsService, _super);
    function CorsService() {
        _super.call(this);
    }
    CorsService.prototype.build = function () {
        var xhr = _super.prototype.build.call(this);
        xhr.withCredentials = true;
        return (xhr);
    };
    CorsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CorsService);
    return CorsService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BrowserXhr */]));
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/cors.service.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    SidebarComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-sidebar]',
            template: __webpack_require__(917)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/sidebar.component.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserItemComponent = (function () {
    function UserItemComponent(apiService, toastsManager, authenticationService) {
        this.apiService = apiService;
        this.toastsManager = toastsManager;
        this.authenticationService = authenticationService;
        this.opened = false;
        this.onUserRemoval = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserItemComponent.prototype.ngOnInit = function () {
        this.extractUserRoles();
    };
    UserItemComponent.prototype.extractUserRoles = function () {
        var roles = "";
        this.user.roles.forEach(function (role) {
            if (roles.length > 0)
                roles = roles.concat(", ");
            roles = roles.concat(role.authority.substring(role.authority.indexOf("_") + 1));
        });
        return roles;
    };
    UserItemComponent.prototype.toString = function (value) {
        return value ? "Yes" : "No";
    };
    UserItemComponent.prototype.confirm = function (event) {
        event.preventDefault();
        this.toggleDialog();
    };
    UserItemComponent.prototype.deleteUser = function () {
        var _this = this;
        this.apiService
            .delete("/users/".concat(this.user.id))
            .subscribe(function (response) {
            _this.onUserRemoval.emit(_this.user);
            _this.toggleDialog();
            _this.toastsManager.success(_this.user.username.concat(" has been deleted"), "Success");
        }, function (error) {
            var json = error.json();
            if (json.message === "Access is denied") {
                _this.toastsManager.warning("You don't have enough permissions to delete users", "Access Denied");
            }
            else {
                _this.toastsManager.error("Failed to delete ".concat(_this.user.username), "Failure");
            }
            _this.toggleDialog();
        });
    };
    UserItemComponent.prototype.toggleDialog = function () {
        this.opened = !this.opened;
    };
    UserItemComponent.prototype.hasRole = function (role) {
        return this.authenticationService.hasRole(role);
    };
    UserItemComponent.prototype.currentUserRecord = function (username) {
        return this.authenticationService.getCurrentUserName() === username;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], UserItemComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], UserItemComponent.prototype, "onUserRemoval", void 0);
    UserItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[user-item]',
            template: "\n            <td class=\"icon-cell\">\n                <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" [routerLink]=\"user.id\" \n                    *ngIf=\"hasRole('ROLE_ADMIN') || hasRole('ROLE_SUPER_ADMIN') || currentUserRecord(user.username)\">\n                    <clr-icon shape=\"edit\"></clr-icon>\n                    <span class=\"tooltip-content\">Edit</span>\n                </a>\n                <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"confirm($event)\" *ngIf=\"hasRole('ROLE_SUPER_ADMIN')\">\n                    <clr-icon shape=\"trash\"></clr-icon>\n                    <span class=\"tooltip-content\">Delete</span>\n                </a>\n            </td>\n            <td>{{user.id}}</td>\n            <td>{{user.username}}</td>\n            <td>{{extractUserRoles()}}</td>\n            <td>{{toString(user.external)}}</td>\n            <td>{{toString(user.enabled)}}</td>\n            \n            <clr-modal [(clrModalOpen)]=\"opened\">\n                <h3 class=\"modal-title\">User removal</h3>\n                      \n                <div class=\"modal-body\">\n                    <p>Do you really want to remove {{user.username}}?</p>\n                </div>\n                      \n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"opened = false\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteUser(user.id)\">Ok</button>\n                </div>\n            </clr-modal>\n        "
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object])
    ], UserItemComponent);
    return UserItemComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/user-item.component.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_list_user_list_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_form_user_form_component__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_ROUTES; });


var USER_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__user_list_user_list_component__["a" /* UserListComponent */], pathMatch: 'full' },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__user_form_user_form_component__["a" /* UserFormComponent */] }
];
//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/user.routes.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/roman/ncfc-ng2-admin-ui/src/polyfills.js.map

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 449,
	"./af.js": 449,
	"./ar": 455,
	"./ar-dz": 450,
	"./ar-dz.js": 450,
	"./ar-ly": 451,
	"./ar-ly.js": 451,
	"./ar-ma": 452,
	"./ar-ma.js": 452,
	"./ar-sa": 453,
	"./ar-sa.js": 453,
	"./ar-tn": 454,
	"./ar-tn.js": 454,
	"./ar.js": 455,
	"./az": 456,
	"./az.js": 456,
	"./be": 457,
	"./be.js": 457,
	"./bg": 458,
	"./bg.js": 458,
	"./bn": 459,
	"./bn.js": 459,
	"./bo": 460,
	"./bo.js": 460,
	"./br": 461,
	"./br.js": 461,
	"./bs": 462,
	"./bs.js": 462,
	"./ca": 463,
	"./ca.js": 463,
	"./cs": 464,
	"./cs.js": 464,
	"./cv": 465,
	"./cv.js": 465,
	"./cy": 466,
	"./cy.js": 466,
	"./da": 467,
	"./da.js": 467,
	"./de": 469,
	"./de-at": 468,
	"./de-at.js": 468,
	"./de.js": 469,
	"./dv": 470,
	"./dv.js": 470,
	"./el": 471,
	"./el.js": 471,
	"./en-au": 472,
	"./en-au.js": 472,
	"./en-ca": 473,
	"./en-ca.js": 473,
	"./en-gb": 474,
	"./en-gb.js": 474,
	"./en-ie": 475,
	"./en-ie.js": 475,
	"./en-nz": 476,
	"./en-nz.js": 476,
	"./eo": 477,
	"./eo.js": 477,
	"./es": 479,
	"./es-do": 478,
	"./es-do.js": 478,
	"./es.js": 479,
	"./et": 480,
	"./et.js": 480,
	"./eu": 481,
	"./eu.js": 481,
	"./fa": 482,
	"./fa.js": 482,
	"./fi": 483,
	"./fi.js": 483,
	"./fo": 484,
	"./fo.js": 484,
	"./fr": 487,
	"./fr-ca": 485,
	"./fr-ca.js": 485,
	"./fr-ch": 486,
	"./fr-ch.js": 486,
	"./fr.js": 487,
	"./fy": 488,
	"./fy.js": 488,
	"./gd": 489,
	"./gd.js": 489,
	"./gl": 490,
	"./gl.js": 490,
	"./he": 491,
	"./he.js": 491,
	"./hi": 492,
	"./hi.js": 492,
	"./hr": 493,
	"./hr.js": 493,
	"./hu": 494,
	"./hu.js": 494,
	"./hy-am": 495,
	"./hy-am.js": 495,
	"./id": 496,
	"./id.js": 496,
	"./is": 497,
	"./is.js": 497,
	"./it": 498,
	"./it.js": 498,
	"./ja": 499,
	"./ja.js": 499,
	"./jv": 500,
	"./jv.js": 500,
	"./ka": 501,
	"./ka.js": 501,
	"./kk": 502,
	"./kk.js": 502,
	"./km": 503,
	"./km.js": 503,
	"./ko": 504,
	"./ko.js": 504,
	"./ky": 505,
	"./ky.js": 505,
	"./lb": 506,
	"./lb.js": 506,
	"./lo": 507,
	"./lo.js": 507,
	"./lt": 508,
	"./lt.js": 508,
	"./lv": 509,
	"./lv.js": 509,
	"./me": 510,
	"./me.js": 510,
	"./mi": 511,
	"./mi.js": 511,
	"./mk": 512,
	"./mk.js": 512,
	"./ml": 513,
	"./ml.js": 513,
	"./mr": 514,
	"./mr.js": 514,
	"./ms": 516,
	"./ms-my": 515,
	"./ms-my.js": 515,
	"./ms.js": 516,
	"./my": 517,
	"./my.js": 517,
	"./nb": 518,
	"./nb.js": 518,
	"./ne": 519,
	"./ne.js": 519,
	"./nl": 521,
	"./nl-be": 520,
	"./nl-be.js": 520,
	"./nl.js": 521,
	"./nn": 522,
	"./nn.js": 522,
	"./pa-in": 523,
	"./pa-in.js": 523,
	"./pl": 524,
	"./pl.js": 524,
	"./pt": 526,
	"./pt-br": 525,
	"./pt-br.js": 525,
	"./pt.js": 526,
	"./ro": 527,
	"./ro.js": 527,
	"./ru": 528,
	"./ru.js": 528,
	"./se": 529,
	"./se.js": 529,
	"./si": 530,
	"./si.js": 530,
	"./sk": 531,
	"./sk.js": 531,
	"./sl": 532,
	"./sl.js": 532,
	"./sq": 533,
	"./sq.js": 533,
	"./sr": 535,
	"./sr-cyrl": 534,
	"./sr-cyrl.js": 534,
	"./sr.js": 535,
	"./ss": 536,
	"./ss.js": 536,
	"./sv": 537,
	"./sv.js": 537,
	"./sw": 538,
	"./sw.js": 538,
	"./ta": 539,
	"./ta.js": 539,
	"./te": 540,
	"./te.js": 540,
	"./tet": 541,
	"./tet.js": 541,
	"./th": 542,
	"./th.js": 542,
	"./tl-ph": 543,
	"./tl-ph.js": 543,
	"./tlh": 544,
	"./tlh.js": 544,
	"./tr": 545,
	"./tr.js": 545,
	"./tzl": 546,
	"./tzl.js": 546,
	"./tzm": 548,
	"./tzm-latn": 547,
	"./tzm-latn.js": 547,
	"./tzm.js": 548,
	"./uk": 549,
	"./uk.js": 549,
	"./uz": 550,
	"./uz.js": 550,
	"./vi": 551,
	"./vi.js": 551,
	"./x-pseudo": 552,
	"./x-pseudo.js": 552,
	"./yo": 553,
	"./yo.js": 553,
	"./zh-cn": 554,
	"./zh-cn.js": 554,
	"./zh-hk": 555,
	"./zh-hk.js": 555,
	"./zh-tw": 556,
	"./zh-tw.js": 556
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 891;


/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = ".pager-link {\n    float: left;\n}\n\n.pager-input {\n    text-align: center;\n    margin-right: 11px;\n    margin-top: 6px;\n    border: 1px solid #0094d2;\n    border-radius: 3px;\n    height: 36px;\n}\n\n.page-select-wrapper {\n    display: inline-block;\n    float: right;\n}\n\n.pager-select {\n    width: 50px;\n    margin-top: 12px;\n    display: inline-block;\n}"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" activity-tracker>\n    <!-- div class=\"alert alert-app-level\">\n      ...\n    </div -->\n    <header class=\"header header-5\" app-header *ngIf=\"isLoggedIn()\"></header>\n\n    <div class=\"content-container\">\n        <div class=\"content-area\">\n            <!-- nav class=\"subnav\">\n              ...\n            </nav -->\n            <router-outlet></router-outlet>\n        </div>\n\n        <nav class=\"sidenav\" app-sidebar *ngIf=\"isLoggedIn()\"></nav>\n    </div>\n</div>\n"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<div spinner *ngIf=\"!pageLoadingComplete\"></div>\n<form [formGroup]=\"categoryForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"pageLoadingComplete\">\n    <section class=\"form-block\">\n        <label>{{category?.name}}</label>\n        <div class=\"form-group\">\n\n            <label for=\"aForm_1\">Name</label>\n            <input type=\"text\" id=\"aForm_1\" placeholder=\"\" size=\"45\" formControlName=\"name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"category\">Parent</label>\n            <div class=\"select\">\n                <select id=\"category\" formControlName=\"parentId\">\n                    <option *ngFor=\"let category of parentCategories\" [ngValue]=\"category.id\">{{category.name}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"theme\">Theme</label>\n            <div class=\"select\">\n                <select id=\"theme\" formControlName=\"theme\">\n                    <option *ngFor=\"let theme of listOfThemes\" [ngValue]=\"theme\">{{theme}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"orderIndex\">Order Index:</label>\n            <input id=\"orderIndex\" type=\"text\" size=\"45\" formControlName=\"orderIndex\">\n            <span id=\"invalidOrder\" *ngIf=\"categoryForm.controls['orderIndex'].hasError('invalidOrder')\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Order should be a positive digit</span>\n        </div>\n        <button type=\"submit\" [disabled]=\"!categoryForm.valid\" class=\"btn btn-primary\">{{newCategory() ? \"Create Category\" : \"Update Category\"}}\n        </button>\n    </section>\n</form>\n"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "<td class=\"icon-cell\">\n    <a [routerLink]=\"category.id\" role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\">\n        <clr-icon shape=\"edit\"></clr-icon>\n        <span class=\"tooltip-content\">Edit</span>\n    </a>\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"confirm($event)\">\n        <clr-icon shape=\"trash\"></clr-icon>\n        <span class=\"tooltip-content\">Delete</span>\n    </a>\n</td>\n<td>{{category.id}}</td>\n<td>{{category.name}}</td>\n<td>{{category.theme}}</td>\n<td>{{category.deleted}}</td>\n\n<clr-modal [(clrModalOpen)]=\"opened\">\n    <h3 class=\"modal-title\">Category removal</h3>\n\n    <div class=\"modal-body\">\n        <p>Do you really want to remove {{category.name}}?</p>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"opened = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteCategory()\">Ok</button>\n    </div>\n</clr-modal>\n"

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div spinner [spinnerClasses]=\"['spinner-lg']\" *ngIf=\"!pageLoadingComplete\"></div>\n<div *ngIf=\"pageLoadingComplete\">\n    <p><a [routerLink]=\"'new'\" class=\"btn btn-primary\">Create Category</a></p>\n    <table class=\"table item-list\">\n        <thead>\n            <tr>\n                <th></th>\n                <th>Id</th>\n                <th>Name</th>\n                <th>Theme</th>\n                <th>Deleted</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let category of categories\" category-item [category]=\"category\" (onRemoval)=\"removeFromList($event)\"></tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<div spinner *ngIf=\"!pageLoadingComplete\"></div>\n<form [formGroup]=\"eventForm\" *ngIf=\"pageLoadingComplete\">\n    <section class=\"form-block\">\n        <label>Event Form</label>\n\n        <div class=\"form-group row\">\n            <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"title\">Title:</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <input id=\"title\" type=\"text\" size=\"49\" formControlName=\"title\">\n                <span *ngIf=\"eventForm.controls['title'].dirty && eventForm.hasError('required', 'title')\"\n                      [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Required field</span>\n            </div>\n        </div>\n\n\n        <div class=\"form-group row\">\n            <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"category\">Category/Organization:</label>\n            </div>\n\n            <div class=\"col-lg-4 col-md-8 col-sm-12 col-xs-12\">\n                <div class=\"select form-control\">\n                    <select id=\"category\" formControlName=\"categoryId\">\n                        <optgroup *ngFor=\"let group of allCategories\" [attr.label]=\"group.name\">\n                            <option *ngFor=\"let category of group.options\" [ngValue]=\"category.id\">{{category.name}}</option>\n                        </optgroup>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-8 col-sm-12 col-xs-12\">\n                <div class=\"select form-control\">\n                    <select id=\"organization\" formControlName=\"organizationId\">\n                        <option *ngFor=\"let organization of allOrganizations\" [ngValue]=\"organization.id\">{{organization.name}}</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"level\">Level/Region:</label>\n            </div>\n            <div class=\"col-lg-4 col-md-8 col-sm-12 col-xs-12\">\n                <div class=\"select form-control\">\n                    <select id=\"level\" formControlName=\"levelId\">\n                        <option *ngFor=\"let level of allLevels\" [ngValue]=\"level.id\">{{level.name}}</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-8 col-sm-12 col-xs-12\">\n                <div class=\"select form-control\">\n                    <select id=\"region\" formControlName=\"regionId\">\n                        <option *ngFor=\"let region of allRegions\" [ngValue]=\"region.id\">{{region.name}}</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"description\">Description:</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n                <textarea id=\"description\" rows=\"5\" class=\"form-control\" formControlName=\"description\"></textarea>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"location\">Select Location:</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <input id=\"location\" type=\"text\" size=\"49\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #location>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <sebm-google-map [latitude]=\"event.latitude\" [longitude]=\"event.longitude\" [zoom]=\"event.mapZoom\" [scrollwheel]=\"false\">\n                    <sebm-google-map-marker [latitude]=\"event.latitude\" [longitude]=\"event.longitude\"></sebm-google-map-marker>\n                </sebm-google-map>\n            </div>\n        </div>\n\n        {{registrationDate}}\n        <div class=\"form-group row\">\n            <div class=\"col-lg-3 col-md-12 col-sm-12 col-xs-12\">\n                <label>Reg. Date/Start Date/End Date:</label>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n                <datepicker formControlName=\"registrationDate\"></datepicker>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n                <datepicker formControlName=\"startDate\"></datepicker>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n                <datepicker formControlName=\"endDate\"></datepicker>\n            </div>\n        </div>\n\n        <!--<div class=\"form-group row\">-->\n            <!--<div class=\"col-lg-3 col-md-12 col-sm-12 col-xs-12\">-->\n                <!--<label>Reg. Date/Start Date/End Date:</label>-->\n            <!--</div>-->\n            <!--<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">-->\n                <!--<input type=\"text\" placeholder=\"Registration Date...\" formControlName=\"registrationDate\" datepicker #registrationPicker>-->\n            <!--</div>-->\n            <!--<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">-->\n                <!--<input type=\"text\" placeholder=\"Start Date...\" formControlName=\"startDate\" datepicker #startPicker>-->\n            <!--</div>-->\n            <!--<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">-->\n                <!--<input type=\"text\" placeholder=\"End Date...\" formControlName=\"endDate\" datepicker #endPicker>-->\n            <!--</div>-->\n        <!--</div>-->\n\n        <div class=\"form-group row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <span *ngIf=\"eventForm.hasError('wrongOrder', 'registrationDate')\n                    || eventForm.hasError('wrongOrder', 'startDate')\n                    || eventForm.hasError('wrongOrder', 'endDate')\"\n                      [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">\n                    Dates should follow in right order: Registration Date > Start Date > End Date</span>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"geoDescription\">Geo Description:</label>\n            </div>\n            <div class=\"col-lg-10 col-md-10 col-sm-12 col-xs-12\">\n                <textarea id=\"geoDescription\" rows=\"5\" class=\"form-control\" formControlName=\"geoDescription\"></textarea>\n            </div>\n        </div>\n\n    </section>\n\n    <button type=\"button\" [disabled]=\"!eventForm.valid\" class=\"btn btn-primary\" (click)=\"onSubmit()\">{{newEvent() ? \"Create Event\" : \"Update Event\"}}</button>\n</form>\n"

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "<td class=\"icon-cell\">\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"editEvent($event, item.event)\">\n        <clr-icon shape=\"edit\"></clr-icon>\n        <span class=\"tooltip-content\">Edit</span>\n    </a>\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"confirm($event)\">\n        <clr-icon shape=\"trash\"></clr-icon>\n        <span class=\"tooltip-content\">Delete</span>\n    </a>\n</td>\n<td>{{item.event.title}}</td>\n<td>{{item.event.registrationDate | date}}</td>\n<td>{{item.event.startDate | date}}</td>\n<td>{{item.event.endDate | date}}</td>\n<td>{{item.event.latitude | trim:2}}</td>\n<td>{{item.event.longitude | trim:2}}</td>\n<td>{{item.organization}}</td>\n<td>{{item.region}}</td>\n<td>{{item.level}}</td>\n<td>{{item.category}}</td>\n<td>{{item.creator}}</td>\n\n<clr-modal [(clrModalOpen)]=\"opened\">\n    <h3 class=\"modal-title\">Event removal</h3>\n\n    <div class=\"modal-body\">\n        <p>Do you really want to remove {{item.event.title}}?</p>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"opened = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteEvent(item.event.id)\">Ok</button>\n    </div>\n</clr-modal>\n"

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

module.exports = "<div spinner [spinnerClasses]=\"['spinner-lg']\" *ngIf=\"!pageLoadingComplete\"></div>\n<div>\n    <div *ngIf=\"pageLoadingComplete\">\n        <p><button type=\"button\" class=\"btn btn-primary\" (click)=\"createEvent()\">Create Event</button></p>\n    </div>\n\n    <table class=\"table\" *ngIf=\"pageLoadingComplete\">\n        <thead>\n        <tr>\n            <th></th>\n            <th>Title&nbsp;<clr-icon title=\"title\" shape=\"caret\" dir=\"up\" (click)=\"orderBy(title)\" #title></clr-icon></th>\n            <th>Reg. Date&nbsp;<clr-icon title=\"registration_date\" shape=\"caret\" dir=\"up\" (click)=\"orderBy(regDate)\" #regDate></clr-icon></th>\n            <th>Start&nbsp;<clr-icon title=\"start_date\" shape=\"caret\" dir=\"up\" (click)=\"orderBy(startDate)\" #startDate></clr-icon></th>\n            <th>End&nbsp;<clr-icon title=\"end_date\" shape=\"caret\" dir=\"up\" (click)=\"orderBy(endDate)\" #endDate></clr-icon></th>\n            <th>Latitude</th>\n            <th>Longitude</th>\n            <th>Organization</th>\n            <th>Region</th>\n            <th>Level</th>\n            <th>Category</th>\n            <th>Created By</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let event of events\" event-item [item]=\"event\" (onRemoval)=\"removeFromList($event)\"></tr>\n        </tbody>\n    </table>\n\n    <pager *ngIf=\"pageLoadingComplete\" [totalItemsCount]=\"eventsCount\" (onPageSelect)=\"fetchPage($event)\"></pager>\n</div>\n"

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

module.exports = "<div class=\"branding\">\n    <a [routerLink]=\"['users']\" class=\"nav-link\">\n        <clr-icon shape=\"calendar\" class=\"is-inverse\"></clr-icon>\n        <span class=\"title\">{{title}}</span>\n    </a>\n</div>\n<!--<div class=\"header-nav\">\n    <a class=\"nav-link\" [routerLink]=\"['organizations']\" routerLinkActive=\"active\"><span class=\"nav-text\">Dashboard</span></a>\n    <a class=\"nav-link\" [routerLink]=\"['users']\" routerLinkActive=\"active\"><span class=\"nav-text\">Management</span></a>\n</div>-->\n<div class=\"header-actions\">\n    <clr-dropdown class=\"dropdown bottom-right\">\n        <button class=\"nav-text\" clrDropdownToggle>\n            {{user.username}}\n            <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n        <div class=\"dropdown-menu\">\n            <a href=\"...\" clrDropdownItem>Preferences</a>\n            <a href=\"...\" clrDropdownItem (click)=\"logout($event)\">Log out</a>\n        </div>\n    </clr-dropdown>\n</div>\n"

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "<div spinner *ngIf=\"!pageLoadingComplete\"></div>\n<form [formGroup]=\"levelForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"pageLoadingComplete\">\n    <section class=\"form-block\">\n        <label>Level Form</label>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input id=\"name\" type=\"text\" formControlName=\"name\" size=\"45\">\n            <span *ngIf=\"levelForm.controls['name'].dirty && levelForm.hasError('required', 'name')\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Required field</span>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"orderIndex\">Order Index:</label>\n            <input id=\"orderIndex\" type=\"text\" size=\"45\" formControlName=\"orderIndex\">\n            <span id=\"invalidOrder\" *ngIf=\"levelForm.controls['orderIndex'].hasError('invalidOrder')\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Order should be a positive digit</span>\n        </div>\n    </section>\n\n    <button type=\"submit\" [disabled]=\"!levelForm.valid\" class=\"btn btn-primary\">{{newLevel() ? \"Create Level\" : \"Update Level\"}}</button>\n</form>\n"

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

module.exports = "<td class=\"icon-cell\">\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"editLevel($event, level)\">\n        <clr-icon shape=\"edit\"></clr-icon>\n        <span class=\"tooltip-content\">Edit</span>\n    </a>\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"confirm($event)\">\n        <clr-icon shape=\"trash\"></clr-icon>\n        <span class=\"tooltip-content\">Delete</span>\n    </a>\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"restoreLevel($event, level)\" *ngIf=\"hasRole(superAdminRole)\">\n        <clr-icon shape=\"undo\"></clr-icon>\n        <span class=\"tooltip-content\">Restore</span>\n    </a>\n</td>\n<td>{{level.id}}</td>\n<td>{{level.name}}</td>\n<td>{{level.deleted}}</td>\n\n<clr-modal [(clrModalOpen)]=\"opened\">\n    <h3 class=\"modal-title\">level removal</h3>\n\n    <div class=\"modal-body\">\n        <p>Do you really want to remove {{level.name}}?</p>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"opened = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteLevel()\">Ok</button>\n    </div>\n</clr-modal>\n"

/***/ }),

/***/ 909:
/***/ (function(module, exports) {

module.exports = "<div spinner [spinnerClasses]=\"['spinner-lg']\" *ngIf=\"!pageLoadingComplete\"></div>\n<div *ngIf=\"pageLoadingComplete\">\n    <p><a [routerLink]=\"'new'\" class=\"btn btn-primary\">Create Level</a></p>\n    <table class=\"table item-list\">\n        <thead>\n            <tr>\n                <th></th>\n                <th>Id</th>\n                <th>Name</th>\n                <th>Deleted</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let level of levels\" level-item [level]=\"level\" (onRemoval)=\"markLevelAsDeleted($event)\" (onRestore)=\"restoreLevel($event)\"></tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ 910:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n    <form class=\"login\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <label class=\"title\">\n            NCF Kalender\n        </label>\n        <div class=\"login-group\">\n            <!-- div class=\"auth-source select\">\n              <select id=\"login-auth-source-1\">\n                <option>Local Users</option>\n                <option>Administrator</option>\n              </select>\n            </div -->\n\n            <input class=\"username\" type=\"text\" id=\"usernameField\" placeholder=\"Email\" name=\"usernameField\"\n                   formControlName=\"username\"\n            />\n            <input class=\"password\" type=\"password\" id=\"passwordField\" placeholder=\"Password\" name=\"passwordField\"\n                   formControlName=\"password\"\n            />\n            <!--div class=\"checkbox\">\n              <input type=\"checkbox\" id=\"rememberme\">\n              <label for=\"rememberme\">\n                Remember me\n              </label>\n            </div -->\n\n            <div *ngIf=\"loginForm.invalid\" class=\"error active\">\n                Please fill all fields\n            </div>\n            <div spinner  *ngIf=\"!pageLoadingComplete\"></div>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.invalid\">Submit</button>\n\n            <!-- a href=\"...\" class=\"signup\">Sign up for an account</a -->\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports = "<div spinner *ngIf=\"!pageLoadingComplete\"></div>\n<form [formGroup]=\"organizationForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"pageLoadingComplete\">\n    <section class=\"form-block\">\n        <label>Organiztion Form</label>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input id=\"name\" type=\"text\" formControlName=\"name\" size=\"45\">\n            <span *ngIf=\"organizationForm.controls['name'].dirty && organizationForm.hasError('required', 'name')\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Required field</span>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"description\">Description:</label>\n            <textarea id=\"description\" rows=\"5\" formControlName=\"description\"></textarea>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"orderIndex\">Order Index:</label>\n            <input id=\"orderIndex\" type=\"text\" size=\"45\" formControlName=\"orderIndex\">\n            <span id=\"invalidOrder\" *ngIf=\"organizationForm.controls['orderIndex'].hasError('invalidOrder')\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Order should be a positive digit</span>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"logo\">Logo</label>\n            <input id=\"logo\" type=\"file\" (change)=\"handleSelection(logoUpload)\" #logoUpload>\n            <img [src]=\"getAttachmentUrl()\" *ngIf=\"attachmentId\">\n        </div>\n    </section>\n\n    <button type=\"submit\" [disabled]=\"!organizationForm.valid\" class=\"btn btn-primary\">{{newOrganization() ? \"Create Organization\" : \"Update Organization\"}}</button>\n</form>\n"

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

module.exports = "<td class=\"icon-cell\">\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"editOrganization($event, organization)\">\n        <clr-icon shape=\"edit\"></clr-icon>\n        <span class=\"tooltip-content\">Edit</span>\n    </a>\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"confirm($event)\">\n        <clr-icon shape=\"trash\"></clr-icon>\n        <span class=\"tooltip-content\">Delete</span>\n    </a>\n</td>\n<td>{{organization.id}}</td>\n<td><img [src]=\"getLogoUrl()\"/></td>\n<td>{{organization.name}}</td>\n<td>{{organization.description}}</td>\n\n<clr-modal [(clrModalOpen)]=\"opened\">\n    <h3 class=\"modal-title\">Organization removal</h3>\n\n    <div class=\"modal-body\">\n        <p>Do you really want to remove {{organization.name}}?</p>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"opened = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteOrganization(organization.id)\">Ok</button>\n    </div>\n</clr-modal>\n"

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

module.exports = "<div spinner [spinnerClasses]=\"['spinner-lg']\" *ngIf=\"!pageLoadingComplete\"></div>\n<div *ngIf=\"pageLoadingComplete\">\n    <p><button type=\"button\" class=\"btn btn-primary\" (click)=\"createOrganization()\">Create Organization</button></p>\n\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th></th>\n                <th>Id</th>\n                <th>Logo</th>\n                <th>Name</th>\n                <th>Description</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let organization of organizations\" organization-item [organization]=\"organization\" (onRemoval)=\"removeFromList($event)\"></tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

module.exports = "<div spinner *ngIf=\"!pageLoadingComplete\"></div>\n<form [formGroup]=\"regionForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"pageLoadingComplete\">\n    <section class=\"form-block\">\n        <label>Region Form</label>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input id=\"name\" type=\"text\" formControlName=\"name\" size=\"45\">\n            <span *ngIf=\"regionForm.controls['name'].dirty && regionForm.hasError('required', 'name')\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Required field</span>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"orderIndex\">Order Index:</label>\n            <input id=\"orderIndex\" type=\"text\" size=\"45\" formControlName=\"orderIndex\">\n            <span id=\"invalidOrder\" *ngIf=\"regionForm.controls['orderIndex'].hasError('invalidOrder')\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Order should be a positive digit</span>\n        </div>\n    </section>\n\n    <button type=\"submit\" [disabled]=\"!regionForm.valid\" class=\"btn btn-primary\">{{newRegion() ? \"Create Region\" : \"Update Region\"}}</button>\n</form>\n"

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = "<td class=\"icon-cell\">\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"editRegion($event, region)\">\n        <clr-icon shape=\"edit\"></clr-icon>\n        <span class=\"tooltip-content\">Edit</span>\n    </a>\n    <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"confirm($event)\">\n        <clr-icon shape=\"trash\"></clr-icon>\n        <span class=\"tooltip-content\">Delete</span>\n    </a>\n</td>\n<td>{{region.id}}</td>\n<td>{{region.name}}</td>\n<td>{{region.deleted}}</td>\n\n<clr-modal [(clrModalOpen)]=\"opened\">\n    <h3 class=\"modal-title\">region removal</h3>\n\n    <div class=\"modal-body\">\n        <p>Do you really want to remove {{region.name}}?</p>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"opened = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRegion()\">Ok</button>\n    </div>\n</clr-modal>\n"

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

module.exports = "<div spinner [spinnerClasses]=\"['spinner-lg']\" *ngIf=\"!pageLoadingComplete\"></div>\n<div *ngIf=\"pageLoadingComplete\">\n    <p><a [routerLink]=\"'new'\" class=\"btn btn-primary\">Create Region</a></p>\n    <table class=\"table item-list\">\n        <thead>\n        <tr>\n            <th></th>\n            <th>Id</th>\n            <th>Name</th>\n            <th>Deleted</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let region of regions\" region-item [region]=\"region\"></tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ 917:
/***/ (function(module, exports) {

module.exports = "<section class=\"sidenav-content\">\n    <a class=\"nav-link\" [routerLink]=\"['categories']\" routerLinkActive=\"active\">Categories</a>\n    <a class=\"nav-link\" [routerLink]=\"['organizations']\" routerLinkActive=\"active\">Organizations</a>\n    <a class=\"nav-link\" [routerLink]=\"['events']\" routerLinkActive=\"active\">Events</a>\n    <a class=\"nav-link\" [routerLink]=\"['levels']\" routerLinkActive=\"active\">Levels</a>\n    <a class=\"nav-link\" [routerLink]=\"['regions']\" routerLinkActive=\"active\">Regions</a>\n    <a class=\"nav-link\" [routerLink]=\"['users']\" routerLinkActive=\"active\">Users</a>\n    <a class=\"nav-link\" [routerLink]=\"['login']\" routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\">Login</a>\n</section>\n"

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports = "<div spinner *ngIf=\"!pageLoadingComplete\"></div>\n<form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"pageLoadingComplete\">\n    <section class=\"form-block\">\n        <label>User Form</label>\n\n\n        <div class=\"form-group\">\n            <label for=\"username\">Email:</label>\n            <input type=\"text\" id=\"username\" size=\"45\" formControlName=\"username\" (blur)=\"validateUsername(usernameInput)\" #usernameInput>\n            <span id=\"usernameRequired\" *ngIf=\"userForm.controls['username'].dirty && userForm.hasError('required', 'username')\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Required field</span>\n            <span id=\"invalidEmail\" *ngIf=\"additionalUsernameErrors.invalidEmail\" [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">\n                '{{usernameInput.value}}' is not a valid email address\n            </span>\n            <span id=\"alreadyExists\" *ngIf=\"additionalUsernameErrors.alreadyExists\" [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">\n                User '{{usernameInput.value}}' already exists\n            </span>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"newUser()\">\n            <label for=\"passwordInput\">Password:</label>\n            <input type=\"password\" id=\"passwordInput\" size=\"45\" formControlName=\"password\">\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"newUser()\">\n            <label for=\"confirmedPasswordInput\">Confirm Password:</label>\n            <input type=\"password\" id=\"confirmedPasswordInput\" size=\"45\" formControlName=\"confirmedPassword\">\n            <span id=\"passwordMismatch\" *ngIf=\"passwordInput.hasError('passwordMismatch') || confirmedPasswordInput.hasError('passwordMismatch')\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Passwords don't match</span>\n            <span id=\"passwordRequired\" *ngIf=\"(passwordInput.dirty && passwordInput.hasError('required'))\n                || (confirmedPasswordInput.dirty && confirmedPasswordInput.hasError('required'))\"\n                  [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Both passwords required</span>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"hasRole('ROLE_ADMIN') || hasRole('ROLE_SUPER_ADMIN')\">\n            <label>Assigned Roles:</label>\n            <div class=\"checkbox\" *ngFor=\"let role of allRoles; let roleIndex = index\">\n                <clr-checkbox [clrChecked]=\"role.selected\" (change)=\"toggleRole(role)\">\n                    {{role.name}}\n                </clr-checkbox>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Enabled</label>\n            <div class=\"checkbox\">\n                <input type=\"checkbox\" id=\"enabledBox\" formControlName=\"enabled\">\n                <label for=\"enabledBox\"></label>\n            </div>\n        </div>\n\n        <button type=\"submit\" [disabled]=\"!userForm.valid\" class=\"btn btn-primary\">{{newUser() ? \"Create User\" : \"Update User\"}}</button>\n        <button type=\"button\" class=\"btn btn-outline\" *ngIf=\"!newUser() && (hasPermission() || hasRole('ROLE_SUPER_ADMIN'))\" (click)=\"openDialog()\">Reset Password</button>\n\n    </section>\n\n</form>\n\n<clr-modal [(clrModalOpen)]=\"opened\" [clrModalSize]=\"lg\">\n    <h3 class=\"modal-title\">Reset Password</h3>\n\n    <div class=\"modal-body\">\n        <form [formGroup]=\"passwordResettingForm\" *ngIf=\"!newUser() && pageLoadingComplete\">\n            <section>\n                <div class=\"form-group\" *ngIf=\"!hasRole('ROLE_SUPER_ADMIN') && hasPermission()\">\n                    <label for=\"currentPassword\">Current Password:</label>\n                    <input type=\"password\" id=\"currentPassword\" size=\"45\" formControlName=\"current\" (blur)=\"checkCurrentPassword()\">\n                    <span id=\"currentPasswordRequired\" *ngIf=\"passwordResettingForm.controls['current'].dirty && passwordResettingForm.hasError('required', 'current')\"\n                          [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Required field</span>\n                    <span id=\"currentPasswordMismatch\" *ngIf=\"!additionalPasswordErrors.checked\" [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">\n                        Current password seems to be not the valid one\n                    </span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"newPassword\">New Password:</label>\n                    <input type=\"password\" id=\"newPassword\" size=\"45\" formControlName=\"password\">\n                    <span id=\"newPasswordRequired\" *ngIf=\"passwordResettingForm.controls['password'].dirty && passwordResettingForm.hasError('required', 'password')\"\n                          [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Required field</span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"confirmedPassword\">Confirm Password:</label>\n                    <input type=\"password\" id=\"confirmedPassword\" size=\"45\" formControlName=\"confirmedPassword\">\n\n                    <span id=\"confirmedPasswordRequired\" *ngIf=\"passwordResettingForm.controls['confirmedPassword'].dirty && passwordResettingForm.hasError('required', 'confirmedPassword')\"\n                          [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Required field</span>\n\n                    <span id=\"resetPasswordMismatch\" *ngIf=\"newPasswordInput.hasError('passwordMismatch') || confirmedResetPasswordInput.hasError('passwordMismatch')\"\n                          [ngStyle]=\"{'color': '#E64120'}\" [style.font-size.px]=\"12\">Passwords don't match</span>\n                </div>\n            </section>\n        </form>\n    </div>\n\n    <div class=\"modal-footer\" *ngIf=\"!newUser() && pageLoadingComplete\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"opened = false\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!passwordResettingForm.valid\" (click)=\"resetPassword()\">Reset</button>\n    </div>\n</clr-modal>\n"

/***/ })

},[1187]);
//# sourceMappingURL=main.bundle.map