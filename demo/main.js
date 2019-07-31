(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		"./src/pages/about/about.module.ts",
		"pages-about-about-module"
	],
	"../pages/bookmarks/bookmarks.module": [
		"./src/pages/bookmarks/bookmarks.module.ts",
		"pages-bookmarks-bookmarks-module"
	],
	"../pages/browse/browse.module": [
		"./src/pages/browse/browse.module.ts",
		"pages-browse-browse-module"
	],
	"../pages/home/home.module": [
		"./src/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"../pages/random/random.module": [
		"./src/pages/random/random.module.ts",
		"pages-random-random-module"
	],
	"../pages/search/search.module": [
		"./src/pages/search/search.module.ts",
		"pages-search-search-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        loadChildren: '../pages/home/home.module#HomePageModule'
    },
    {
        path: 'browse',
        loadChildren: '../pages/browse/browse.module#BrowsePageModule'
    },
    {
        path: 'bookmarks',
        loadChildren: '../pages/bookmarks/bookmarks.module#BookmarksPageModule'
    },
    // {
    //   path: 'flashcards',
    //   loadChildren: '../pages/flashcards/flashcards.module#FlashcardsPageModule'
    // },
    {
        path: 'random',
        loadChildren: '../pages/random/random.module#RandomPageModule'
    },
    {
        path: 'search',
        loadChildren: '../pages/search/search.module#SearchPageModule'
    },
    {
        path: 'about',
        loadChildren: '../pages/about/about.module#AboutPageModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id='main'></header>\n<div class='nav-container vwidth-100'>\n  <nav class=\"vwidth-100 height-30 bg-accent nav\">\n    <logo-anime class='ui-button'></logo-anime>\n    <h4 class=\"nav-container__subheader\"></h4>\n    <div class=\"nav-container__content\">\n      <ul class=\"navbar navbar-nav\">\n        <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"search\">Search</a>\n        </li>\n        <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"browse\">Browse</a>\n        </li>\n        <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"random\">Random</a>\n        </li>\n        <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"bookmarks\">Bookmarks</a>\n        </li>\n        <!-- <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"flashcards\">Flashcards</a>\n        </li> -->\n        <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"about\">About</a>\n        </li>\n        <!-- |\n        <li class=\"navbar__item\">\n          <a class=\"navbar__link\" (click)=\"openSettings()\">Settings</a>\n        </li> -->\n\n      </ul>\n    </div>\n    <button class=\"nav-container__content--mobile\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon aria-label=\"Show toolbar\">menu</mat-icon>\n    </button>\n  </nav>\n</div>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item routerLink=\"search\">Search</button>\n  <button mat-menu-item routerLink=\"browse\">Browse</button>\n  <button mat-menu-item routerLink=\"random\">Random</button>\n  <button mat-menu-item routerLink=\"flashcards\">Flashcards</button>\n  <button mat-menu-item (click)=\"openSettings()\">Settings</button>\n  <button mat-menu-item routerLink=\"about\">About</button>\n</mat-menu>\n<div id='main__container'>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: MTDApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTDApp", function() { return MTDApp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages */ "./src/pages/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _pages_shared_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/shared/settings.component */ "./src/pages/shared/settings.component.ts");







var MTDApp = /** @class */ (function () {
    function MTDApp(router, bookmarkService, dialog, mtdService) {
        var _this = this;
        this.router = router;
        this.bookmarkService = bookmarkService;
        this.dialog = dialog;
        this.mtdService = mtdService;
        this.rootPage = _pages__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"];
        this.settings = { name: 'bloop' };
        this.appPages = [
            { title: "Home", url: '/' },
            { title: "Search", url: '/search' },
            { title: "Browse", url: '/browse' },
            { title: "Pick a Random Word!", url: '/random' },
            { title: "Bookmarks", url: '/bookmarks' },
            { title: "Flashcards", url: '/flashcards' },
            { title: "About", url: '/about' }
        ];
        this.mtdService.config$.subscribe(function (config) {
            var language_name = config.L1.name;
            var build_no = config.build;
            var id = language_name + build_no;
            _this.mtdService.dataDict$.subscribe(function (dataDict) {
                // retrieve favourited entries from storage and tag favourited entries
                var val = localStorage.getItem(id);
                if (val) {
                    console.log(val);
                    val = JSON.parse(val);
                    var favs = [];
                    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                        var fav = val_1[_i];
                        for (var _a = 0, dataDict_1 = dataDict; _a < dataDict_1.length; _a++) {
                            var entry = dataDict_1[_a];
                            if (entry.entryID === fav) {
                                entry['favourited'] = true;
                                favs.push(entry);
                                break;
                            }
                        }
                    }
                    _this.bookmarkService.setBookmarks(favs);
                }
                console.log(_this.bookmarkService.bookmarks.value);
            });
        });
        // });
    }
    MTDApp.prototype.openSettings = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_pages_shared_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsDialog"], {
            width: '250px',
            data: { name: 'test' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.settings['name'] = result;
        });
    };
    MTDApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
        this.router.navigate(page.component);
    };
    MTDApp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mtd-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["BookmarkService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _services__WEBPACK_IMPORTED_MODULE_3__["MTDService"]])
    ], MTDApp);
    return MTDApp;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages */ "./src/pages/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var _pages_shared_entry_list_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/shared/entry-list.module */ "./src/pages/shared/entry-list.module.ts");
/* harmony import */ var _pages_shared_word_modal_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/shared/word-modal.module */ "./src/pages/shared/word-modal.module.ts");
/* harmony import */ var _pages_shared_settings_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/shared/settings.module */ "./src/pages/shared/settings.module.ts");
/* harmony import */ var _pages_shared_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/shared/settings.component */ "./src/pages/shared/settings.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["MTDApp"],
                _pages__WEBPACK_IMPORTED_MODULE_9__["LogoAnime"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _pages_shared_entry_list_module__WEBPACK_IMPORTED_MODULE_12__["EntryListModule"],
                _pages_shared_word_modal_module__WEBPACK_IMPORTED_MODULE_13__["WordModalPageModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                _pages_shared_settings_module__WEBPACK_IMPORTED_MODULE_14__["SettingsModule"],
            ],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["MTDApp"],
                _pages__WEBPACK_IMPORTED_MODULE_9__["LogoAnime"],
                _pages_shared_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsDialog"],
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_10__["BookmarkService"], _services__WEBPACK_IMPORTED_MODULE_10__["MTDService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["MTDApp"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/global.ts":
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/*! exports provided: slugify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '-') // Replace all non-word chars with -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseURL: 'http://localhost:5000',
    remoteData: false,
    remoteConfig: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/pages/about/about.html":
/*!************************************!*\
  !*** ./src/pages/about/about.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='page__content about'>\n    <h1>About</h1>\n    <p>Welcome to the {{ language$ | async }} Mother Tongues Dictionary! Here is where you can put information about the project.\n    </p>\n</div>"

/***/ }),

/***/ "./src/pages/about/about.ts":
/*!**********************************!*\
  !*** ./src/pages/about/about.ts ***!
  \**********************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mtd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mtd.service */ "./src/services/mtd.service.ts");



var About = /** @class */ (function () {
    function About(mtdService) {
        this.mtdService = mtdService;
        this.language$ = this.mtdService.name$;
    }
    About = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-about',
            template: __webpack_require__(/*! ./about.html */ "./src/pages/about/about.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mtd_service__WEBPACK_IMPORTED_MODULE_2__["MTDService"]])
    ], About);
    return About;
}());



/***/ }),

/***/ "./src/pages/bookmarks/bookmarks.html":
/*!********************************************!*\
  !*** ./src/pages/bookmarks/bookmarks.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='page__content page__content--center container'>\n  <h1>Bookmarks</h1>\n  <div class=\"results\">\n    <entry-list [entries]='bookmarks' [parentEdit]=\"edit\"></entry-list>\n    <div *ngIf=\"bookmarks.length === 0\">\n      <p>Sorry, you don't have any bookmarks.<br> To save an entry to your bookmarks, click on the bookmark icon beside it that looks like this: <mat-icon>\n          bookmark_border</mat-icon><br>A bookmarked entry will have an icon that looks like this beside it: <mat-icon class='color-accent'>bookmark</mat-icon></p>\n    </div>\n  </div>\n  <div class='center'>\n    <button color=\"danger\" class=\"remove\" *ngIf=\"edit\" (click)=\"removeEntries(bookmarks)\">Remove selected\n      bookmarks</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/pages/bookmarks/bookmarks.scss":
/*!********************************************!*\
  !*** ./src/pages/bookmarks/bookmarks.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin-top: 20%;\n  text-align: center; }\n\n.remove {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS9tb3RoZXJ0b25ndWVzLVVJLXdlYi9zcmMvcGFnZXMvYm9va21hcmtzL2Jvb2ttYXJrcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL2Jvb2ttYXJrcy9ib29rbWFya3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIG1hcmdpbi10b3A6IDIwJSA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVtb3ZlIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */"

/***/ }),

/***/ "./src/pages/bookmarks/bookmarks.ts":
/*!******************************************!*\
  !*** ./src/pages/bookmarks/bookmarks.ts ***!
  \******************************************/
/*! exports provided: Bookmarks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookmarks", function() { return Bookmarks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");



var Bookmarks = /** @class */ (function () {
    function Bookmarks(bookmarkService) {
        var _this = this;
        this.bookmarkService = bookmarkService;
        this.edit = false;
        this.bookmarkService.bookmarks.subscribe(function (bookmarks) { _this.bookmarks = bookmarks; });
    }
    Bookmarks.prototype.removeEntries = function (bookmarks) {
        this.bookmarkService.setBookmarks(bookmarks.filter(function (bookmark) { return !bookmark.checked; }));
        this.toggleEdit();
    };
    Bookmarks.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    Bookmarks = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-bookmarks',
            template: __webpack_require__(/*! ./bookmarks.html */ "./src/pages/bookmarks/bookmarks.html"),
            styles: [__webpack_require__(/*! ./bookmarks.scss */ "./src/pages/bookmarks/bookmarks.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"]])
    ], Bookmarks);
    return Bookmarks;
}());



/***/ }),

/***/ "./src/pages/browse/browse.html":
/*!**************************************!*\
  !*** ./src/pages/browse/browse.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='page__content page__content--center container'>\n  <div class='container__row'>\n    <div class=\"browse__controls__container container__col--offset--1 container__col--4\">\n      <div class='browse__categories'>\n        <mat-form-field>\n          <mat-label>Select a Category</mat-label>\n          <mat-select (selectionChange)=\"selectCategory($event.value)\">\n            <mat-option value='words'>All Entries</mat-option>\n            <mat-option *ngFor=\"let cat of displayCategories$ | async\" [value]='cat'>\n              {{cat}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class='browse__alphabet__container'>\n        <ul class='browse__alphabet__grid'>\n          <li class='browse__alphabet__letter' [class.chosen]='highlightLetter(letter)' *ngFor=\"let letter of displayLetters$ | async\">\n            <button mat-button (click)='scrollTo(letter)'>{{letter}}</button>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"browse__entries__container container__col--7\">\n      <div class=\"browse__entries\" *ngIf=\"currentX\">\n        <mat-toolbar class='browse__toolbar'>\n          <button color='accent' class='browse__nav browse__nav--left browse__nav--web color-white' mat-flat-button\n            aria-label=\"See previous entries\" (click)=\"prevX()\">\n            <mat-icon class='browse__nav--left--icon'>navigate_before</mat-icon>\n            <span class='browse__nav--left--text'>Previous\n            </span>\n          </button>\n          <button color='accent' class='browse__nav browse__nav--left browse__nav--mobile' mat-icon-button\n            aria-label=\"See previous entries\" (click)=\"prevX()\">\n            <mat-icon class='browse__nav--left--icon'>navigate_before</mat-icon>\n          </button>\n          <p class='browse__entries--progress'>showing entries {{ (startIndex$ | async) + 1 }} to\n            {{ (startIndex$ | async) + currentX.length }}\n            of {{ (currentEntries$ | async )?.length }} </p>\n          <button class='browse__nav browse__nav--right color-white browse__nav--web' color='accent' mat-flat-button\n            aria-label=\"See following entries\" (click)=\"nextX()\">\n            <span class='browse__nav--right--text'>Next</span>\n            <mat-icon class='browse__nav--right--icon'>navigate_next</mat-icon>\n          </button>\n          <button class='browse__nav browse__nav--right browse__nav--mobile' color='accent' mat-icon-button\n            aria-label=\"See following entries\" (click)=\"nextX()\">\n            <mat-icon class='browse__nav--right--icon'>navigate_next</mat-icon>\n          </button>\n        </mat-toolbar>\n        <entry-list [entries]='currentX'></entry-list>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/pages/browse/browse.ts":
/*!************************************!*\
  !*** ./src/pages/browse/browse.ts ***!
  \************************************/
/*! exports provided: Browse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browse", function() { return Browse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var Browse = /** @class */ (function () {
    function Browse(bookmarkService, mtdService) {
        var _this = this;
        this.bookmarkService = bookmarkService;
        this.mtdService = mtdService;
        this.selectedCategory = "words";
        this.startIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.default_shown = 8;
        // currentBrowsingLetter: String = this.letters[this.currentBrowsingEntries[0].sorting_form[0]];
        this.letterSelectOptions = { header: "Select a Letter" };
        this.categorySelectOptions = { header: "Select a Category" };
        this.displayCategories$ = this.mtdService.category_keys$;
        this.currentEntries$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.mtdService.dataDict_value);
        // this.letters = this.mtdService.config_value.L1.lettersInLanguage;
        this.mtdService.dataDict$.subscribe(function (x) {
            _this.currentEntries$.next(x);
            _this.initializeEntries();
        });
        this.currentEntries$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (entries) { return _this.getXFrom(_this.startIndex$.value, entries); })).subscribe(function (entries) { return _this.currentX = entries; });
        this.startIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (i) { return _this.getXFrom(i, _this.currentEntries$.getValue()); })).subscribe(function (entries) { return _this.currentX = entries; });
        this.initializeEntries();
    }
    Browse.prototype.getXFrom = function (i, entries, x) {
        if (x === void 0) { x = this.default_shown; }
        return entries.slice(i, i + x);
    };
    Browse.prototype.initializeEntries = function () {
        // Add letter index to first words of that letter in entries
        this.letterInit();
    };
    Browse.prototype.letterNeverStarts = function (letter) {
        return this.displayLetters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (letters) { return letters.indexOf(letter) === -1; }));
    };
    Browse.prototype.highlightLetter = function (letter) {
        return this.letters.indexOf(letter) === this.currentX[0].sorting_form[0];
    };
    // Determine whether letter occurs word-initially
    Browse.prototype.letterInit = function () {
        var _this = this;
        this.letters = this.mtdService.config_value.L1.lettersInLanguage;
        this.displayLetters$ = this.currentEntries$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (entries) {
            var newLetters = [];
            for (var _i = 0, _a = _this.letters; _i < _a.length; _i++) {
                var letter = _a[_i];
                var ind = _this.letters.indexOf(letter);
                for (var _b = 0, entries_1 = entries; _b < entries_1.length; _b++) {
                    var entry = entries_1[_b];
                    if (entry.sorting_form[0] === ind) {
                        entry.firstWordIndex = ind;
                        newLetters.push(letter);
                        break;
                    }
                }
            }
            return newLetters;
        }));
    };
    // Scroll to previous X entries
    Browse.prototype.prevX = function () {
        var current_val = this.startIndex$.value;
        if (current_val - this.default_shown > 0) {
            this.startIndex$.next(current_val -= this.default_shown);
        }
        else {
            this.startIndex$.next(0);
        }
    };
    // Scroll to next X entries
    Browse.prototype.nextX = function () {
        var current_val = this.startIndex$.value;
        if (current_val + this.default_shown < this.currentEntries$.getValue().length) {
            this.startIndex$.next(current_val += this.default_shown);
        }
        else {
            this.startIndex$.next(Math.max(this.currentEntries$.getValue().length - this.default_shown, 0));
        }
    };
    // Scroll to letter
    Browse.prototype.scrollTo = function (letter) {
        var letterIndex = this.letters.indexOf(letter);
        for (var _i = 0, _a = this.currentEntries$.getValue(); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.sorting_form[0] === letterIndex) {
                this.startIndex$.next(this.currentEntries$.getValue().indexOf(entry));
                break;
            }
        }
    };
    Browse.prototype.selectCategory = function (category) {
        var _this = this;
        if (category === 'words') {
            this.mtdService.dataDict$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return _this.currentEntries$.next(x); })).subscribe().unsubscribe();
        }
        else {
            this.mtdService.categories$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) {
                return _this.currentEntries$.next(x[category]);
            })).subscribe().unsubscribe();
        }
        this.selectedCategory = category;
        this.startIndex$.next(0);
        this.letterInit();
    };
    Browse = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-browse',
            template: __webpack_require__(/*! ./browse.html */ "./src/pages/browse/browse.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"], _services__WEBPACK_IMPORTED_MODULE_2__["MTDService"]])
    ], Browse);
    return Browse;
}());



/***/ }),

/***/ "./src/pages/flashcards/flashcard-modal.component.html":
/*!*************************************************************!*\
  !*** ./src/pages/flashcards/flashcard-modal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Flashcard Quiz</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<!-- <ion-content ng-switch=\"style\" on-swipe-up=\"front = !front\"> -->\n  <p>Hello World</p>\n  <!-- \n  <ion-card>\n\n    <div *ngIf=\"displayImages\">\n      <img (click)=\"playAudio(card)\" [(src)]=\"image\" onError=\"this.src='assets/img/default.png'\" *ngIf=\"card.img\" />\n    </div>\n    <ion-card-content [ngSwitch]=\"style\">\n      <div *ngSwitchCase=\"'Active'\">\n        <ion-card-title *ngIf=\"!front\">\n          {{card.word}}\n        </ion-card-title>\n        <ion-card-title class=\"definition\" *ngIf=\"front\">\n          {{card.definition}}\n        </ion-card-title>\n      </div>\n      <div *ngSwitchCase=\"'Passive'\">\n        <ion-card-title *ngIf=\"!front\">\n          {{card.definition}}\n        </ion-card-title>\n        <ion-card-title class=\"definition\" *ngIf=\"front\">\n          {{card.word}}\n        </ion-card-title>\n      </div>\n      <div *ngSwitchCase=\"'Non-Written'\">\n        <ion-card-title *ngIf=\"!front\">\n          {{card.word}} - {{card.definition}}\n        </ion-card-title>\n      </div>\n      <div *ngIf=\"card.optional && optional\">\n        <p class=\"option\" *ngFor=\"let option of checkedOptions; let i = index\">\n          {{option}} - {{card.optional[option]}}\n        </p>\n      </div>\n    </ion-card-content>\n\n    <ion-row *ngIf=\"(card.audio | noNullObjectValues)?.length > 0\">\n      <ion-card>\n        <ion-card-header>\n          Audio\n        </ion-card-header>\n\n        <ion-list>\n          <ion-item button *ngFor=\"let track of (card.audio | noNullObjectValues)\"\n            (click)=\"playAudioTrack(card, track)\">\n            <ion-icon name=\"musical-notes\" item-start></ion-icon>\n            <ion-label>Speaker: {{ track.speaker }}</ion-label>\n          </ion-item>\n\n        </ion-list>\n      </ion-card>\n\n    </ion-row>\n\n    <ion-row *ngIf=\"(card.example_sentence | noNullValues)?.length > 0\">\n      <ion-card>\n        <ion-card-header>\n          Sentences\n        </ion-card-header>\n\n        <ion-list *ngFor=\"let sentence of (card.example_sentence | noNullValues); let i = index\">\n\n          <ion-item button *ngFor=\"let track of (card.example_sentence_audio[i] | noNullObjectValues)\"\n            (click)=\"playAudioTrack(card, track)\">\n            <ion-label>\n              <ion-icon name=\"musical-notes\" item-start></ion-icon>\n              <h2>{{ sentence }}</h2>\n              <h4>{{ card.example_sentence_definition[i] }}</h4>\n              <h6>Speaker: {{ track.speaker }}</h6>\n            </ion-label>\n          </ion-item>\n\n        </ion-list>\n      </ion-card>\n\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color=\"primary\" icon-left (click)=\"toggleFav(card)\">\n          <ion-icon *ngIf=\"favourited(card)\" name=\"ios-bookmarks\"></ion-icon>\n          <ion-icon *ngIf=\"!favourited(card)\" name=\"ios-bookmarks-outline\"></ion-icon>\n          Bookmark\n        </button>\n        <button ion-button clear small color=\"primary\" icon-left (click)=\"front = !front\">\n          <ion-icon name='refresh'></ion-icon>\n          <span *ngIf=\"front\">Flip to back</span><span *ngIf=\"!front\">Flip to front</span>\n        </button>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card> -->\n\n<!-- </ion-content> -->\n<!-- \n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons left class=\"bar-buttons bar-buttons-ios\">\n      <button ion-button icon-only (click)=\"prev1()\">\n        <ion-icon name=\"ios-arrow-back\" class=\"scroll\"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end class=\"bar-buttons bar-buttons-ios\">\n      <button ion-button icon-only (click)=\"next1()\">\n        <ion-icon name=\"ios-arrow-forward\" class=\"scroll\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->"

/***/ }),

/***/ "./src/pages/flashcards/flashcard-modal.component.ts":
/*!***********************************************************!*\
  !*** ./src/pages/flashcards/flashcard-modal.component.ts ***!
  \***********************************************************/
/*! exports provided: Flashcard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flashcard", function() { return Flashcard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");



var Flashcard = /** @class */ (function () {
    function Flashcard(bookmarkService) {
        // this.deck = this.navParams.get('deck');
        // this.categories = bookmarkService.categories
        // this.card = this.categories[this.deck][this.startIndex]
        // this.front = true;
        // try {
        //   this.image = 'assets/img/' + this.card.img[0];
        // } catch (error) {
        //   this.image = "";
        // }
        this.bookmarkService = bookmarkService;
        this.displayImages = true; //default show images, turns to false on 404
        this.startIndex = 0;
        this.audio_playing = [];
        // this.style = this.navParams.get('style');
    }
    // Go to previous card in deck
    Flashcard.prototype.prev1 = function () {
        if (this.startIndex - 1 > 0) {
            this.startIndex -= 1;
            this.card = this.categories[this.deck][this.startIndex];
            try {
                this.image = 'assets/img/' + this.card.img[0];
            }
            catch (error) {
            }
        }
        else {
            this.startIndex = 0;
            this.card = this.categories[this.deck][this.startIndex];
            try {
                this.image = 'assets/img/' + this.card.img[0];
            }
            catch (error) {
            }
        }
    };
    // Go to next card in deck
    Flashcard.prototype.next1 = function () {
        if (this.startIndex + 1 < this.categories[this.deck].length) {
            this.startIndex += 1;
            this.card = this.categories[this.deck][this.startIndex];
            try {
                this.image = 'assets/img/' + this.card.img[0];
            }
            catch (error) {
            }
        }
        else {
            this.startIndex = this.categories[this.deck].length - 1;
            this.card = this.categories[this.deck][this.startIndex];
            try {
                this.image = 'assets/img/' + this.card.img[0];
            }
            catch (error) {
            }
        }
    };
    Flashcard.prototype.dismiss = function () {
        // this.modalCtrl.dismiss();
    };
    Flashcard.prototype.onSuccess = function (id) {
        console.log(id);
        // console.log('loaded audio ${id} with path of ${path}'); 
    };
    ;
    Flashcard.prototype.onError = function (err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('show alert');
                console.log(err);
                return [2 /*return*/];
            });
        });
    };
    ;
    Flashcard.prototype.showAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('show alert');
                return [2 /*return*/];
            });
        });
    };
    ;
    Flashcard.prototype.imageError = function () {
        this.displayImages = false;
    };
    Flashcard.prototype.toggleFav = function (entry) {
        this.bookmarkService.toggleBookmark(entry);
    };
    Flashcard.prototype.favourited = function (entry) {
        return this.bookmarkService.bookmarks.value.indexOf(entry) > -1;
    };
    Flashcard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'flashcard-modal',
            template: __webpack_require__(/*! ./flashcard-modal.component.html */ "./src/pages/flashcards/flashcard-modal.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"]])
    ], Flashcard);
    return Flashcard;
}());



/***/ }),

/***/ "./src/pages/flashcards/flashcards.html":
/*!**********************************************!*\
  !*** ./src/pages/flashcards/flashcards.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Flashcards</h1>\n\n  <!-- <ion-list class=\"deck-select\">\n    <ion-list-header>\n      <ion-label>\n        First, select a flashcard deck:\n      </ion-label>\n    </ion-list-header>\n    <ion-item mode=\"ios\">\n      <ion-label class=\"label-left\" mode=\"ios\">Select a Deck</ion-label>\n      <ion-select mode=\"ios\" [(ngModel)]=\"deck\" [interfaceOptions]=\"deckSelectOptions\">\n        <ion-select-option *ngFor='let deck of decks$ | async'>{{deck}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header text-wrap>\n      <ion-label>\n        Then, select a style of learning between the following options:\n      </ion-label>\n    </ion-list-header>\n    <ion-radio-group [(ngModel)]=\"selectedFlashcardStyle\">\n      <ion-item *ngFor=\"let style of flashcardStyles$ | async\">\n        <ion-label>{{style.title}}<p>{{style.info}}</p>\n        </ion-label>\n        <ion-radio value=\"{{style.title}}\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <div class=\"center\">\n    <ion-button secondary (click)='startFlashcards()'>Click here to start!</ion-button>\n  </div> -->"

/***/ }),

/***/ "./src/pages/flashcards/flashcards.scss":
/*!**********************************************!*\
  !*** ./src/pages/flashcards/flashcards.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  text-align: left !important; }\n\n.list-header-md {\n  border-top: none !important; }\n\n.center {\n  text-align: center;\n  margin-top: 5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS9tb3RoZXJ0b25ndWVzLVVJLXdlYi9zcmMvcGFnZXMvZmxhc2hjYXJkcy9mbGFzaGNhcmRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9wYWdlcy9mbGFzaGNhcmRzL2ZsYXNoY2FyZHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWhlYWRlci1tZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNWVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/pages/flashcards/flashcards.ts":
/*!********************************************!*\
  !*** ./src/pages/flashcards/flashcards.ts ***!
  \********************************************/
/*! exports provided: Flashcards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flashcards", function() { return Flashcards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var Flashcards = /** @class */ (function () {
    function Flashcards(mtdService) {
        this.mtdService = mtdService;
        this.deckSelectOptions = { header: "Select a Deck" };
        this.name$ = this.mtdService.name$;
        this.decks$ = this.mtdService.category_keys$;
        this.flashcardStyles$ = this.name$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
            return [
                { "title": "Easy", "info": "See the " + name + " word and guess English." },
                { "title": "Medium", "info": "See the English and guess " + name },
                { "title": "Hard", "info": "See audio/image only and try and guess the word in both English and " + name + "!" }
            ];
        }));
    }
    Flashcards.prototype.startFlashcards = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('start flashcards');
                return [2 /*return*/];
            });
        });
    };
    Flashcards = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-flashcards',
            template: __webpack_require__(/*! ./flashcards.html */ "./src/pages/flashcards/flashcards.html"),
            styles: [__webpack_require__(/*! ./flashcards.scss */ "./src/pages/flashcards/flashcards.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["MTDService"]])
    ], Flashcards);
    return Flashcards;
}());



/***/ }),

/***/ "./src/pages/home/home.html":
/*!**********************************!*\
  !*** ./src/pages/home/home.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='header__container'>\n    <h1 class='header__title'>Welcome to the <b>{{ language$ | async }}</b> Mother Tongues Dictionary!</h1>\n    <p class='header__subheader'>To get started, either download the apps below or click on the search button above, and start learning!</p>\n</div>"

/***/ }),

/***/ "./src/pages/home/home.ts":
/*!********************************!*\
  !*** ./src/pages/home/home.ts ***!
  \********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mtd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mtd.service */ "./src/services/mtd.service.ts");



var Home = /** @class */ (function () {
    function Home(mtdService) {
        this.mtdService = mtdService;
        this.language$ = this.mtdService.name$;
    }
    Home = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-home',
            template: __webpack_require__(/*! ./home.html */ "./src/pages/home/home.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mtd_service__WEBPACK_IMPORTED_MODULE_2__["MTDService"]])
    ], Home);
    return Home;
}());



/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/*! exports provided: EntryList, WordModal, About, Bookmarks, Browse, Flashcards, Flashcard, Home, Random, SearchComponent, LogoAnime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about */ "./src/pages/about/about.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _about_about__WEBPACK_IMPORTED_MODULE_0__["About"]; });

/* harmony import */ var _bookmarks_bookmarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookmarks/bookmarks */ "./src/pages/bookmarks/bookmarks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bookmarks", function() { return _bookmarks_bookmarks__WEBPACK_IMPORTED_MODULE_1__["Bookmarks"]; });

/* harmony import */ var _browse_browse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse/browse */ "./src/pages/browse/browse.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browse", function() { return _browse_browse__WEBPACK_IMPORTED_MODULE_2__["Browse"]; });

/* harmony import */ var _flashcards_flashcards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flashcards/flashcards */ "./src/pages/flashcards/flashcards.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flashcards", function() { return _flashcards_flashcards__WEBPACK_IMPORTED_MODULE_3__["Flashcards"]; });

/* harmony import */ var _flashcards_flashcard_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flashcards/flashcard-modal.component */ "./src/pages/flashcards/flashcard-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flashcard", function() { return _flashcards_flashcard_modal_component__WEBPACK_IMPORTED_MODULE_4__["Flashcard"]; });

/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home */ "./src/pages/home/home.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _home_home__WEBPACK_IMPORTED_MODULE_5__["Home"]; });

/* harmony import */ var _random_random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random/random */ "./src/pages/random/random.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Random", function() { return _random_random__WEBPACK_IMPORTED_MODULE_6__["Random"]; });

/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search */ "./src/pages/search/search.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return _search_search__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]; });

/* harmony import */ var _shared_entry_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/entry-list.component */ "./src/pages/shared/entry-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryList", function() { return _shared_entry_list_component__WEBPACK_IMPORTED_MODULE_8__["EntryList"]; });

/* harmony import */ var _shared_word_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/word-modal.component */ "./src/pages/shared/word-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordModal", function() { return _shared_word_modal_component__WEBPACK_IMPORTED_MODULE_9__["WordModal"]; });

/* harmony import */ var _shared_logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/logo */ "./src/pages/shared/logo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoAnime", function() { return _shared_logo__WEBPACK_IMPORTED_MODULE_10__["LogoAnime"]; });














/***/ }),

/***/ "./src/pages/random/random.html":
/*!**************************************!*\
  !*** ./src/pages/random/random.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='page__content page__content--center'>\n\n  <button class='color-white' mat-raised-button color=\"accent\" (click)='getRandom()'>Click here for 10 Random words</button>\n\n  <div class=\"results\" *ngIf=\"entries$ | async as entries_val\">\n    <entry-list [entries]=\"entries_val\"></entry-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/pages/random/random.scss":
/*!**************************************!*\
  !*** ./src/pages/random/random.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvcmFuZG9tL3JhbmRvbS5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/random/random.ts":
/*!************************************!*\
  !*** ./src/pages/random/random.ts ***!
  \************************************/
/*! exports provided: Random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Random", function() { return Random; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");



var Random = /** @class */ (function () {
    function Random(mtdService) {
        this.mtdService = mtdService;
    }
    Random.prototype.getRandom = function () {
        this.entries$ = this.mtdService.getRandom$(10);
    };
    Random = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-random',
            template: __webpack_require__(/*! ./random.html */ "./src/pages/random/random.html"),
            styles: [__webpack_require__(/*! ./random.scss */ "./src/pages/random/random.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["MTDService"]])
    ], Random);
    return Random;
}());



/***/ }),

/***/ "./src/pages/search/search.html":
/*!**************************************!*\
  !*** ./src/pages/search/search.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='page__content page__content--center'>\n  <div class='search__bar__container'>\n    <mat-form-field class='search__bar'>\n      <mat-icon [inline]=\"true\" matPrefix class='search__icon'>search</mat-icon>\n      <input *ngIf='entries$ | async as entries' autocomplete=\"off\" type=\"text\"\n        placeholder=\"Type a word here to search {{ entries.length }} {{ language$ | async }} words.\" aria-label=\"Number\"\n        matInput (keyup)=\"onSearchKeyUp($event)\">\n    </mat-form-field>\n  </div>\n  <!-- <ion-searchbar [formControl]=\"searchControl\" autocapitalize=\"none\"></ion-searchbar> -->\n  <div *ngIf='(searchQuery$ | async) && results$ | async as results'>\n    <div class='search__results'>\n      <div class='search__results--matches' *ngIf=\"filterMatches(results).length > 0\">\n        <div class=\"search__results__container\">\n          <h4 class='search__results__title'>Matches</h4>\n          <entry-list [entries]=\"filterMatches(results)\" [searchTerm]=\"searchQuery$ | async\" [shouldHighlight]='true'>\n          </entry-list>\n        </div>\n      </div>\n      <div class='search__results--partMatches' *ngIf=\"filterPartMatches(results).length > 0\">\n        <div class=\"search__results__container\">\n          <h4 class='search__results__title'>Partial Matches</h4>\n          <entry-list [entries]=\"filterPartMatches(results)\" [searchTerm]=\"searchQuery$ | async\"\n            [shouldHighlight]='true'></entry-list>\n        </div>\n      </div>\n      <div class='search__results--maybeMatches' *ngIf=\"filterMaybeMatches(results).length > 0\">\n        <div class=\"search__results__container\">\n          <h4 class='search__results__title'>Maybe you meant this?</h4>\n          <entry-list [entries]=\"filterMaybeMatches(results)\" [searchTerm]=\"searchQuery$ | async\"\n            [shouldHighlight]='true'>\n          </entry-list>\n        </div>\n      </div>\n      <div *ngIf='results.length === 0 && (searchQuery$ | async)'\n        class='search_results--none search__results__container'>\n        <h6>Sorry, we couldn't find any words that match '{{ searchQuery$ | async }}'. Please try something else.</h6>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/pages/search/search.scss":
/*!**************************************!*\
  !*** ./src/pages/search/search.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvc2VhcmNoL3NlYXJjaC5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/search/search.ts":
/*!************************************!*\
  !*** ./src/pages/search/search.ts ***!
  \************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(mtdService) {
        this.mtdService = mtdService;
        this.matchThreshold = 0;
        this.partMatchThreshold = 1;
        this.maybeMatchThreshold = 2;
        this.searchQuery$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.placeholder = 'Type a word here';
        this.entries$ = this.mtdService.dataDict$;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.language$ = this.mtdService.name$;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.results$ = this.searchQuery$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.entries$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (entries) { return _this.getResults(term, entries); })); }));
        this.results$.subscribe(function (x) { return console.log(x); });
    };
    SearchComponent.prototype.onSearchKeyUp = function (e) {
        this.searchQuery$.next(e.target.value);
    };
    SearchComponent.prototype.filterMatches = function (results) {
        var _this = this;
        return results.filter(function (r) { return r.distance <= _this.matchThreshold; });
    };
    SearchComponent.prototype.filterPartMatches = function (results) {
        var _this = this;
        return results.filter(function (r) { return (r.distance <= _this.partMatchThreshold && r.distance > _this.matchThreshold); });
    };
    SearchComponent.prototype.filterMaybeMatches = function (results) {
        var _this = this;
        return results.filter(function (r) { return (_this.maybeMatchThreshold && r.distance > _this.partMatchThreshold); });
    };
    SearchComponent.prototype.getL2 = function (searchQuery, entries) {
        var results = [];
        var re = new RegExp(searchQuery, 'i');
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            if (re.test(entry.definition)) {
                results.push(entry);
            }
        }
        var sortedAnswers = results.sort(function (a, b) {
            return a.definition.length - b.definition.length;
        });
        return (sortedAnswers.slice(0, 9));
    };
    // Get l2_results (eng) and target (l1) results
    SearchComponent.prototype.getResults = function (searchQuery, entries) {
        console.log('get results');
        if (searchQuery && searchQuery.length > 1) {
            console.log(searchQuery);
            var l2_results = this.getL2(searchQuery, entries).map(function (x) {
                x.distance = 0;
                x['type'] = 'L2';
                return x;
            });
            var l1_results = window['searchL1'](searchQuery, entries).map(function (x) {
                // levlib returns an array with the weight and entry
                x[1]['type'] = 'L1';
                return x[1];
            });
            var results = l2_results.concat(l1_results);
            return results;
        }
        else {
            return [];
        }
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-search',
            template: __webpack_require__(/*! ./search.html */ "./src/pages/search/search.html"),
            styles: [__webpack_require__(/*! ./search.scss */ "./src/pages/search/search.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["MTDService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/pages/shared/entry-list.component.html":
/*!****************************************************!*\
  !*** ./src/pages/shared/entry-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container margin-top-15 margin-bottom-15'>\n  <div class=\"match__container\" *ngFor=\"let entry of entries; last as isLast\" text-wrap>\n    <div class=' container__row'>\n      <div class='container__col--3'>\n        <button mat-icon-button aria-label=\"Bookmark entry\"\n          (click)=\"entry.favourited = !entry.favourited; toggleBookmark(entry)\">\n          <mat-icon *ngIf=\"!entry.favourited\">bookmark_border</mat-icon>\n          <mat-icon *ngIf=\"entry.favourited\" class='color-accent'>bookmark</mat-icon>\n        </button>\n        <button mat-icon-button aria-label=\"Show More information\" (click)=\"showModal(entry)\">\n          <mat-icon>list</mat-icon>\n        </button>\n        <button [disabled]='!entry.audio | noNullObjectValues' mat-icon-button\n          aria-label=\"Play Audio\" (click)='playDefaultAudio(entry)'>\n          <mat-icon>audiotrack</mat-icon>\n        </button>\n\n      </div>\n\n      <div class=\"container__col--4 match__term__container\">\n\n        <span class='match__term match__term--target'\n          [ngClass]=\"{'langMatched': entry.type === 'L1' && shouldHighlight}\">{{entry.word}}</span>\n\n      </div>\n\n      <div class=\"container__col--offset--1 container__col--3 match__term__container\" (click)=\"showModal()\">\n        <span *ngIf='shouldHighlight' class=\"match__term match__term--translation\"\n          [innerHTML]=\"highlight(entry.definition)\"></span>\n        <span *ngIf='!shouldHighlight' class=\"match__term match__term--translation\">{{entry.definition}}</span>\n      </div>\n      <div class=\"container__col--1\">\n      </div>\n    </div>\n    <hr *ngIf=\"!isLast\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/pages/shared/entry-list.component.scss":
/*!****************************************************!*\
  !*** ./src/pages/shared/entry-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvc2hhcmVkL2VudHJ5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/pages/shared/entry-list.component.ts":
/*!**************************************************!*\
  !*** ./src/pages/shared/entry-list.component.ts ***!
  \**************************************************/
/*! exports provided: EntryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryList", function() { return EntryList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _word_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word-modal.component */ "./src/pages/shared/word-modal.component.ts");
/* harmony import */ var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bookmark.service */ "./src/services/bookmark.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _file_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-not-found.component */ "./src/pages/shared/file-not-found.component.ts");







var EntryList = /** @class */ (function () {
    function EntryList(bookmarkService, dialog, mtdService) {
        this.bookmarkService = bookmarkService;
        this.dialog = dialog;
        this.mtdService = mtdService;
        this.edit = false;
        this.shouldHighlight = false;
        // this.pageName = modalCtrl.name
    }
    EntryList.prototype.ngOnInit = function () {
        console.log(this.entries);
    };
    EntryList.prototype.showModal = function (entry) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.dialog.open(_word_modal_component__WEBPACK_IMPORTED_MODULE_2__["WordModal"], {
                    width: '40%',
                    data: { entry: entry }
                });
                return [2 /*return*/];
            });
        });
    };
    EntryList.prototype.playDefaultAudio = function (entry) {
        var _this = this;
        var defaultAudio = this.mtdService.config_value.audio_path + entry.audio.filter(function (audioFile) { return audioFile.filename; })[0].filename;
        console.log(defaultAudio);
        var audio = new Audio(defaultAudio);
        audio.onerror = function () { return _this.fileNotFound(defaultAudio); };
        audio.play();
    };
    EntryList.prototype.fileNotFound = function (path) {
        var dialogRef = this.dialog.open(_file_not_found_component__WEBPACK_IMPORTED_MODULE_6__["FileNotFoundDialog"], {
            width: '250px',
            data: { path: path }
        });
    };
    EntryList.prototype.highlight = function (text) {
        if (!this.searchTerm) {
            return text;
        }
        return text.replace(new RegExp(this.searchTerm, 'gi'), '<span class="langMatched">$&</span>');
    };
    EntryList.prototype.toggleBookmark = function (entry) {
        this.bookmarkService.toggleBookmark(entry);
    };
    EntryList.prototype.ngOnChanges = function () {
        this.edit = this.parentEdit;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EntryList.prototype, "parentEdit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], EntryList.prototype, "entries", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EntryList.prototype, "searchTerm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EntryList.prototype, "shouldHighlight", void 0);
    EntryList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'entry-list',
            template: __webpack_require__(/*! ./entry-list.component.html */ "./src/pages/shared/entry-list.component.html"),
            styles: [__webpack_require__(/*! ./entry-list.component.scss */ "./src/pages/shared/entry-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bookmark_service__WEBPACK_IMPORTED_MODULE_3__["BookmarkService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _services__WEBPACK_IMPORTED_MODULE_4__["MTDService"]])
    ], EntryList);
    return EntryList;
}());



/***/ }),

/***/ "./src/pages/shared/entry-list.module.ts":
/*!***********************************************!*\
  !*** ./src/pages/shared/entry-list.module.ts ***!
  \***********************************************/
/*! exports provided: EntryListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryListModule", function() { return EntryListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var _entry_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entry-list.component */ "./src/pages/shared/entry-list.component.ts");
/* harmony import */ var _file_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-not-found.component */ "./src/pages/shared/file-not-found.component.ts");








var EntryListModule = /** @class */ (function () {
    function EntryListModule() {
    }
    EntryListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            ],
            declarations: [_entry_list_component__WEBPACK_IMPORTED_MODULE_6__["EntryList"], _file_not_found_component__WEBPACK_IMPORTED_MODULE_7__["FileNotFoundDialog"]],
            entryComponents: [_file_not_found_component__WEBPACK_IMPORTED_MODULE_7__["FileNotFoundDialog"]],
            exports: [_entry_list_component__WEBPACK_IMPORTED_MODULE_6__["EntryList"]]
        })
    ], EntryListModule);
    return EntryListModule;
}());



/***/ }),

/***/ "./src/pages/shared/file-not-found-dialog.html":
/*!*****************************************************!*\
  !*** ./src/pages/shared/file-not-found-dialog.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>File Not Found</h1>\n<div mat-dialog-content>\n    <p>Sorry, something wrong happened when looking for the file:</p>\n    <a>{{ data.path }}</a>\n    <p>Please, make sure you're connected to the internet.</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button cdkFocusInitial (click)='close()'>Ok</button>\n</div>"

/***/ }),

/***/ "./src/pages/shared/file-not-found.component.ts":
/*!******************************************************!*\
  !*** ./src/pages/shared/file-not-found.component.ts ***!
  \******************************************************/
/*! exports provided: FileNotFoundDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNotFoundDialog", function() { return FileNotFoundDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var FileNotFoundDialog = /** @class */ (function () {
    function FileNotFoundDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FileNotFoundDialog.prototype.close = function () {
        this.dialogRef.close();
    };
    FileNotFoundDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'file-not-found-dialog',
            template: __webpack_require__(/*! ./file-not-found-dialog.html */ "./src/pages/shared/file-not-found-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], FileNotFoundDialog);
    return FileNotFoundDialog;
}());



/***/ }),

/***/ "./src/pages/shared/logo.html":
/*!************************************!*\
  !*** ./src/pages/shared/logo.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='lineDrawing' id=\"lineDrawingTree\">\n    <svg id='svg-tree' version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"183.000000pt\" height=\"184.000000pt\"\n        viewBox=\"0 0 183.000000 184.000000\" preserveAspectRatio=\"xMidYMid meet\">\n        <g class='lines' id='svgGroupTree' transform=\"translate(0.000000,184.000000) scale(0.100000,-0.100000)\"\n            fill=\"#000000\" stroke=\"none\">\n            <path d=\"M840 1826 c-41 -8 -92 -21 -113 -30 -21 -8 -41 -15 -45 -14 -10 2\n       -37 -9 -117 -48 -191 -92 -425 -360 -481 -549 -24 -86 -41 -199 -37 -256 22\n       -306 130 -517 357 -700 103 -82 148 -106 280 -148 132 -42 268 -55 413 -37 60\n       7 192 49 256 83 83 42 246 195 314 294 107 156 170 367 159 534 -3 50 -8 101\n       -11 115 -3 14 -8 38 -11 54 -23 127 -116 303 -218 415 -88 95 -253 204 -376\n       248 -119 43 -261 58 -370 39z m220 -51 c12 -4 32 -8 43 -10 104 -15 262 -83\n       357 -155 61 -46 150 -141 196 -210 69 -103 131 -295 134 -415 4 -124 2 -157\n       -14 -225 -2 -8 -7 -34 -11 -57 -28 -156 -284 -472 -450 -555 -41 -21 -153 -56\n       -190 -60 -23 -2 -33 3 -50 28 -27 40 -68 160 -60 174 4 6 21 0 43 -15 39 -27\n       58 -31 64 -15 3 9 23 15 73 20 6 0 2 5 -8 11 -9 5 -21 8 -26 4 -5 -3 -12 -1\n       -16 5 -3 5 -17 10 -31 10 -14 0 -32 7 -41 15 -8 8 -19 13 -24 10 -5 -4 -6 2\n       -2 11 5 13 3 16 -10 11 -9 -3 -17 -2 -17 4 0 6 10 9 23 7 12 -2 21 -9 20 -16\n       -2 -6 4 -12 12 -12 8 0 15 -4 15 -8 0 -5 10 -8 23 -7 12 1 26 0 32 -3 5 -3 21\n       -7 35 -8 l25 -3 -23 18 c-21 16 -22 19 -8 31 14 11 16 10 10 -4 -3 -9 -2 -17\n       2 -17 47 -7 55 -6 49 10 -5 13 -4 14 6 4 7 -7 20 -13 28 -13 13 1 13 3 -2 14\n       -16 12 -15 14 18 20 19 4 35 12 35 18 0 6 -11 8 -27 5 -24 -4 -26 -4 -10 8 21\n       15 22 29 1 21 -12 -4 -15 -2 -10 9 3 8 0 15 -7 15 -8 0 -9 3 -1 8 11 7 15 42\n       5 42 -4 0 -16 -7 -28 -15 -20 -14 -22 -14 -20 4 1 11 10 22 21 25 15 4 17 8 8\n       19 -10 11 -9 17 4 28 15 12 14 14 -7 20 -14 3 -35 -1 -52 -10 -25 -14 -28 -14\n       -49 6 -19 19 -19 23 -5 37 13 13 16 14 21 1 3 -9 12 -12 23 -8 12 4 10 -1 -7\n       -15 -14 -12 -21 -21 -17 -22 7 0 53 23 77 38 2 2 -2 7 -9 12 -12 7 -12 12 2\n       33 15 23 15 26 0 31 -12 5 -14 16 -11 51 4 30 2 45 -6 45 -6 0 -5 4 3 9 9 6\n       10 11 3 15 -6 4 -8 14 -5 22 5 14 3 15 -15 5 -29 -15 -40 -14 -17 2 11 9 15\n       19 10 27 -4 7 -2 16 6 20 10 7 10 12 0 23 -9 12 -9 16 1 20 8 4 5 8 -9 12 -12\n       4 -20 12 -17 18 3 8 -9 12 -31 13 -35 0 -51 -15 -17 -17 11 0 13 -2 4 -6 -14\n       -5 -56 32 -58 52 0 5 -2 16 -2 23 -1 9 -9 11 -23 7 -16 -5 -20 -3 -17 6 3 8\n       13 14 24 14 10 0 25 4 32 8 6 5 17 5 22 2 6 -3 10 -2 10 4 0 5 8 11 17 13 12\n       2 18 14 19 36 2 29 -1 32 -20 26 -21 -7 -21 -6 -3 14 11 11 16 26 12 31 -3 6\n       1 11 9 11 20 0 20 7 1 27 -18 17 -50 10 -39 -9 6 -9 3 -9 -9 1 -9 7 -25 10\n       -34 7 -17 -7 -17 -6 0 11 15 16 19 16 27 3 7 -10 10 -11 10 -2 0 6 7 12 15 12\n       20 0 19 15 -1 35 -15 15 -15 17 5 22 26 7 26 8 0 34 -20 20 -22 20 -40 3 -17\n       -15 -29 -7 -12 10 10 10 11 46 1 46 -5 0 -6 5 -3 10 3 6 -1 10 -11 10 -13 0\n       -14 3 -4 15 7 8 9 15 5 15 -4 0 -2 7 5 15 10 12 10 18 0 30 -11 14 -15 14 -33\n       -2 -19 -17 -20 -17 -15 2 3 11 9 28 13 37 5 13 2 15 -14 11 -12 -3 -21 -1 -21\n       6 0 6 -7 11 -17 11 -9 0 -13 3 -10 7 4 3 0 14 -9 24 -13 14 -21 16 -35 8 -11\n       -5 -19 -16 -19 -24 0 -8 -5 -15 -11 -15 -19 0 -41 -28 -28 -36 9 -5 7 -11 -5\n       -20 -10 -7 -15 -18 -11 -23 3 -6 -2 -15 -12 -19 -22 -9 -27 -42 -6 -42 8 0 12\n       -4 8 -10 -3 -5 -13 -6 -22 -3 -12 5 -15 2 -10 -9 3 -10 0 -19 -9 -22 -10 -4\n       -11 -11 -4 -30 5 -14 5 -26 1 -28 -5 -2 -11 -13 -15 -24 -6 -19 -3 -21 29 -18\n       19 1 35 -2 35 -7 0 -9 -21 -13 -53 -11 -13 2 -17 -4 -15 -15 2 -10 -3 -24 -12\n       -31 -11 -10 -12 -15 -2 -18 6 -3 12 -13 12 -21 0 -13 3 -13 15 -3 12 10 15 9\n       15 -5 0 -17 1 -17 19 -1 13 12 21 14 26 6 4 -7 18 -9 31 -6 13 4 24 2 24 -3 0\n       -15 -32 -22 -46 -10 -9 7 -19 7 -36 -2 -13 -7 -32 -13 -43 -13 -11 -1 -19 -7\n       -17 -15 1 -7 -3 -20 -10 -29 -11 -13 -10 -15 4 -9 10 3 20 2 23 -3 6 -9 31 -8\n       41 3 8 8 24 -1 24 -14 0 -5 -6 -9 -14 -9 -8 0 -16 -6 -19 -12 -4 -10 -7 -10\n       -18 0 -19 17 -36 15 -60 -9 -14 -14 -18 -24 -11 -31 6 -6 8 -17 4 -26 -4 -12\n       -1 -14 13 -9 14 6 16 5 7 -6 -18 -21 -1 -29 25 -12 13 9 23 11 23 6 0 -21 37\n       -16 65 8 24 21 26 22 11 4 -11 -13 -14 -23 -8 -23 6 0 14 5 17 10 3 6 11 10\n       17 10 7 0 2 -9 -9 -20 -12 -11 -36 -20 -55 -20 -70 -1 -90 -6 -104 -24 -18\n       -25 -18 -36 1 -36 19 0 20 -19 1 -26 -9 -3 -13 -16 -12 -32 3 -23 7 -27 32\n       -24 26 2 25 0 -14 -19 -26 -13 -41 -27 -38 -35 3 -7 -2 -18 -10 -24 -16 -14\n       -19 -35 -4 -25 6 3 10 1 10 -4 0 -6 -4 -11 -8 -11 -5 0 -9 -13 -9 -29 0 -23 6\n       -31 25 -36 15 -4 31 0 41 9 9 7 32 18 51 24 19 5 44 13 55 17 l20 7 -20 -14\n       c-11 -9 -37 -21 -57 -28 -20 -8 -35 -17 -32 -22 3 -5 2 -8 -3 -7 -22 4 -43 -2\n       -43 -12 0 -8 12 -10 35 -6 19 3 35 4 35 2 0 -8 -74 -45 -111 -55 -29 -8 -39\n       -15 -35 -26 3 -8 -3 -20 -14 -26 -24 -15 -25 -25 -5 -30 12 -2 10 -9 -10 -31\n       -21 -22 -23 -28 -11 -33 8 -3 20 -3 26 1 5 3 10 1 10 -6 0 -8 9 -4 23 8 25 23\n       71 43 50 22 -31 -31 3 -32 40 -1 9 8 17 10 17 5 0 -6 -12 -19 -27 -29 -15 -9\n       -22 -19 -16 -21 8 -3 6 -14 -6 -37 -18 -31 -18 -32 -1 -31 9 1 32 18 50 38 17\n       20 37 37 44 37 7 0 7 -3 1 -8 -5 -4 -21 -20 -35 -36 -19 -22 -21 -28 -7 -23 9\n       4 17 2 17 -5 0 -7 4 -7 13 1 8 6 16 9 19 6 3 -3 13 4 23 15 22 24 40 26 31 4\n       -5 -14 -1 -16 22 -11 l29 6 -13 -73 c-14 -84 -37 -144 -57 -152 -18 -7 -149\n       30 -248 70 -146 58 -340 240 -422 394 -48 91 -87 212 -97 302 -5 41 -7 77 -5\n       80 2 3 5 39 6 80 9 203 155 460 353 618 86 69 233 132 376 161 42 9 209 6 240\n       -4z\" />\n        </g>\n    </svg>\n</div>\n<div class='lineDrawing' id='lineDrawingText'>\n    <svg id='svg-text' width=\"302.355\" height=\"42.12\" viewBox=\"0 0 302.355 42.12\">\n        <g class='lines' id=\"svgGroupText\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#000\"\n            stroke-width=\"0.25mm\" fill=\"none\" style=\"stroke:#000;stroke-width:0.25mm;fill:none\">\n            <path\n                d=\"M 12.915 22.23 L 14.85 21.96 L 21.51 12.285 L 21.51 31.77 L 26.64 31.77 L 26.64 1.17 L 23.535 1.17 L 13.68 15.795 L 3.15 1.17 L 0 1.17 L 0 31.77 L 5.04 31.77 L 5.04 11.565 L 12.915 22.23 Z\"\n                id=\"0\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 54.011 24.052 A 14.247 14.247 0 0 0 54.36 20.835 A 15.254 15.254 0 0 0 54.212 18.678 A 11.851 11.851 0 0 0 52.987 14.805 Q 51.615 12.195 49.073 10.778 A 10.802 10.802 0 0 0 46.123 9.671 A 13.953 13.953 0 0 0 43.11 9.36 A 14.492 14.492 0 0 0 41.007 9.508 A 11.161 11.161 0 0 0 37.125 10.8 Q 34.56 12.24 33.188 14.828 A 11.328 11.328 0 0 0 32.147 17.67 A 14.43 14.43 0 0 0 31.815 20.835 A 15.276 15.276 0 0 0 32.008 23.31 A 11.578 11.578 0 0 0 33.187 26.888 Q 34.56 29.475 37.08 30.915 A 10.533 10.533 0 0 0 40.012 32.039 A 13.676 13.676 0 0 0 43.02 32.355 A 14.492 14.492 0 0 0 45.123 32.207 A 11.161 11.161 0 0 0 49.005 30.915 Q 51.57 29.475 52.965 26.865 A 11.376 11.376 0 0 0 54.011 24.052 Z M 43.02 27.99 A 6.03 6.03 0 0 0 45.219 27.602 A 5.453 5.453 0 0 0 47.452 25.965 A 7.188 7.188 0 0 0 49.021 22.433 A 9.765 9.765 0 0 0 49.14 20.88 A 10.181 10.181 0 0 0 48.909 18.651 A 7.027 7.027 0 0 0 47.497 15.683 A 5.3 5.3 0 0 0 43.616 13.698 A 7.122 7.122 0 0 0 43.11 13.68 Q 40.41 13.68 38.723 15.705 A 7.335 7.335 0 0 0 37.161 19.087 A 10.076 10.076 0 0 0 36.99 20.835 A 10.138 10.138 0 0 0 37.221 23.06 Q 37.594 24.719 38.569 25.932 A 6.484 6.484 0 0 0 38.633 26.01 A 5.32 5.32 0 0 0 42.515 27.973 A 7.204 7.204 0 0 0 43.02 27.99 Z\"\n                id=\"1\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 68.175 10.125 L 64.215 10.125 L 64.215 3.78 L 59.175 4.77 L 59.175 10.125 L 56.16 10.125 L 56.16 13.995 L 59.175 13.995 L 59.175 25.245 Q 59.175 28.8 61.245 30.69 Q 63.148 32.428 66.383 32.568 A 13.347 13.347 0 0 0 66.96 32.58 Q 67.888 32.58 68.994 32.283 A 11.149 11.149 0 0 0 69.142 32.242 A 10.096 10.096 0 0 0 69.901 31.997 Q 70.567 31.75 71.01 31.455 L 69.615 27.72 A 7.069 7.069 0 0 1 68.658 28.07 Q 68.112 28.223 67.607 28.253 A 4.095 4.095 0 0 1 67.365 28.26 A 3.718 3.718 0 0 1 66.416 28.146 A 2.504 2.504 0 0 1 65.003 27.203 A 3.739 3.739 0 0 1 64.4 25.927 Q 64.261 25.412 64.227 24.805 A 7.28 7.28 0 0 1 64.215 24.39 L 64.215 13.995 L 69.705 13.995 L 68.175 10.125 Z\"\n                id=\"2\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 94.68 17.73 L 94.68 31.77 L 89.64 31.77 L 89.64 18.045 A 8.878 8.878 0 0 0 89.502 16.4 Q 88.952 13.5 86.22 13.5 Q 83.754 13.5 80.499 16.015 A 24.166 24.166 0 0 0 79.875 16.515 L 79.875 31.77 L 74.835 31.77 L 74.835 0.495 L 79.875 0 L 79.875 11.97 Q 81.72 10.71 83.7 9.968 Q 85.68 9.225 87.435 9.225 A 8.756 8.756 0 0 1 90.519 9.724 Q 94.376 11.171 94.658 16.815 A 18.372 18.372 0 0 1 94.68 17.73 Z\"\n                id=\"3\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 118.8 22.185 L 118.8 20.7 Q 118.8 15.75 116.325 12.555 A 7.999 7.999 0 0 0 111.296 9.56 A 12.183 12.183 0 0 0 109.035 9.36 Q 105.75 9.36 103.343 10.8 Q 100.935 12.24 99.653 14.828 A 12.146 12.146 0 0 0 98.55 18.387 A 16 16 0 0 0 98.37 20.835 A 14.572 14.572 0 0 0 98.774 24.364 A 10.111 10.111 0 0 0 101.497 29.228 A 10.034 10.034 0 0 0 105.687 31.655 Q 107.827 32.31 110.565 32.31 Q 114.975 32.31 118.62 29.79 L 117.09 26.1 A 38.25 38.25 0 0 1 115.772 26.745 Q 115.147 27.034 114.596 27.257 A 16.751 16.751 0 0 1 113.783 27.562 A 8.462 8.462 0 0 1 112.117 27.945 A 11.33 11.33 0 0 1 110.655 28.035 A 9.976 9.976 0 0 1 108.011 27.714 Q 104.972 26.877 104.026 23.863 A 9.082 9.082 0 0 1 103.68 22.185 L 118.8 22.185 Z M 113.94 18.81 L 103.77 18.81 A 8.592 8.592 0 0 1 104.127 17.203 Q 104.447 16.242 104.99 15.521 A 4.924 4.924 0 0 1 105.413 15.03 A 4.448 4.448 0 0 1 108.057 13.736 A 6.177 6.177 0 0 1 108.9 13.68 A 5.558 5.558 0 0 1 110.366 13.864 A 4.102 4.102 0 0 1 112.275 14.985 A 5.266 5.266 0 0 1 113.241 16.417 Q 113.554 17.083 113.758 17.905 A 11.172 11.172 0 0 1 113.94 18.81 Z\"\n                id=\"4\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 127.665 31.77 L 127.665 17.865 Q 129.465 16.245 131.625 15.12 Q 133.785 13.995 135.405 13.995 L 134.37 9.945 Q 133.215 9.945 131.781 10.55 A 12.788 12.788 0 0 0 130.703 11.07 A 23.748 23.748 0 0 0 128.271 12.564 A 19.882 19.882 0 0 0 126.99 13.545 L 125.325 9.945 L 122.625 9.945 L 122.625 31.77 L 127.665 31.77 Z\"\n                id=\"5\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 161.55 5.175 L 160.785 1.17 L 136.305 1.17 L 136.305 5.175 L 145.935 5.175 L 145.935 31.77 L 151.065 31.77 L 151.065 5.175 L 161.55 5.175 Z\"\n                id=\"6\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 185.456 24.052 A 14.247 14.247 0 0 0 185.805 20.835 A 15.254 15.254 0 0 0 185.657 18.678 A 11.851 11.851 0 0 0 184.432 14.805 Q 183.06 12.195 180.518 10.778 A 10.802 10.802 0 0 0 177.568 9.671 A 13.953 13.953 0 0 0 174.555 9.36 A 14.492 14.492 0 0 0 172.452 9.508 A 11.161 11.161 0 0 0 168.57 10.8 Q 166.005 12.24 164.633 14.828 A 11.328 11.328 0 0 0 163.592 17.67 A 14.43 14.43 0 0 0 163.26 20.835 A 15.276 15.276 0 0 0 163.453 23.31 A 11.578 11.578 0 0 0 164.632 26.888 Q 166.005 29.475 168.525 30.915 A 10.533 10.533 0 0 0 171.457 32.039 A 13.676 13.676 0 0 0 174.465 32.355 A 14.492 14.492 0 0 0 176.568 32.207 A 11.161 11.161 0 0 0 180.45 30.915 Q 183.015 29.475 184.41 26.865 A 11.376 11.376 0 0 0 185.456 24.052 Z M 174.465 27.99 A 6.03 6.03 0 0 0 176.664 27.602 A 5.453 5.453 0 0 0 178.897 25.965 A 7.188 7.188 0 0 0 180.466 22.433 A 9.765 9.765 0 0 0 180.585 20.88 A 10.181 10.181 0 0 0 180.354 18.651 A 7.027 7.027 0 0 0 178.942 15.683 A 5.3 5.3 0 0 0 175.061 13.698 A 7.122 7.122 0 0 0 174.555 13.68 Q 171.855 13.68 170.168 15.705 A 7.335 7.335 0 0 0 168.606 19.087 A 10.076 10.076 0 0 0 168.435 20.835 A 10.138 10.138 0 0 0 168.666 23.06 Q 169.039 24.719 170.014 25.932 A 6.484 6.484 0 0 0 170.078 26.01 A 5.32 5.32 0 0 0 173.96 27.973 A 7.204 7.204 0 0 0 174.465 27.99 Z\"\n                id=\"7\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 194.67 31.77 L 194.67 16.515 A 20.283 20.283 0 0 1 196.596 15.092 Q 198.744 13.707 200.532 13.527 A 5.258 5.258 0 0 1 201.06 13.5 A 3.515 3.515 0 0 1 202.615 13.821 Q 204.093 14.541 204.371 16.878 A 9.922 9.922 0 0 1 204.435 18.045 L 204.435 31.77 L 209.52 31.77 L 209.52 17.73 A 14.82 14.82 0 0 0 209.327 15.26 Q 209.101 13.923 208.609 12.848 A 7.261 7.261 0 0 0 207.81 11.498 Q 206.274 9.456 203.03 9.248 A 11.839 11.839 0 0 0 202.275 9.225 Q 200.295 9.225 198.045 10.125 Q 195.795 11.025 193.905 12.555 L 193.005 9.945 L 189.63 9.945 L 189.63 31.77 L 194.67 31.77 Z\"\n                id=\"8\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 231.21 9.945 L 233.955 9.945 L 233.955 33.255 A 9.146 9.146 0 0 1 233.487 36.247 A 7.611 7.611 0 0 1 231.008 39.735 A 10.013 10.013 0 0 1 227.419 41.551 Q 225.962 41.969 224.224 42.08 A 20.323 20.323 0 0 1 222.93 42.12 A 10.924 10.924 0 0 1 221.823 42.058 Q 220.589 41.932 218.957 41.546 A 35.983 35.983 0 0 1 218.722 41.49 A 17.882 17.882 0 0 1 217.074 41.009 Q 216.259 40.725 215.594 40.386 A 8.022 8.022 0 0 1 214.65 39.825 L 216.18 36.18 Q 217.69 36.885 218.887 37.314 A 17.966 17.966 0 0 0 219.668 37.575 A 10.322 10.322 0 0 0 222.178 38.009 A 11.918 11.918 0 0 0 222.795 38.025 A 9.28 9.28 0 0 0 224.673 37.846 Q 226.126 37.545 227.183 36.743 Q 228.87 35.46 228.87 33.21 L 228.87 30.87 Q 227.7 31.59 226.44 31.973 Q 225.18 32.355 224.055 32.355 A 12.976 12.976 0 0 1 221.126 32.039 A 10.086 10.086 0 0 1 218.273 30.915 Q 215.82 29.475 214.493 26.865 A 12.027 12.027 0 0 1 213.352 23.269 A 15.843 15.843 0 0 1 213.165 20.79 A 14.937 14.937 0 0 1 213.476 17.672 A 11.593 11.593 0 0 1 214.492 14.782 Q 215.82 12.195 218.318 10.778 A 10.803 10.803 0 0 1 222.145 9.498 A 13.996 13.996 0 0 1 224.145 9.36 Q 225.495 9.36 227.16 9.99 Q 228.825 10.62 230.13 11.7 L 231.21 9.945 Z M 228.87 26.19 L 228.87 15.48 Q 227.79 14.535 226.665 14.108 Q 225.54 13.68 224.145 13.68 A 5.922 5.922 0 0 0 222.211 13.982 A 4.948 4.948 0 0 0 219.893 15.66 A 7.077 7.077 0 0 0 218.563 18.554 A 10.21 10.21 0 0 0 218.34 20.745 Q 218.34 23.437 219.383 25.253 A 6.351 6.351 0 0 0 219.893 26.01 A 5.004 5.004 0 0 0 223.558 27.965 A 6.874 6.874 0 0 0 224.145 27.99 A 7.423 7.423 0 0 0 225.707 27.831 A 6.278 6.278 0 0 0 226.62 27.563 Q 227.745 27.135 228.87 26.19 Z\"\n                id=\"9\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 254.07 9.945 L 254.07 25.2 A 20.283 20.283 0 0 1 252.144 26.623 Q 249.996 28.008 248.208 28.188 A 5.258 5.258 0 0 1 247.68 28.215 A 3.515 3.515 0 0 1 246.125 27.894 Q 244.647 27.174 244.369 24.837 A 9.922 9.922 0 0 1 244.305 23.67 L 244.305 9.945 L 239.265 9.945 L 239.265 23.985 Q 239.265 31.437 244.792 32.36 A 10.164 10.164 0 0 0 246.465 32.49 Q 248.445 32.49 250.695 31.59 Q 252.945 30.69 254.835 29.16 L 255.735 31.77 L 259.155 31.77 L 259.155 9.945 L 254.07 9.945 Z\"\n                id=\"10\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 283.41 22.185 L 283.41 20.7 Q 283.41 15.75 280.935 12.555 A 7.999 7.999 0 0 0 275.906 9.56 A 12.183 12.183 0 0 0 273.645 9.36 Q 270.36 9.36 267.953 10.8 Q 265.545 12.24 264.263 14.828 A 12.146 12.146 0 0 0 263.16 18.387 A 16 16 0 0 0 262.98 20.835 A 14.572 14.572 0 0 0 263.384 24.364 A 10.111 10.111 0 0 0 266.107 29.228 A 10.034 10.034 0 0 0 270.297 31.655 Q 272.437 32.31 275.175 32.31 Q 279.585 32.31 283.23 29.79 L 281.7 26.1 A 38.25 38.25 0 0 1 280.382 26.745 Q 279.757 27.034 279.206 27.257 A 16.751 16.751 0 0 1 278.393 27.562 A 8.462 8.462 0 0 1 276.727 27.945 A 11.33 11.33 0 0 1 275.265 28.035 A 9.976 9.976 0 0 1 272.621 27.714 Q 269.582 26.877 268.636 23.863 A 9.082 9.082 0 0 1 268.29 22.185 L 283.41 22.185 Z M 278.55 18.81 L 268.38 18.81 A 8.592 8.592 0 0 1 268.737 17.203 Q 269.057 16.242 269.6 15.521 A 4.924 4.924 0 0 1 270.023 15.03 A 4.448 4.448 0 0 1 272.667 13.736 A 6.177 6.177 0 0 1 273.51 13.68 A 5.558 5.558 0 0 1 274.976 13.864 A 4.102 4.102 0 0 1 276.885 14.985 A 5.266 5.266 0 0 1 277.851 16.417 Q 278.164 17.083 278.368 17.905 A 11.172 11.172 0 0 1 278.55 18.81 Z\"\n                id=\"11\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 300.015 14.94 L 301.59 11.52 A 9.841 9.841 0 0 0 299.976 10.631 Q 299.081 10.238 298.013 9.945 A 20.138 20.138 0 0 0 296.525 9.594 Q 295.805 9.455 295.172 9.399 A 9.321 9.321 0 0 0 294.345 9.36 A 13.989 13.989 0 0 0 291.889 9.562 Q 289.706 9.952 288.225 11.093 Q 285.975 12.825 285.975 15.84 A 5.036 5.036 0 0 0 287.664 19.56 Q 289.268 21.106 292.396 22.233 A 26.034 26.034 0 0 0 293.175 22.5 A 16.715 16.715 0 0 1 294.725 23.079 Q 296.226 23.735 296.914 24.501 A 2.032 2.032 0 0 1 297.495 25.875 Q 297.495 26.95 296.291 27.579 A 3.911 3.911 0 0 1 296.28 27.585 Q 295.099 28.197 293.451 28.214 A 9.171 9.171 0 0 1 293.355 28.215 A 11.349 11.349 0 0 1 290.463 27.82 Q 289.23 27.496 287.925 26.904 A 19.805 19.805 0 0 1 287.55 26.73 L 286.02 30.24 Q 287.156 31.073 288.883 31.604 A 15.177 15.177 0 0 0 289.552 31.793 A 21.101 21.101 0 0 0 291.11 32.135 Q 291.88 32.273 292.565 32.324 A 10.541 10.541 0 0 0 293.355 32.355 A 17.405 17.405 0 0 0 295.88 32.184 Q 298.443 31.807 300.038 30.6 A 5.684 5.684 0 0 0 302.319 26.426 A 8.115 8.115 0 0 0 302.355 25.65 A 5.49 5.49 0 0 0 300.62 21.698 Q 298.95 20.008 295.674 18.728 A 27.295 27.295 0 0 0 294.93 18.45 A 24.008 24.008 0 0 1 293.856 18.056 Q 292.797 17.637 292.096 17.218 A 7.105 7.105 0 0 1 292.05 17.19 A 3.628 3.628 0 0 1 291.582 16.856 Q 291.356 16.663 291.213 16.459 A 1.277 1.277 0 0 1 290.97 15.795 A 1.867 1.867 0 0 1 291.558 14.429 A 2.87 2.87 0 0 1 291.915 14.13 A 3.552 3.552 0 0 1 293.33 13.538 A 4.907 4.907 0 0 1 294.255 13.455 Q 295.785 13.455 297.113 13.837 Q 298.398 14.208 299.915 14.895 A 29.091 29.091 0 0 1 300.015 14.94 Z\"\n                id=\"12\" vector-effect=\"non-scaling-stroke\" />\n        </g>\n    </svg>\n</div>"

/***/ }),

/***/ "./src/pages/shared/logo.scss":
/*!************************************!*\
  !*** ./src/pages/shared/logo.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lineDrawingTree {\n  position: absolute;\n  top: 40px;\n  left: 25px; }\n\n#lineDrawingText {\n  position: absolute;\n  top: 90px;\n  left: 15px; }\n\n#svg-tree {\n  width: 90px !important;\n  height: 90px !important; }\n\n#svg-text {\n  margin-left: 20px;\n  margin-top: -55px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS9tb3RoZXJ0b25ndWVzLVVJLXdlYi9zcmMvcGFnZXMvc2hhcmVkL2xvZ28uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUVkO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9wYWdlcy9zaGFyZWQvbG9nby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpbmVEcmF3aW5nVHJlZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICBsZWZ0OiAyNXB4O1xufVxuI2xpbmVEcmF3aW5nVGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTBweDtcbiAgICBsZWZ0OiAxNXB4O1xufVxuXG4jc3ZnLXRyZWUge1xuICAgIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzdmctdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLTU1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/shared/logo.ts":
/*!**********************************!*\
  !*** ./src/pages/shared/logo.ts ***!
  \**********************************/
/*! exports provided: LogoAnime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoAnime", function() { return LogoAnime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_3__);




var LogoAnime = /** @class */ (function () {
    function LogoAnime(router) {
        this.router = router;
    }
    LogoAnime.prototype.ngAfterViewInit = function () {
        animejs__WEBPACK_IMPORTED_MODULE_3__({
            targets: '.lineDrawing .lines path',
            strokeDashoffset: [animejs__WEBPACK_IMPORTED_MODULE_3__["setDashoffset"], 0],
            easing: 'easeInOutCubic',
            color: "#000",
            duration: 550,
            // translateX: 100,
            complete: function (anim) {
                animejs__WEBPACK_IMPORTED_MODULE_3__({
                    targets: '#lineDrawingText',
                    translateX: 100,
                    easing: 'easeInOutQuad',
                    complete: function (anim) {
                        document.getElementById('svgGroupTree').classList.add('animated');
                        document.getElementById('svgGroupText').classList.add('animated');
                    }
                });
            },
            delay: function (el, i) { return i * 450; },
        });
    };
    LogoAnime = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'logo-anime',
            template: __webpack_require__(/*! ./logo.html */ "./src/pages/shared/logo.html"),
            styles: [__webpack_require__(/*! ./logo.scss */ "./src/pages/shared/logo.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoAnime);
    return LogoAnime;
}());



/***/ }),

/***/ "./src/pages/shared/settings.component.html":
/*!**************************************************!*\
  !*** ./src/pages/shared/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n    <p>Here's where settings go.</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>Ok</button>\n</div>"

/***/ }),

/***/ "./src/pages/shared/settings.component.ts":
/*!************************************************!*\
  !*** ./src/pages/shared/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDialog", function() { return SettingsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var SettingsDialog = /** @class */ (function () {
    function SettingsDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SettingsDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SettingsDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'settings-dialog',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/pages/shared/settings.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SettingsDialog);
    return SettingsDialog;
}());



/***/ }),

/***/ "./src/pages/shared/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/shared/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "./src/pages/shared/settings.component.ts");





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            ],
            declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsDialog"]],
            exports: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsDialog"]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/pages/shared/word-modal.component.html":
/*!****************************************************!*\
  !*** ./src/pages/shared/word-modal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h4 class='center-text' mat-dialog-title>Information for {{ data.entry.word }}</h4> -->\n<div mat-dialog-content>\n  <div class='container'>\n    <div class='container__row'>\n      <div class='container__col centered'>\n        <h2><span>{{ data.entry.word }}</span> - <span>{{ data.entry.definition }}</span></h2>\n      </div>\n    </div>\n    <div class=\"container__row\" *ngIf=\"data.entry.optional\">\n      <div class='container__col centered'>\n        <span *ngFor='let opt of data.entry.optional | noNullObjectValues'>{{ getKey(opt) }}:\n          {{ getVal(opt) }}</span>\n      </div>\n    </div>\n  </div>\n  <div class='container audio__container' *ngIf='hasAudio()'>\n    <div class=\"container__row audio__header\">\n      <h3 class='container__col audio__header'>Audio</h3>\n    </div>\n    <div class='container__row audio__desc'>\n      <p class='container__col audio__desc'>Click on the audio below to listen to '{{ data.entry.word }}'</p>\n    </div>\n    <div class='container__row audio__buttons'>\n      <div *ngFor=\"let audio of data.entry.audio | noNullObjectValues\" class='container__col centered'>\n        <button class='audio__button' mat-raised-button (click)=\"playAudio(audio.filename)\">\n          {{ audio.speaker }} <mat-icon class='audio__icon'>audiotrack</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions class='center-text'>\n  <button mat-raised-button cdkFocusInitial (click)='close()'>Go Back</button>\n</div>"

/***/ }),

/***/ "./src/pages/shared/word-modal.component.ts":
/*!**************************************************!*\
  !*** ./src/pages/shared/word-modal.component.ts ***!
  \**************************************************/
/*! exports provided: WordModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordModal", function() { return WordModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _file_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-not-found.component */ "./src/pages/shared/file-not-found.component.ts");





var WordModal = /** @class */ (function () {
    function WordModal(bookmarkService, mtdService, dialogRef, data, dialog) {
        this.bookmarkService = bookmarkService;
        this.mtdService = mtdService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.displayImages = true; //default show images, turns to false on 404
        this.optional = false;
        this.objectKeys = Object.keys;
        console.log(this.optionalSelection);
        this.checkedOptions = this.optionalSelection;
        try {
            this.image = 'assets/img/' + this.entry.img;
        }
        catch (error) {
            console.log(error);
        }
    }
    WordModal.prototype.close = function () {
        this.dialogRef.close();
    };
    WordModal.prototype.getKey = function (obj) {
        return Object.keys(obj);
    };
    WordModal.prototype.getVal = function (obj) {
        return Object.values(obj);
    };
    WordModal.prototype.checkChecked = function (option) {
        console.log(option);
        if (this.checkedOptions.indexOf(option) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    WordModal.prototype.hasAudio = function () {
        var audio = this.data.entry.audio.filter(function (x) {
            var notEmpty = true;
            Object.keys(x).forEach(function (k) {
                if (!x[k]) {
                    notEmpty = false;
                    return notEmpty;
                }
            });
            return notEmpty;
        });
        return audio.length > 0;
    };
    WordModal.prototype.fileNotFound = function (path) {
        var dialogRef = this.dialog.open(_file_not_found_component__WEBPACK_IMPORTED_MODULE_4__["FileNotFoundDialog"], {
            width: '250px',
            data: { path: path }
        });
    };
    WordModal.prototype.playAudio = function (fn) {
        var _this = this;
        var path = this.mtdService.config_value.audio_path + fn;
        var audio = new Audio(path);
        audio.onerror = function () { return _this.fileNotFound(path); };
        audio.play();
    };
    WordModal.prototype.imageError = function () {
        this.displayImages = false;
    };
    WordModal.prototype.toggleFav = function (entry) {
        this.bookmarkService.toggleBookmark(entry);
    };
    WordModal.prototype.favourited = function (entry) {
        return this.bookmarkService.bookmarks.value.indexOf(entry) > -1;
    };
    WordModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'word-modal-component',
            template: __webpack_require__(/*! ./word-modal.component.html */ "./src/pages/shared/word-modal.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"], _services__WEBPACK_IMPORTED_MODULE_2__["MTDService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], WordModal);
    return WordModal;
}());



/***/ }),

/***/ "./src/pages/shared/word-modal.module.ts":
/*!***********************************************!*\
  !*** ./src/pages/shared/word-modal.module.ts ***!
  \***********************************************/
/*! exports provided: WordModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordModalPageModule", function() { return WordModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _word_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./word-modal.component */ "./src/pages/shared/word-modal.component.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var _file_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-not-found.component */ "./src/pages/shared/file-not-found.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var WordModalPageModule = /** @class */ (function () {
    function WordModalPageModule() {
    }
    WordModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _word_modal_component__WEBPACK_IMPORTED_MODULE_5__["WordModal"]
                    }
                ])
            ],
            declarations: [_word_modal_component__WEBPACK_IMPORTED_MODULE_5__["WordModal"]],
            entryComponents: [_file_not_found_component__WEBPACK_IMPORTED_MODULE_7__["FileNotFoundDialog"]],
            exports: [_word_modal_component__WEBPACK_IMPORTED_MODULE_5__["WordModal"]]
        })
    ], WordModalPageModule);
    return WordModalPageModule;
}());



/***/ }),

/***/ "./src/pipes/no-null-values/no-null-values.ts":
/*!****************************************************!*\
  !*** ./src/pipes/no-null-values/no-null-values.ts ***!
  \****************************************************/
/*! exports provided: NoNullValuesPipe, NoNullObjectValuesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoNullValuesPipe", function() { return NoNullValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoNullObjectValuesPipe", function() { return NoNullObjectValuesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Generated class for the NoNullValuesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var NoNullValuesPipe = /** @class */ (function () {
    function NoNullValuesPipe() {
    }
    /**
     * Removes empty strings from array
     */
    NoNullValuesPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value && Array.isArray(value)) {
            return value.filter(function (x) { return x !== null && x !== ''; });
        }
    };
    NoNullValuesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'noNullValues',
        })
    ], NoNullValuesPipe);
    return NoNullValuesPipe;
}());

var NoNullObjectValuesPipe = /** @class */ (function () {
    function NoNullObjectValuesPipe() {
    }
    /**
     * Removes empty objects from array
     */
    NoNullObjectValuesPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value && Array.isArray(value)) {
            return value.filter(function (x) {
                var notEmpty = true;
                Object.keys(x).forEach(function (k) {
                    if (!x[k]) {
                        notEmpty = false;
                        return notEmpty;
                    }
                });
                return notEmpty;
            });
        }
    };
    NoNullObjectValuesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'noNullObjectValues',
        })
    ], NoNullObjectValuesPipe);
    return NoNullObjectValuesPipe;
}());



/***/ }),

/***/ "./src/pipes/pipes.module.ts":
/*!***********************************!*\
  !*** ./src/pipes/pipes.module.ts ***!
  \***********************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _no_null_values_no_null_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-null-values/no-null-values */ "./src/pipes/no-null-values/no-null-values.ts");



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_no_null_values_no_null_values__WEBPACK_IMPORTED_MODULE_2__["NoNullObjectValuesPipe"], _no_null_values_no_null_values__WEBPACK_IMPORTED_MODULE_2__["NoNullValuesPipe"]],
            imports: [],
            exports: [_no_null_values_no_null_values__WEBPACK_IMPORTED_MODULE_2__["NoNullObjectValuesPipe"], _no_null_values_no_null_values__WEBPACK_IMPORTED_MODULE_2__["NoNullValuesPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/services/bookmark.service.ts":
/*!******************************************!*\
  !*** ./src/services/bookmark.service.ts ***!
  \******************************************/
/*! exports provided: BookmarkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkService", function() { return BookmarkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mtd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mtd.service */ "./src/services/mtd.service.ts");




var BookmarkService = /** @class */ (function () {
    function BookmarkService(mtdService) {
        this.mtdService = mtdService;
        this.bookmarks = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.config = this.mtdService.config_value;
    }
    BookmarkService.prototype.setBookmarks = function (val) {
        this.bookmarks.next(val);
        var vals = val.map(function (x) { return x['entryID']; });
        localStorage.setItem(this.config.L1.name + this.config.build, JSON.stringify(vals));
    };
    BookmarkService.prototype.toggleBookmark = function (entry) {
        var i = this.bookmarks.value.indexOf(entry);
        var bookmarks;
        if (i > -1) {
            bookmarks = this.bookmarks.value;
            bookmarks.splice(i, 1);
        }
        else if (i < 0) {
            bookmarks = this.bookmarks.value.concat([entry]);
        }
        this.setBookmarks(bookmarks);
    };
    BookmarkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mtd_service__WEBPACK_IMPORTED_MODULE_3__["MTDService"]])
    ], BookmarkService);
    return BookmarkService;
}());



/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: BookmarkService, MTDService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bookmark_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookmark.service */ "./src/services/bookmark.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookmarkService", function() { return _bookmark_service__WEBPACK_IMPORTED_MODULE_0__["BookmarkService"]; });

/* harmony import */ var _mtd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mtd.service */ "./src/services/mtd.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MTDService", function() { return _mtd_service__WEBPACK_IMPORTED_MODULE_1__["MTDService"]; });





/***/ }),

/***/ "./src/services/mtd.service.ts":
/*!*************************************!*\
  !*** ./src/services/mtd.service.ts ***!
  \*************************************/
/*! exports provided: MTDService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTDService", function() { return MTDService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/global */ "./src/app/global.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");








// import { AlertController } from '@ionic/angular';
var MTDService = /** @class */ (function () {
    // remote: string = environment.remoteSlug;
    function MTDService(http) {
        var _this = this;
        this.http = http;
        this._dictionary_data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](window['dataDict']);
        this._config$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](window['config']);
        this.base = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseURL;
        console.log(this.base);
        this.slug = Object(_app_global__WEBPACK_IMPORTED_MODULE_5__["slugify"])(this._config$.getValue().L1.name);
        // this.slug = this.remote
        // console.log(this.slug)
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].remoteData) {
            this.remoteData$ = this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].remoteData + "?name=" + this.slug + "&only-data=true", { observe: 'response' });
        }
        else {
            this.remoteData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].remoteConfig) {
            this.remoteConfig$ = this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].remoteConfig + "?name=" + this.slug + "&only-config=true", { observe: 'response' });
        }
        else {
            this.remoteConfig$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
        // TODO: if in storage
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].remoteData && _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].remoteConfig) {
            // TODO: check remote build is newer
            this.remoteConfig$.subscribe(function (x) {
                if (x.status === 200) { // TODO: and storage.config.build < x.build
                    _this._config$.next(x.body);
                    _this.remoteData$.subscribe(function (x) {
                        if (x.status === 200) {
                            _this.presentUpdateAlert();
                            // setTimeout(() => {
                            _this._dictionary_data$.next(x.body);
                            // }, 3000)
                        }
                        else {
                            _this.presentUpdateFailedAlert();
                            // TODO: return error message
                        }
                    });
                }
                else {
                    _this.presentUpdateFailedAlert();
                    // TODO: return error message
                }
            });
        }
        else {
            // TODO: try and update from remote
            this.remoteConfig$.subscribe(function (x) {
                if (x.status === 200) {
                    _this._config$.next(x.body);
                    _this.remoteData$.subscribe(function (x) {
                        if (x.status === 200) {
                            _this._dictionary_data$.next(x.body);
                        }
                        else {
                            // return error message
                        }
                    });
                }
                else {
                    // return error message
                }
            });
        }
    }
    MTDService.prototype.presentUpdateAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('alert');
                return [2 /*return*/];
            });
        });
    };
    MTDService.prototype.presentUpdateFailedAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('alert');
                return [2 /*return*/];
            });
        });
    };
    MTDService.prototype.shuffle = function (array) {
        var tmp, current, top = array.length;
        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }
        return array;
    };
    MTDService.prototype.getRandom$ = function (no_random) {
        var _this = this;
        return this._dictionary_data$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return _this.shuffle(x).slice(0, no_random); }));
    };
    MTDService.prototype.getSlice$ = function (start_index, no_slice) {
        return this._dictionary_data$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x.slice(start_index, start_index + no_slice); }));
    };
    Object.defineProperty(MTDService.prototype, "allAudioEntries$", {
        get: function () {
            return this._dictionary_data$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) { return arr.filter(function (x) { return x.audio; }); }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MTDService.prototype, "config$", {
        get: function () {
            return this._config$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MTDService.prototype, "name$", {
        get: function () {
            return this.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) { return config.L1.name; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MTDService.prototype, "dataDict$", {
        get: function () {
            return this._dictionary_data$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (entries) { return entries.sort(function (a, b) { return a['sorting_form'][0] - b['sorting_form'][0]; }); }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MTDService.prototype, "config_value", {
        get: function () {
            return this._config$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MTDService.prototype, "dataDict_value", {
        get: function () {
            return this._dictionary_data$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MTDService.prototype, "categories$", {
        get: function () {
            return this._dictionary_data$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (entries) {
                var keys = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["uniq"])(entries.map(function (x) { return x['source']; }));
                var categories = {};
                var _loop_1 = function (key) {
                    categories[key] = entries.filter(function (x) { return x['source'] == key; });
                };
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    _loop_1(key);
                }
                var semantic_categories = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["uniq"])(entries.map(function (entry) {
                    if (entry.theme && entry.theme !== undefined && typeof entry.theme === 'string') {
                        return entry.theme.toLowerCase();
                    }
                })).sort();
                var _loop_2 = function (cat) {
                    if (cat) {
                        categories[cat] = entries.filter(function (entry) { return entry.theme === cat; });
                    }
                };
                for (var _a = 0, semantic_categories_1 = semantic_categories; _a < semantic_categories_1.length; _a++) {
                    var cat = semantic_categories_1[_a];
                    _loop_2(cat);
                }
                var audioEntries = entries.filter(function (x) { return x.audio; });
                if (audioEntries.length > 0 && audioEntries.length < (entries.length * .5)) {
                    categories["audio"] = {};
                    categories["audio"] = audioEntries;
                }
                return categories;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MTDService.prototype, "category_keys$", {
        get: function () {
            return this.categories$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cats) { return Object.keys(cats); }));
        },
        enumerable: true,
        configurable: true
    });
    MTDService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], MTDService);
    return MTDService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pinea/mothertongues-UI-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map