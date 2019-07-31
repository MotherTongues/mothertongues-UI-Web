(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-random-random-module"],{

/***/ "./src/pages/random/random.module.ts":
/*!*******************************************!*\
  !*** ./src/pages/random/random.module.ts ***!
  \*******************************************/
/*! exports provided: RandomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomPageModule", function() { return RandomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_entry_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/entry-list.module */ "./src/pages/shared/entry-list.module.ts");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ "./src/pages/random/random.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var RandomPageModule = /** @class */ (function () {
    function RandomPageModule() {
    }
    RandomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_entry_list_module__WEBPACK_IMPORTED_MODULE_5__["EntryListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _random__WEBPACK_IMPORTED_MODULE_6__["Random"]
                    }
                ])
            ],
            declarations: [_random__WEBPACK_IMPORTED_MODULE_6__["Random"]]
        })
    ], RandomPageModule);
    return RandomPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-random-random-module.js.map