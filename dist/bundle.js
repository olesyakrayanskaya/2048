/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles.css":
/*!***********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #faf8ef;\r\n    font-family: \"Ubuntu\", sans-serif;\r\n    font-size: 18px;\r\n    color: #776e7b;\r\n    overflow-x: hidden;\r\n}\r\n\r\na,\r\na:visited,\r\na:hover {\r\n    color: inherit;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-weight: 700;\r\n}\r\n\r\n.container {\r\n    max-width: 760px;\r\n    margin: 0 auto;\r\n    padding: 10px 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin: 10px 0;\r\n    padding: 5px 20px;\r\n}\r\n\r\n.header__inner-1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n\r\n.header__inner-2 {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap-reverse;\r\n}\r\n\r\n.header__title {\r\n    font-size: 48px;\r\n    font-weight: 700;\r\n}\r\n\r\n.header__game-rules {\r\n    display: block;\r\n    margin-top: 10px;\r\n}\r\n\r\n.header__score,\r\n.header__best {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #faf8ef;\r\n    background-color: #b5b2b7;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    height: 60px;\r\n    width: 100px;\r\n    margin-left: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.header__btn {\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    color: #4b4b48;\r\n    background-color: #a59e84;\r\n    font-size: 16px;\r\n    transition: background-color 1s, color 1s;\r\n    max-width: 200px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.header__btn:hover {\r\n    background-color: #a37d6e;\r\n    color: #faf8ef;\r\n}\r\n\r\n.main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin: 10px 0;\r\n}\r\n\r\n.main__field {\r\n    display: grid;\r\n    background-color: #bbada0;\r\n    border-radius: 5px;\r\n    grid-template-columns: repeat(5, 80px);\r\n    grid-template-rows: repeat(5, 80px);\r\n    grid-gap: 10px;\r\n    align-items: stretch;\r\n    justify-content: center;\r\n    width: 460px;\r\n    padding: 10px 0;\r\n    margin: 20px auto;\r\n}\r\n\r\n.field__item {\r\n    background-color: #cdc1b4;\r\n    border-radius: 5px;\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    color: #7e7975;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.main__description {\r\n    margin: 40px 0;\r\n    text-align: center;\r\n}\r\n\r\n.main__newgame {\r\n    display: block;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n@media (max-width: 515px) {\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 55px);\r\n        grid-template-rows: repeat(5, 55px);\r\n        grid-gap: 10px;\r\n        width: 335px;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 35px;\r\n    }\r\n}\r\n\r\n@media (max-width: 370px) {\r\n    .container {\r\n        width: 100%;\r\n    }\r\n\r\n    .header {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .header__inner-1 {\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        flex-wrap: nowrap;\r\n        justify-content: center;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        width: 80px;\r\n        height: 80px;\r\n        margin: 0;\r\n    }\r\n\r\n    .header__best {\r\n        margin-left: 20px;\r\n    }\r\n\r\n    .main {\r\n        margin: 0;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 45px);\r\n        grid-template-rows: repeat(5, 45px);\r\n        grid-gap: 5px;\r\n        width: 255px;\r\n        padding: 5px 0;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1300px) {\r\n    body {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .container {\r\n        max-width: 900px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        font-size: 24px;\r\n        padding: 10px;\r\n    }\r\n\r\n    .header__btn {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 80px);\r\n        grid-template-rows: repeat(5, 80px);\r\n        grid-gap: 15px;\r\n        width: 485px;\r\n        padding: 10px 0;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 50px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1700px) {\r\n    body {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .header {\r\n        margin: 50px 0;\r\n        padding: 10px 40px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        font-size: 30px;\r\n        width: 170px;\r\n        height: 170px;\r\n    }\r\n\r\n    .header__btn {\r\n        font-size: 26px;\r\n        max-width: 400px;\r\n    }\r\n\r\n    .main__description {\r\n        margin: 40px 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 1900px) {\r\n    body {\r\n        font-size: 32px;\r\n    }\r\n\r\n    .container {\r\n        max-width: 60%;\r\n    }\r\n\r\n    .header {\r\n        margin: 5% 0;\r\n    }\r\n\r\n    .header__title {\r\n        font-size: 80px;\r\n    }\r\n\r\n    .header__game-rules {\r\n        margin-top: 30px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        font-size: 40px;\r\n        padding: 20px;\r\n    }\r\n\r\n    .header__btn {\r\n        padding: 20px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    .main {\r\n        margin: 80px 0 60px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 120px);\r\n        grid-template-rows: repeat(5, 120px);\r\n        grid-gap: 20px;\r\n        width: 710px;\r\n        padding: 15px 10px;\r\n        margin: 40px auto;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 60px;\r\n    }\r\n\r\n    .main__description {\r\n        margin: 60px 0;\r\n    }\r\n\r\n    .main__newgame {\r\n        margin-bottom: 40px;\r\n    }\r\n}\r\n\r\n@media (min-width: 2400px) {\r\n    body {\r\n        font-size: 40px;\r\n    }\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,iCAAiC;IACjC,eAAe;IACf,cAAc;IACd,kBAAkB;AACtB;;AAEA;;;IAGI,cAAc;IACd,eAAe;IACf,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,yCAAyC;IACzC,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,sCAAsC;IACtC,mCAAmC;IACnC,cAAc;IACd,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI;QACI,sCAAsC;QACtC,mCAAmC;QACnC,cAAc;QACd,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,WAAW;IACf;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;QACjB,uBAAuB;QACvB,gBAAgB;IACpB;;IAEA;;QAEI,WAAW;QACX,YAAY;QACZ,SAAS;IACb;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,sCAAsC;QACtC,mCAAmC;QACnC,aAAa;QACb,YAAY;QACZ,cAAc;IAClB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;;QAEI,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,sCAAsC;QACtC,mCAAmC;QACnC,cAAc;QACd,YAAY;QACZ,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,cAAc;QACd,kBAAkB;IACtB;;IAEA;;QAEI,eAAe;QACf,YAAY;QACZ,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;;IAEA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;;QAEI,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,eAAe;IACnB;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,uCAAuC;QACvC,oCAAoC;QACpC,cAAc;QACd,YAAY;QACZ,kBAAkB;QAClB,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #faf8ef;\r\n    font-family: \"Ubuntu\", sans-serif;\r\n    font-size: 18px;\r\n    color: #776e7b;\r\n    overflow-x: hidden;\r\n}\r\n\r\na,\r\na:visited,\r\na:hover {\r\n    color: inherit;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-weight: 700;\r\n}\r\n\r\n.container {\r\n    max-width: 760px;\r\n    margin: 0 auto;\r\n    padding: 10px 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin: 10px 0;\r\n    padding: 5px 20px;\r\n}\r\n\r\n.header__inner-1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n\r\n.header__inner-2 {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap-reverse;\r\n}\r\n\r\n.header__title {\r\n    font-size: 48px;\r\n    font-weight: 700;\r\n}\r\n\r\n.header__game-rules {\r\n    display: block;\r\n    margin-top: 10px;\r\n}\r\n\r\n.header__score,\r\n.header__best {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #faf8ef;\r\n    background-color: #b5b2b7;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    height: 60px;\r\n    width: 100px;\r\n    margin-left: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.header__btn {\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    color: #4b4b48;\r\n    background-color: #a59e84;\r\n    font-size: 16px;\r\n    transition: background-color 1s, color 1s;\r\n    max-width: 200px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.header__btn:hover {\r\n    background-color: #a37d6e;\r\n    color: #faf8ef;\r\n}\r\n\r\n.main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin: 10px 0;\r\n}\r\n\r\n.main__field {\r\n    display: grid;\r\n    background-color: #bbada0;\r\n    border-radius: 5px;\r\n    grid-template-columns: repeat(5, 80px);\r\n    grid-template-rows: repeat(5, 80px);\r\n    grid-gap: 10px;\r\n    align-items: stretch;\r\n    justify-content: center;\r\n    width: 460px;\r\n    padding: 10px 0;\r\n    margin: 20px auto;\r\n}\r\n\r\n.field__item {\r\n    background-color: #cdc1b4;\r\n    border-radius: 5px;\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    color: #7e7975;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.main__description {\r\n    margin: 40px 0;\r\n    text-align: center;\r\n}\r\n\r\n.main__newgame {\r\n    display: block;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n@media (max-width: 515px) {\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 55px);\r\n        grid-template-rows: repeat(5, 55px);\r\n        grid-gap: 10px;\r\n        width: 335px;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 35px;\r\n    }\r\n}\r\n\r\n@media (max-width: 370px) {\r\n    .container {\r\n        width: 100%;\r\n    }\r\n\r\n    .header {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .header__inner-1 {\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        flex-wrap: nowrap;\r\n        justify-content: center;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        width: 80px;\r\n        height: 80px;\r\n        margin: 0;\r\n    }\r\n\r\n    .header__best {\r\n        margin-left: 20px;\r\n    }\r\n\r\n    .main {\r\n        margin: 0;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 45px);\r\n        grid-template-rows: repeat(5, 45px);\r\n        grid-gap: 5px;\r\n        width: 255px;\r\n        padding: 5px 0;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1300px) {\r\n    body {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .container {\r\n        max-width: 900px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        font-size: 24px;\r\n        padding: 10px;\r\n    }\r\n\r\n    .header__btn {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 80px);\r\n        grid-template-rows: repeat(5, 80px);\r\n        grid-gap: 15px;\r\n        width: 485px;\r\n        padding: 10px 0;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 50px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1700px) {\r\n    body {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .header {\r\n        margin: 50px 0;\r\n        padding: 10px 40px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        font-size: 30px;\r\n        width: 170px;\r\n        height: 170px;\r\n    }\r\n\r\n    .header__btn {\r\n        font-size: 26px;\r\n        max-width: 400px;\r\n    }\r\n\r\n    .main__description {\r\n        margin: 40px 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 1900px) {\r\n    body {\r\n        font-size: 32px;\r\n    }\r\n\r\n    .container {\r\n        max-width: 60%;\r\n    }\r\n\r\n    .header {\r\n        margin: 5% 0;\r\n    }\r\n\r\n    .header__title {\r\n        font-size: 80px;\r\n    }\r\n\r\n    .header__game-rules {\r\n        margin-top: 30px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        font-size: 40px;\r\n        padding: 20px;\r\n    }\r\n\r\n    .header__btn {\r\n        padding: 20px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    .main {\r\n        margin: 80px 0 60px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 120px);\r\n        grid-template-rows: repeat(5, 120px);\r\n        grid-gap: 20px;\r\n        width: 710px;\r\n        padding: 15px 10px;\r\n        margin: 40px auto;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 60px;\r\n    }\r\n\r\n    .main__description {\r\n        margin: 60px 0;\r\n    }\r\n\r\n    .main__newgame {\r\n        margin-bottom: 40px;\r\n    }\r\n}\r\n\r\n@media (min-width: 2400px) {\r\n    body {\r\n        font-size: 40px;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "../node_modules/css-loader/dist/cjs.js!./styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./styles.css");

var gameField = document.getElementById('game__field');
var gameSize = 5;
var elements = [];

function addElement() {
  var newFieldItem = document.createElement('div');
  newFieldItem.className = 'field__item';
  newFieldItem.innerHTML = '';
  gameField.appendChild(newFieldItem);
  return newFieldItem;
}

for (var i = 0; i < gameSize; i++) {
  elements[i] = [];

  for (var j = 0; j < gameSize; j++) {
    elements[i][j] = addElement();
  }
}

document.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'ArrowUp':
      console.log('up');
      break;

    case 'ArrowDown':
      console.log('down');
      break;

    case 'ArrowRight':
      console.log('right');
      break;

    case 'ArrowLeft':
      console.log('left');
      moveLeft();
      break;

    default:
      return;
  }

  generateNewItem();
});

function generateNewItem() {
  var count = 0;

  for (var _i = 0; _i < gameSize; _i++) {
    for (var _j = 0; _j < gameSize; _j++) {
      if (elements[_i][_j].getInnerHTML() == '') {
        count++;
      }
    }
  }

  var rundomPosition = getRandomInt(0, count);
  var rundomNumb = getRandomInt(0, 10);
  var rundomItemInner = rundomNumb == 0 ? 4 : 2;

  for (var _i2 = 0; _i2 < gameSize; _i2++) {
    for (var _j2 = 0; _j2 < gameSize; _j2++) {
      if (elements[_i2][_j2].getInnerHTML() == '') {
        if (rundomPosition == 0) {
          elements[_i2][_j2].innerHTML = rundomItemInner;
          return;
        }

        rundomPosition--;
      }
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function moveLeft() {
  for (var _i3 = 0; _i3 < gameSize; _i3++) {
    var moveToIndex = 0;

    for (var _j3 = 1; _j3 < gameSize; _j3++) {}
  }
}

function get(i, j) {
  return elements[i][j].innerHTML;
}

function set(i, j, value) {
  elements[i][j].innerHTML = value;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkIsU0FBUyw0QkFBNEIsZ0NBQWdDLFNBQVMsS0FBSyxvQ0FBb0MsY0FBYyw0QkFBNEIsU0FBUyxLQUFLLGVBQWUsNkVBQTZFLFVBQVUsVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9B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QUFiLEVBQWdCQyxDQUFoQixFQUFtQnVCLEtBQW5CLEVBQTBCO0VBQ3RCL0IsUUFBUSxDQUFDTyxDQUFELENBQVIsQ0FBWUMsQ0FBWixFQUFlSCxTQUFmLEdBQTJCMEIsS0FBM0I7QUFDSCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzLmNzcz8wNzJmIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmOGVmO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY29sb3I6ICM3NzZlN2I7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NjBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19pbm5lci0xIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19pbm5lci0yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2dhbWUtcnVsZXMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fc2NvcmUsXFxyXFxuLmhlYWRlcl9fYmVzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZhZjhlZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjJiNztcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBjb2xvcjogIzRiNGI0ODtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1OWU4NDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBjb2xvciAxcztcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzN2Q2ZTtcXHJcXG4gICAgY29sb3I6ICNmYWY4ZWY7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJhZGEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDgwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA4MHB4KTtcXHJcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQ2MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjMWI0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6ICM3ZTc5NzU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fZGVzY3JpcHRpb24ge1xcclxcbiAgICBtYXJnaW46IDQwcHggMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fbmV3Z2FtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTE1cHgpIHtcXHJcXG4gICAgLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDU1cHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNTVweCk7XFxyXFxuICAgICAgICBncmlkLWdhcDogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAzMzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19pbm5lci0xIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19pbm5lci0yIHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3Njb3JlLFxcclxcbiAgICAuaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW4ge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluX19maWVsZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA0NXB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDQ1cHgpO1xcclxcbiAgICAgICAgZ3JpZC1nYXA6IDVweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fc2NvcmUsXFxyXFxuICAgIC5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19idG4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluX19maWVsZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA4MHB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDgwcHgpO1xcclxcbiAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XFxyXFxuICAgICAgICB3aWR0aDogNDg1cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZWxkX19pdGVtIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTcwMHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiA1MHB4IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fc2NvcmUsXFxyXFxuICAgIC5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19idG4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbl9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MDBweCkge1xcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiA1JSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19nYW1lLXJ1bGVzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fc2NvcmUsXFxyXFxuICAgIC5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19idG4ge1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbiB7XFxyXFxuICAgICAgICBtYXJnaW46IDgwcHggMCA2MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluX19maWVsZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxMjBweCk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxMjBweCk7XFxyXFxuICAgICAgICBncmlkLWdhcDogMjBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA3MTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW5fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIG1hcmdpbjogNjBweCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluX19uZXdnYW1lIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDI0MDBweCkge1xcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJj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c0M7UUFDdEMsbUNBQW1DO1FBQ25DLGNBQWM7UUFDZCxZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0lBRUE7O1FBRUksZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTs7UUFFSSxlQUFlO1FBQ2YsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25COztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksdUNBQXVDO1FBQ3ZDLG9DQUFvQztRQUNwQyxjQUFjO1FBQ2QsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjhlZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjNzc2ZTdiO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogNzYwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9faW5uZXItMSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9faW5uZXItMiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19nYW1lLXJ1bGVzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX3Njb3JlLFxcclxcbi5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmYWY4ZWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWIyYjc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY29sb3I6ICM0YjRiNDg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNTllODQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgY29sb3IgMXM7XFxyXFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2J0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMzdkNmU7XFxyXFxuICAgIGNvbG9yOiAjZmFmOGVmO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYWRhMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA4MHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgODBweCk7XFxyXFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0NjBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkX19pdGVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkYzFiNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiAjN2U3OTc1O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX25ld2dhbWUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUxNXB4KSB7XFxyXFxuICAgIC5tYWluX19maWVsZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA1NXB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDU1cHgpO1xcclxcbiAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzM1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZWxkX19pdGVtIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9faW5uZXItMSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9faW5uZXItMiB7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19zY29yZSxcXHJcXG4gICAgLmhlYWRlcl9fYmVzdCB7XFxyXFxuICAgICAgICB3aWR0aDogODBweDtcXHJcXG4gICAgICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbl9fZmllbGQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgNDVweCk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA0NXB4KTtcXHJcXG4gICAgICAgIGdyaWQtZ2FwOiA1cHg7XFxyXFxuICAgICAgICB3aWR0aDogMjU1cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3Njb3JlLFxcclxcbiAgICAuaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fYnRuIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbl9fZmllbGQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgODBweCk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA4MHB4KTtcXHJcXG4gICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDQ4NXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE3MDBweCkge1xcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogNTBweCAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3Njb3JlLFxcclxcbiAgICAuaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTcwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fYnRuIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW5fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTAwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogNSUgMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX190aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fZ2FtZS1ydWxlcyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3Njb3JlLFxcclxcbiAgICAuaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fYnRuIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW4ge1xcclxcbiAgICAgICAgbWFyZ2luOiA4MHB4IDAgNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbl9fZmllbGQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMTIwcHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMTIwcHgpO1xcclxcbiAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNzEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBtYXJnaW46IDYwcHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbl9fbmV3Z2FtZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAyNDAwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xyXG5cclxuY29uc3QgZ2FtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVfX2ZpZWxkJylcclxuY29uc3QgZ2FtZVNpemUgPSA1XHJcbmNvbnN0IGVsZW1lbnRzID0gW11cclxuXHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnQoKSB7XHJcblxyXG4gICAgY29uc3QgbmV3RmllbGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG5ld0ZpZWxkSXRlbS5jbGFzc05hbWUgPSAnZmllbGRfX2l0ZW0nXHJcbiAgICBuZXdGaWVsZEl0ZW0uaW5uZXJIVE1MID0gJydcclxuXHJcbiAgICBnYW1lRmllbGQuYXBwZW5kQ2hpbGQobmV3RmllbGRJdGVtKVxyXG5cclxuICAgIHJldHVybiBuZXdGaWVsZEl0ZW1cclxufVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lU2l6ZTsgaSsrKSB7XHJcbiAgICBlbGVtZW50c1tpXSA9IFtdXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVTaXplOyBqKyspIHtcclxuICAgICAgICBlbGVtZW50c1tpXVtqXSA9IGFkZEVsZW1lbnQoKVxyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgc3dpdGNoIChldmVudC5jb2RlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXAnKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3duJylcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0JylcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpXHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KClcclxuICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlTmV3SXRlbSgpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZU5ld0l0ZW0oKSB7XHJcblxyXG4gICAgbGV0IGNvdW50ID0gMFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZVNpemU7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZVNpemU7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHNbaV1bal0uZ2V0SW5uZXJIVE1MKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcnVuZG9tUG9zaXRpb24gPSBnZXRSYW5kb21JbnQoMCwgY291bnQpXHJcbiAgICBjb25zdCBydW5kb21OdW1iID0gZ2V0UmFuZG9tSW50KDAsIDEwKVxyXG4gICAgY29uc3QgcnVuZG9tSXRlbUlubmVyID0gcnVuZG9tTnVtYiA9PSAwID8gNCA6IDJcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVTaXplOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVTaXplOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2ldW2pdLmdldElubmVySFRNTCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVuZG9tUG9zaXRpb24gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldW2pdLmlubmVySFRNTCA9IHJ1bmRvbUl0ZW1Jbm5lclxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuZG9tUG9zaXRpb24tLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKVxyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVMZWZ0KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG1vdmVUb0luZGV4ID0gMFxyXG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgZ2FtZVNpemU7IGorKykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChpLCBqKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudHNbaV1bal0uaW5uZXJIVE1MXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldChpLCBqLCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudHNbaV1bal0uaW5uZXJIVE1MID0gdmFsdWVcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiZ2FtZUZpZWxkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVTaXplIiwiZWxlbWVudHMiLCJhZGRFbGVtZW50IiwibmV3RmllbGRJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaSIsImoiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsIm1vdmVMZWZ0IiwiZ2VuZXJhdGVOZXdJdGVtIiwiY291bnQiLCJnZXRJbm5lckhUTUwiLCJydW5kb21Qb3NpdGlvbiIsImdldFJhbmRvbUludCIsInJ1bmRvbU51bWIiLCJydW5kb21JdGVtSW5uZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwibW92ZVRvSW5kZXgiLCJnZXQiLCJzZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=