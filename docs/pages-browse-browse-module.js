(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-browse-browse-module"],{

/***/ "./src/pages/browse/browse.module.ts":
/*!*******************************************!*\
  !*** ./src/pages/browse/browse.module.ts ***!
  \*******************************************/
/*! exports provided: BrowsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsePageModule", function() { return BrowsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _browse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browse */ "./src/pages/browse/browse.ts");
/* harmony import */ var _shared_entry_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/entry-list.module */ "./src/pages/shared/entry-list.module.ts");








var BrowsePageModule = /** @class */ (function () {
    function BrowsePageModule() {
    }
    BrowsePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_entry_list_module__WEBPACK_IMPORTED_MODULE_7__["EntryListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _browse__WEBPACK_IMPORTED_MODULE_6__["Browse"]
                    }
                ])
            ],
            declarations: [_browse__WEBPACK_IMPORTED_MODULE_6__["Browse"]]
        })
    ], BrowsePageModule);
    return BrowsePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-browse-browse-module.js.map