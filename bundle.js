/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./swipe.js":
/*!******************!*\
  !*** ./swipe.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swipe": () => (/* binding */ swipe)
/* harmony export */ });
function swipe(el, settings, moveAll) {
  var sett = Object.assign({}, {
    minDist: 60,
    maxDist: 120,
    maxTime: 700,
    minTime: 50
  }, sett);
  if (settings.maxTime < settings.minTime) settings.maxTime = settings.minTime + 500;

  if (settings.maxTime < 100 || settings.minTime < 50) {
    settings.maxTime = 700;
    settings.minTime = 50;
  }

  var dir,
      swipeType,
      dist,
      isMouse = false,
      isMouseDown = false,
      startX = 0,
      distX = 0,
      startY = 0,
      distY = 0,
      startTime = 0,
      support = {
    pointer: !!('PointerEvent' in window || 'msPointerEnabled' in window.navigator),
    touch: !!(typeof window.orientation !== 'undefined' || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 'ontouchstart' in window || navigator.msMaxTouchPoints || 'maxTouchPoints' in window.navigator > 1 || 'msMaxTouchPoints' in window.navigator > 1)
  };

  var getSupportedEvents = function getSupportedEvents() {
    switch (true) {
      case support.pointer:
        events = {
          type: 'pointer',
          start: 'PointerDown',
          move: 'PointerMove',
          end: 'PointerUp',
          cancel: 'PointerCancel',
          leave: 'PointerLeave'
        };
        var ie10 = window.navigator.msPointerEnabled && Function('/*@cc_on return document.documentMode===10@*/')();

        for (var value in events) {
          if (value === 'type') continue;
          events[value] = ie10 ? 'MS' + events[value] : events[value].toLowerCase();
        }

        break;

      case support.touch:
        events = {
          type: 'touch',
          start: 'touchstart',
          move: 'touchmove',
          end: 'touchend',
          cancel: 'touchcancel'
        };
        break;

      default:
        events = {
          type: 'mouse',
          start: 'mousedown',
          move: 'mousemove',
          end: 'mouseup',
          leave: 'mouseleave'
        };
        break;
    }

    return events;
  };

  var eventsUnify = function eventsUnify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  };

  var checkStart = function checkStart(e) {
    var event = eventsUnify(e);
    if (support.touch && typeof e.touches !== 'undefined' && e.touches.length !== 1) return;
    dir = 'none';
    swipeType = 'none';
    dist = 0;
    startX = event.pageX;
    startY = event.pageY;
    startTime = new Date().getTime();
    if (isMouse) isMouseDown = true;
  };

  var checkMove = function checkMove(e) {
    if (isMouse && !isMouseDown) return;
    var event = eventsUnify(e);
    distX = event.pageX - startX;
    distY = event.pageY - startY;
    if (Math.abs(distX) > Math.abs(distY)) dir = distX < 0 ? 'left' : 'right';else dir = distY < 0 ? 'up' : 'down';
  };

  var checkEnd = function checkEnd(e) {
    if (isMouse && !isMouseDown) {
      isMouseDown = false;
      return;
    }

    var endTime = new Date().getTime();
    var time = endTime - startTime;

    if (time >= settings.minTime && time <= settings.maxTime) {
      if (Math.abs(distX) >= settings.minDist && Math.abs(distY) <= settings.maxDist) {
        swipeType = dir;
      } else if (Math.abs(distY) >= settings.minDist && Math.abs(distX) <= settings.maxDist) {
        swipeType = dir;
      }
    }

    dist = dir === 'left' || dir === 'right' ? Math.abs(distX) : Math.abs(distY);

    if (swipeType !== 'none' && dist >= settings.minDist) {
      var swipeEvent = new CustomEvent('swipe', {
        bubbles: true,
        cancelable: true,
        detail: {
          full: e,
          dir: swipeType,
          dist: dist,
          time: time
        }
      });
      el.dispatchEvent(swipeEvent);
    }

    moveAll(dir);
  };

  var events = getSupportedEvents();
  if (support.pointer && !support.touch || events.type === 'mouse') isMouse = true;
  el.addEventListener(events.start, checkStart);
  el.addEventListener(events.move, checkMove);
  el.addEventListener(events.end, checkEnd);

  if (support.pointer && support.touch) {
    el.addEventListener('lostpointercapture', checkEnd);
  }
}

/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #faf8ef;\r\n    font-family: \"Ubuntu\", sans-serif;\r\n    font-size: 18px;\r\n    color: #776e7b;\r\n    overflow-x: hidden;\r\n}\r\n\r\na,\r\na:visited,\r\na:hover {\r\n    color: inherit;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-weight: 700;\r\n    outline: transparent;\r\n}\r\n\r\nbutton {\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.modal__window {\r\n    margin: 20% auto;\r\n    padding: 20px 40px;\r\n    background-color: #6d2f52;\r\n    border: 2px #b5b2b7 solid;\r\n    border-radius: 5px;\r\n    width: 55%;\r\n    color: #b5b2b7;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.modal__text {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.modal__close {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n.modal__close:hover,\r\n:focus {\r\n    cursor: pointer;\r\n}\r\n\r\n.modal__input {\r\n    text-align: center;\r\n    padding: 5px 10px;\r\n    margin-top: 10px;\r\n    outline: none;\r\n    border: transparent;\r\n    border-radius: 5px;\r\n    background-color: #b5b2b7;\r\n}\r\n\r\n.modal__input_ok {\r\n    align-self: flex-end;\r\n}\r\n\r\n.modal__input_ok:hover,\r\n:focus {\r\n    cursor: pointer;\r\n}\r\n\r\n.rating-winners {\r\n    overflow: auto;\r\n}\r\n\r\n.rating-winners__window {\r\n    margin: 5% auto;\r\n}\r\n\r\n.rating-winner__inner {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.rating-winner__item {\r\n    margin: 5px;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    background-color: #b5b2b7;\r\n    color: #6d2f52;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    width: 150px;\r\n    height: 30px;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.first {\r\n    background-color: #a583bc;\r\n    color: #4b1835;\r\n    font-weight: 700;\r\n}\r\n\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 10px 30px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 5px 20px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.header__inner-1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.header__inner-2 {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.header__description {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    max-width: 200px;\r\n}\r\n\r\n.header__title {\r\n    font-size: 56px;\r\n    font-weight: 700;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.btn_text_underlined {\r\n    margin-top: 10px;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    text-decoration: underline;\r\n    border: none;\r\n    background-color: transparent;\r\n    color: #776e7b;\r\n}\r\n\r\n.header__score,\r\n.header__best {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #faf8ef;\r\n    background-color: #b5b2b7;\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    height: 60px;\r\n    width: 100px;\r\n}\r\n\r\n.header__best {\r\n    margin-left: 30px;\r\n}\r\n\r\n.header__btn {\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    color: #efdfde;\r\n    background-color: #a77070;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    max-width: 300px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.header__btn:hover {\r\n    transition: background-color 1s, color 1s;\r\n    background-color: #913a6a;\r\n    color: #faf8ef;\r\n}\r\n\r\n.main {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.main__field {\r\n    display: grid;\r\n    background-color: #bbada0;\r\n    border-radius: 5px;\r\n    grid-template-columns: repeat(5, 80px);\r\n    grid-template-rows: repeat(5, 80px);\r\n    grid-gap: 10px;\r\n    align-items: stretch;\r\n    justify-content: center;\r\n    width: 460px;\r\n    padding: 10px 0;\r\n    margin: 20px auto;\r\n}\r\n\r\n.field__item {\r\n    background-color: #cdc1b4;\r\n    border-radius: 5px;\r\n    font-size: 60px;\r\n    font-weight: 700;\r\n    color: #7e7975;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.field__item_2 {\r\n    background-color: #caaf9c;\r\n}\r\n\r\n.field__item_4 {\r\n    background-color: #c6b4cd;\r\n    color: #797681;\r\n}\r\n\r\n.field__item_8 {\r\n    background-color: #b4cdbd;\r\n    color: #797681;\r\n}\r\n\r\n.field__item_16 {\r\n    background-color: #b5b4cd;\r\n    font-size: 55px;\r\n    color: #707270;\r\n}\r\n\r\n.field__item_32 {\r\n    background-color: #cdc5b4;\r\n    font-size: 55px;\r\n    color: #707270;\r\n}\r\n\r\n.field__item_64 {\r\n    background-color: #b4cacd;\r\n    font-size: 55px;\r\n    color: #707270;\r\n}\r\n\r\n.field__item_128 {\r\n    background-color: #cdb4b7;\r\n    font-size: 45px;\r\n    color: #6b706c;\r\n}\r\n\r\n.field__item_256 {\r\n    background-color: #b4cdc2;\r\n    font-size: 45px;\r\n    color: #6b706c;\r\n}\r\n\r\n.field__item_512 {\r\n    background-color: #e6bc8f;\r\n    font-size: 45px;\r\n    color: #6b706c;\r\n}\r\n\r\n.field__item_1024 {\r\n    background-color: #ce8070;\r\n    font-size: 40px;\r\n    color: #a4b5aa;\r\n}\r\n\r\n.field__item_2048 {\r\n    background-color: #c04040;\r\n    font-size: 40px;\r\n    color: #b4cdbd;\r\n}\r\n\r\n.main__description {\r\n    margin: 40px 0;\r\n    text-align: center;\r\n}\r\n\r\n@media (max-width: 840px) {\r\n    .container {\r\n        max-width: 780px;\r\n        flex-wrap: nowrap;\r\n        flex-direction: row-reverse;\r\n    }\r\n    .header {\r\n        max-width: 200px;\r\n        margin-right: 40px;\r\n    }\r\n\r\n    .header__title {\r\n        margin-bottom: 10px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    .header__btn {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .header__best {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 58px);\r\n        grid-template-rows: repeat(5, 58px);\r\n        grid-gap: 10px;\r\n        width: 350px;\r\n        height: 350px;\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .field__item_16,\r\n    .field__item_32,\r\n    .field__item_64 {\r\n        font-size: 25px;\r\n    }\r\n\r\n    .field__item_128,\r\n    .field__item_256,\r\n    .field__item_512 {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .field__item_1024,\r\n    .field__item_2048 {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (orientation: landscape) and (max-width: 920px) {\r\n    .container {\r\n        padding: 0;\r\n    }\r\n\r\n    .header {\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .main {\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .header__description {\r\n        display: none;\r\n    }\r\n\r\n    .header__title {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 65px);\r\n        grid-template-rows: repeat(5, 65px);\r\n        width: 390px;\r\n        height: 390px;\r\n        padding: 12px 5px;\r\n        margin: 5px 0 0;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 50px;\r\n    }\r\n\r\n    .field__item_16,\r\n    .field__item_32,\r\n    .field__item_64 {\r\n        font-size: 45px;\r\n    }\r\n\r\n    .field__item_128,\r\n    .field__item_256,\r\n    .field__item_512 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .field__item_1024,\r\n    .field__item_2048 {\r\n        font-size: 28px;\r\n    }\r\n}\r\n\r\n@media (max-width: 770px) {\r\n    .modal__window {\r\n        width: 80%;\r\n    }\r\n\r\n    .container {\r\n        max-width: 700px;\r\n        flex-wrap: nowrap;\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .header {\r\n        max-width: 300px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .header__title {\r\n        margin-bottom: 10px;\r\n        font-size: 55px;\r\n    }\r\n\r\n    .header__description {\r\n        display: none;\r\n    }\r\n\r\n    .header__btn {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .header__best {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .main__field {\r\n        margin-left: auto;\r\n    }\r\n}\r\n\r\n@media (orientation: landscape) and (max-width: 700px) {\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 50px);\r\n        grid-template-rows: repeat(5, 50px);\r\n        width: 305px;\r\n        height: 305px;\r\n        padding: 6px;\r\n        margin: 15px 0 0;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 50px;\r\n    }\r\n\r\n    .field__item_16,\r\n    .field__item_32,\r\n    .field__item_64 {\r\n        font-size: 45px;\r\n    }\r\n\r\n    .field__item_128,\r\n    .field__item_256,\r\n    .field__item_512 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .field__item_1024,\r\n    .field__item_2048 {\r\n        font-size: 28px;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .container {\r\n        max-width: 550px;\r\n        flex-wrap: nowrap;\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .header {\r\n        max-width: 300px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .header__title {\r\n        margin-bottom: 10px;\r\n        font-size: 50px;\r\n    }\r\n\r\n    .header__description {\r\n        display: none;\r\n    }\r\n\r\n    .header__btn {\r\n        max-width: 200px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        width: 80px;\r\n    }\r\n}\r\n\r\n@media (max-width: 540px) {\r\n    .container {\r\n        width: 95%;\r\n        flex-wrap: wrap;\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    .main {\r\n        justify-content: center;\r\n    }\r\n\r\n    .header {\r\n        max-width: 300px;\r\n        flex-direction: row;\r\n        margin: 0 auto;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .header__title {\r\n        display: none;\r\n    }\r\n\r\n    .header__description {\r\n        display: none;\r\n    }\r\n\r\n    .header__btn {\r\n        width: 180px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin: 0 0 10px;\r\n    }\r\n\r\n    .header__inner-1 {\r\n        flex-direction: row-reverse;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        width: 125px;\r\n    }\r\n\r\n    .btn_text_underlined {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n    .rating-winner__item {\r\n        width: 110px;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .header__btn {\r\n        width: 120px;\r\n        margin-top: 0;\r\n        padding: 10px;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        width: 80px;\r\n        height: 40px;\r\n        padding: 5px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .btn_text_underlined {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 50px);\r\n        grid-template-rows: repeat(5, 50px);\r\n        grid-gap: 6px;\r\n        width: 290px;\r\n        height: 290px;\r\n        margin: 0px 0px 10px;\r\n    }\r\n}\r\n\r\n@media (max-width: 340px) {\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 45px);\r\n        grid-template-rows: repeat(5, 45px);\r\n        grid-gap: 5px;\r\n        width: 265px;\r\n        height: 265px;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px) {\r\n    .modal__window {\r\n        padding: 10px 20px;\r\n    }\r\n\r\n    .rating-winner__title {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .rating-winner__item {\r\n        width: 90px;\r\n        height: 25px;\r\n        font-size: 14px;\r\n        padding: 5px;\r\n    }\r\n\r\n    .container {\r\n        width: 100%;\r\n    }\r\n\r\n    .header__btn {\r\n        width: 100px;\r\n        margin-top: 0;\r\n        padding: 6px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 40px);\r\n        grid-template-rows: repeat(5, 40px);\r\n        grid-gap: 4px;\r\n        width: 235px;\r\n        height: 235px;\r\n    }\r\n}\r\n\r\n@media (max-width: 250px) {\r\n    .rating-winner__title {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .rating-winner__item {\r\n        width: 85px;\r\n        height: 25px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 30px);\r\n        grid-template-rows: repeat(5, 30px);\r\n        grid-gap: 3px;\r\n        width: 180px;\r\n        height: 180px;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .field__item_16,\r\n    .field__item_32,\r\n    .field__item_64 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .field__item_128,\r\n    .field__item_256,\r\n    .field__item_512 {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .field__item_1024,\r\n    .field__item_2048 {\r\n        font-size: 12px;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #faf8ef;\r\n    font-family: \"Ubuntu\", sans-serif;\r\n    font-size: 18px;\r\n    color: #776e7b;\r\n    overflow-x: hidden;\r\n}\r\n\r\na,\r\na:visited,\r\na:hover {\r\n    color: inherit;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-weight: 700;\r\n    outline: transparent;\r\n}\r\n\r\nbutton {\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.modal__window {\r\n    margin: 20% auto;\r\n    padding: 20px 40px;\r\n    background-color: #6d2f52;\r\n    border: 2px #b5b2b7 solid;\r\n    border-radius: 5px;\r\n    width: 55%;\r\n    color: #b5b2b7;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.modal__text {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.modal__close {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n.modal__close:hover,\r\n:focus {\r\n    cursor: pointer;\r\n}\r\n\r\n.modal__input {\r\n    text-align: center;\r\n    padding: 5px 10px;\r\n    margin-top: 10px;\r\n    outline: none;\r\n    border: transparent;\r\n    border-radius: 5px;\r\n    background-color: #b5b2b7;\r\n}\r\n\r\n.modal__input_ok {\r\n    align-self: flex-end;\r\n}\r\n\r\n.modal__input_ok:hover,\r\n:focus {\r\n    cursor: pointer;\r\n}\r\n\r\n.rating-winners {\r\n    overflow: auto;\r\n}\r\n\r\n.rating-winners__window {\r\n    margin: 5% auto;\r\n}\r\n\r\n.rating-winner__inner {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.rating-winner__item {\r\n    margin: 5px;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    background-color: #b5b2b7;\r\n    color: #6d2f52;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    width: 150px;\r\n    height: 30px;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.first {\r\n    background-color: #a583bc;\r\n    color: #4b1835;\r\n    font-weight: 700;\r\n}\r\n\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 10px 30px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 5px 20px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.header__inner-1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.header__inner-2 {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.header__description {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    max-width: 200px;\r\n}\r\n\r\n.header__title {\r\n    font-size: 56px;\r\n    font-weight: 700;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.btn_text_underlined {\r\n    margin-top: 10px;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    text-decoration: underline;\r\n    border: none;\r\n    background-color: transparent;\r\n    color: #776e7b;\r\n}\r\n\r\n.header__score,\r\n.header__best {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #faf8ef;\r\n    background-color: #b5b2b7;\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    height: 60px;\r\n    width: 100px;\r\n}\r\n\r\n.header__best {\r\n    margin-left: 30px;\r\n}\r\n\r\n.header__btn {\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    color: #efdfde;\r\n    background-color: #a77070;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    max-width: 300px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.header__btn:hover {\r\n    transition: background-color 1s, color 1s;\r\n    background-color: #913a6a;\r\n    color: #faf8ef;\r\n}\r\n\r\n.main {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.main__field {\r\n    display: grid;\r\n    background-color: #bbada0;\r\n    border-radius: 5px;\r\n    grid-template-columns: repeat(5, 80px);\r\n    grid-template-rows: repeat(5, 80px);\r\n    grid-gap: 10px;\r\n    align-items: stretch;\r\n    justify-content: center;\r\n    width: 460px;\r\n    padding: 10px 0;\r\n    margin: 20px auto;\r\n}\r\n\r\n.field__item {\r\n    background-color: #cdc1b4;\r\n    border-radius: 5px;\r\n    font-size: 60px;\r\n    font-weight: 700;\r\n    color: #7e7975;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.field__item_2 {\r\n    background-color: #caaf9c;\r\n}\r\n\r\n.field__item_4 {\r\n    background-color: #c6b4cd;\r\n    color: #797681;\r\n}\r\n\r\n.field__item_8 {\r\n    background-color: #b4cdbd;\r\n    color: #797681;\r\n}\r\n\r\n.field__item_16 {\r\n    background-color: #b5b4cd;\r\n    font-size: 55px;\r\n    color: #707270;\r\n}\r\n\r\n.field__item_32 {\r\n    background-color: #cdc5b4;\r\n    font-size: 55px;\r\n    color: #707270;\r\n}\r\n\r\n.field__item_64 {\r\n    background-color: #b4cacd;\r\n    font-size: 55px;\r\n    color: #707270;\r\n}\r\n\r\n.field__item_128 {\r\n    background-color: #cdb4b7;\r\n    font-size: 45px;\r\n    color: #6b706c;\r\n}\r\n\r\n.field__item_256 {\r\n    background-color: #b4cdc2;\r\n    font-size: 45px;\r\n    color: #6b706c;\r\n}\r\n\r\n.field__item_512 {\r\n    background-color: #e6bc8f;\r\n    font-size: 45px;\r\n    color: #6b706c;\r\n}\r\n\r\n.field__item_1024 {\r\n    background-color: #ce8070;\r\n    font-size: 40px;\r\n    color: #a4b5aa;\r\n}\r\n\r\n.field__item_2048 {\r\n    background-color: #c04040;\r\n    font-size: 40px;\r\n    color: #b4cdbd;\r\n}\r\n\r\n.main__description {\r\n    margin: 40px 0;\r\n    text-align: center;\r\n}\r\n\r\n@media (max-width: 840px) {\r\n    .container {\r\n        max-width: 780px;\r\n        flex-wrap: nowrap;\r\n        flex-direction: row-reverse;\r\n    }\r\n    .header {\r\n        max-width: 200px;\r\n        margin-right: 40px;\r\n    }\r\n\r\n    .header__title {\r\n        margin-bottom: 10px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    .header__btn {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .header__best {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 58px);\r\n        grid-template-rows: repeat(5, 58px);\r\n        grid-gap: 10px;\r\n        width: 350px;\r\n        height: 350px;\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .field__item_16,\r\n    .field__item_32,\r\n    .field__item_64 {\r\n        font-size: 25px;\r\n    }\r\n\r\n    .field__item_128,\r\n    .field__item_256,\r\n    .field__item_512 {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .field__item_1024,\r\n    .field__item_2048 {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (orientation: landscape) and (max-width: 920px) {\r\n    .container {\r\n        padding: 0;\r\n    }\r\n\r\n    .header {\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .main {\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .header__description {\r\n        display: none;\r\n    }\r\n\r\n    .header__title {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 65px);\r\n        grid-template-rows: repeat(5, 65px);\r\n        width: 390px;\r\n        height: 390px;\r\n        padding: 12px 5px;\r\n        margin: 5px 0 0;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 50px;\r\n    }\r\n\r\n    .field__item_16,\r\n    .field__item_32,\r\n    .field__item_64 {\r\n        font-size: 45px;\r\n    }\r\n\r\n    .field__item_128,\r\n    .field__item_256,\r\n    .field__item_512 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .field__item_1024,\r\n    .field__item_2048 {\r\n        font-size: 28px;\r\n    }\r\n}\r\n\r\n@media (max-width: 770px) {\r\n    .modal__window {\r\n        width: 80%;\r\n    }\r\n\r\n    .container {\r\n        max-width: 700px;\r\n        flex-wrap: nowrap;\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .header {\r\n        max-width: 300px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .header__title {\r\n        margin-bottom: 10px;\r\n        font-size: 55px;\r\n    }\r\n\r\n    .header__description {\r\n        display: none;\r\n    }\r\n\r\n    .header__btn {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .header__best {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .main__field {\r\n        margin-left: auto;\r\n    }\r\n}\r\n\r\n@media (orientation: landscape) and (max-width: 700px) {\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 50px);\r\n        grid-template-rows: repeat(5, 50px);\r\n        width: 305px;\r\n        height: 305px;\r\n        padding: 6px;\r\n        margin: 15px 0 0;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 50px;\r\n    }\r\n\r\n    .field__item_16,\r\n    .field__item_32,\r\n    .field__item_64 {\r\n        font-size: 45px;\r\n    }\r\n\r\n    .field__item_128,\r\n    .field__item_256,\r\n    .field__item_512 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .field__item_1024,\r\n    .field__item_2048 {\r\n        font-size: 28px;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .container {\r\n        max-width: 550px;\r\n        flex-wrap: nowrap;\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .header {\r\n        max-width: 300px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .header__title {\r\n        margin-bottom: 10px;\r\n        font-size: 50px;\r\n    }\r\n\r\n    .header__description {\r\n        display: none;\r\n    }\r\n\r\n    .header__btn {\r\n        max-width: 200px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        width: 80px;\r\n    }\r\n}\r\n\r\n@media (max-width: 540px) {\r\n    .container {\r\n        width: 95%;\r\n        flex-wrap: wrap;\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    .main {\r\n        justify-content: center;\r\n    }\r\n\r\n    .header {\r\n        max-width: 300px;\r\n        flex-direction: row;\r\n        margin: 0 auto;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .header__title {\r\n        display: none;\r\n    }\r\n\r\n    .header__description {\r\n        display: none;\r\n    }\r\n\r\n    .header__btn {\r\n        width: 180px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .header__inner-2 {\r\n        margin: 0 0 10px;\r\n    }\r\n\r\n    .header__inner-1 {\r\n        flex-direction: row-reverse;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        width: 125px;\r\n    }\r\n\r\n    .btn_text_underlined {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n    .rating-winner__item {\r\n        width: 110px;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .header__btn {\r\n        width: 120px;\r\n        margin-top: 0;\r\n        padding: 10px;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .header__score,\r\n    .header__best {\r\n        width: 80px;\r\n        height: 40px;\r\n        padding: 5px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .btn_text_underlined {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 50px);\r\n        grid-template-rows: repeat(5, 50px);\r\n        grid-gap: 6px;\r\n        width: 290px;\r\n        height: 290px;\r\n        margin: 0px 0px 10px;\r\n    }\r\n}\r\n\r\n@media (max-width: 340px) {\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 45px);\r\n        grid-template-rows: repeat(5, 45px);\r\n        grid-gap: 5px;\r\n        width: 265px;\r\n        height: 265px;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px) {\r\n    .modal__window {\r\n        padding: 10px 20px;\r\n    }\r\n\r\n    .rating-winner__title {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .rating-winner__item {\r\n        width: 90px;\r\n        height: 25px;\r\n        font-size: 14px;\r\n        padding: 5px;\r\n    }\r\n\r\n    .container {\r\n        width: 100%;\r\n    }\r\n\r\n    .header__btn {\r\n        width: 100px;\r\n        margin-top: 0;\r\n        padding: 6px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 40px);\r\n        grid-template-rows: repeat(5, 40px);\r\n        grid-gap: 4px;\r\n        width: 235px;\r\n        height: 235px;\r\n    }\r\n}\r\n\r\n@media (max-width: 250px) {\r\n    .rating-winner__title {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .rating-winner__item {\r\n        width: 85px;\r\n        height: 25px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .main__field {\r\n        grid-template-columns: repeat(5, 30px);\r\n        grid-template-rows: repeat(5, 30px);\r\n        grid-gap: 3px;\r\n        width: 180px;\r\n        height: 180px;\r\n    }\r\n\r\n    .field__item {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .field__item_16,\r\n    .field__item_32,\r\n    .field__item_64 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .field__item_128,\r\n    .field__item_256,\r\n    .field__item_512 {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .field__item_1024,\r\n    .field__item_2048 {\r\n        font-size: 12px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swipe */ "./swipe.js");


var gameField = document.getElementById('game_field');
var gameSize = 5;
var elements = [];
var scoreHTML = document.getElementById('score_field');
var bestHTML = document.getElementById('best_field');
var winnersRatingModalWindow = document.getElementById('rating_winners_modal_window');
var howToPlay = document.getElementById('how_to_play');
var howToPlayClose = document.getElementById('how_to_play_close');
var winnerWindow = document.getElementById('winner');
var winnerWindowClose = document.getElementById('winner_close');
var gameOverWindow = document.getElementById('game_over');
var score = 0;
var best = 0;
var isGameStarted = false;
var startTime;
var finishTime;
var somethingChanged = false;

if (Number(localStorage.getItem('bestScore')) > 0) {
  best = Number(localStorage.getItem('bestScore'));
}

scoreHTML.innerHTML = score;
bestHTML.innerHTML = best;

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
  moveAll(event.code);
});

function moveAll(direction) {
  somethingChanged = false;

  if (isGameStarted) {
    switch (direction) {
      case 'ArrowUp':
      case 'up':
        moveUp();
        break;

      case 'ArrowDown':
      case 'down':
        moveDown();
        break;

      case 'ArrowRight':
      case 'right':
        moveRight();
        break;

      case 'left':
      case 'ArrowLeft':
        moveLeft();
        break;

      default:
        return;
    }

    if (somethingChanged) {
      setTimeout(generateNewItem, 200);
    }
  }
}

function generateNewItem() {
  var count = 0;

  for (var _i = 0; _i < gameSize; _i++) {
    for (var _j = 0; _j < gameSize; _j++) {
      if (get(_i, _j) == '') {
        count++;
      }
    }
  }

  var rundomPosition = getRandomInt(0, count);
  var rundomNumb = getRandomInt(0, 10);
  var rundomItemInner = rundomNumb == 0 ? 4 : 2;

  for (var _i2 = 0; _i2 < gameSize; _i2++) {
    for (var _j2 = 0; _j2 < gameSize; _j2++) {
      if (get(_i2, _j2) == '') {
        if (rundomPosition == 0) {
          set(_i2, _j2, rundomItemInner);
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

function move(get, set) {
  if (isGameStarted) {
    for (var _i3 = 0; _i3 < gameSize; _i3++) {
      var moveFromIndex = 1;
      var moveToIndex = 0;

      while (moveFromIndex < gameSize) {
        if (moveFromIndex <= moveToIndex) {
          moveFromIndex = moveToIndex + 1;
          continue;
        }

        if (get(_i3, moveToIndex) != '' && get(_i3, moveToIndex) == get(_i3, moveFromIndex)) {
          set(_i3, moveToIndex, get(_i3, moveToIndex) * 2);
          set(_i3, moveFromIndex, '');
          score += Number(get(_i3, moveToIndex));
          scoreHTML.innerHTML = score;
          moveFromIndex++;
          moveToIndex++;
          continue;
        }

        if (get(_i3, moveToIndex) == '' && get(_i3, moveFromIndex) != '') {
          set(_i3, moveToIndex, get(_i3, moveFromIndex));
          set(_i3, moveFromIndex, '');
          moveFromIndex++;
          continue;
        }

        if (get(_i3, moveToIndex) != '' && get(_i3, moveFromIndex) != '') {
          moveToIndex++;
          continue;
        }

        moveFromIndex++;
      }
    }

    if (gameOver()) {
      gameOverWindow.style.display = 'block';
      bestResScore();
    }

    if (win()) {
      isGameStarted = false;
      finishTime = Date.now();
      winnerWindow.style.display = 'block';
      document.getElementById('winner_name_send').onclick = isWinner;
      bestResScore();
    }
  }
}

function moveLeft() {
  move(getLeft, setLeft);
}

function getLeft(i, j) {
  return elements[i][j].innerHTML;
}

function setLeft(i, j, value) {
  set(i, j, value);
}

function moveRight() {
  move(getRight, setRight);
}

function getRight(i, j) {
  return elements[i][gameSize - j - 1].innerHTML;
}

function setRight(i, j, value) {
  set(i, gameSize - j - 1, value);
}

function moveUp() {
  move(getUp, setUp);
}

function getUp(i, j) {
  return elements[j][i].innerHTML;
}

function setUp(i, j, value) {
  set(j, i, value);
}

function moveDown() {
  move(getDown, setDown);
}

function getDown(i, j) {
  return elements[gameSize - j - 1][i].innerHTML;
}

function setDown(i, j, value) {
  set(gameSize - j - 1, i, value);
}

function set(i, j, value) {
  removeClassFieldItem(i, j);
  elements[i][j].innerHTML = value;
  addClassFieldItem(i, j, value);
  somethingChanged = true;
  return elements;
}

function get(i, j) {
  return elements[i][j].innerHTML;
}

function removeClassFieldItem(i, j) {
  var itemValue = get(i, j);
  elements[i][j].classList.remove('field__item_' + itemValue);
}

function addClassFieldItem(i, j, value) {
  elements[i][j].classList.add('field__item_' + value);
}

function newGameField() {
  for (var _i4 = 0; _i4 < gameSize; _i4++) {
    for (var _j3 = 0; _j3 < gameSize; _j3++) {
      set(_i4, _j3, '');
    }
  }

  generateNewItem();
  generateNewItem();
  scoreHTML.innerHTML = 0;
  isGameStarted = true;
  startTime = Date.now();
}

function gameOver() {
  for (var _i5 = 0; _i5 < gameSize; _i5++) {
    for (var _j4 = 0; _j4 < gameSize; _j4++) {
      if (get(_i5, _j4) == '') {
        return false;
      }
    }
  }

  for (var _i6 = 0; _i6 < gameSize; _i6++) {
    for (var _j5 = 1; _j5 < gameSize - 1; _j5++) {
      if (get(_i6, _j5) == get(_i6, _j5 + 1) || get(_i6, _j5) == get(_i6, _j5 - 1)) {
        return false;
      }
    }
  }

  for (var _i7 = 1; _i7 < gameSize - 1; _i7++) {
    for (var _j6 = 0; _j6 < gameSize; _j6++) {
      if (get(_i7, _j6) == get(_i7 + 1, _j6) || get(_i7, _j6) == get(_i7 - 1, _j6)) {
        return false;
      }
    }
  }

  isGameStarted = false;
  return true;
}

function win() {
  for (var _i8 = 0; _i8 < gameSize; _i8++) {
    for (var _j7 = 0; _j7 < gameSize; _j7++) {
      if (get(_i8, _j7) == 2048) {
        return true;
      }
    }
  }
}

function bestResScore() {
  if (best < score) {
    localStorage.setItem('bestScore', score);
  }
}

function isWinner() {
  var objectWinner = {
    name: '',
    time: 0
  };
  objectWinner.name = document.getElementById('winner_input_name').value;
  var timeWin = finishTime - startTime;
  objectWinner.time = (timeWin / 60000).toFixed(2);
  var arrayWinners = JSON.parse(localStorage.getItem('arrayWinners'));

  if (arrayWinners == null) {
    arrayWinners = [];
  }

  arrayWinners.push(objectWinner);
  arrayWinners.sort(function (a, b) {
    return a.time - b.time;
  });
  localStorage.setItem('arrayWinners', JSON.stringify(arrayWinners));
}

function addWinnerInRating() {
  var arrayWinners = JSON.parse(localStorage.getItem('arrayWinners'));

  if (arrayWinners == null) {
    arrayWinners = [];
  }

  arrayWinners.forEach(function (e) {
    var newWinnerRatingInner = document.createElement('div');
    newWinnerRatingInner.className = 'rating-winner__inner';
    document.getElementById('rating_winners_window').appendChild(newWinnerRatingInner);
    var newWinnerRatingItem = document.createElement('div');
    newWinnerRatingItem.className = 'rating-winner__item name';
    newWinnerRatingItem.innerHTML = e.name;
    newWinnerRatingInner.appendChild(newWinnerRatingItem);
    newWinnerRatingItem = document.createElement('div');
    newWinnerRatingItem.className = 'rating-winner__item time';
    newWinnerRatingItem.innerHTML = e.time;
    newWinnerRatingInner.appendChild(newWinnerRatingItem);
  });
}

document.getElementById('new_game').onclick = newGameField;

document.getElementById('game_rules').onclick = function () {
  howToPlay.style.display = 'block';
};

howToPlayClose.onclick = function () {
  howToPlay.style.display = 'none';
};

document.getElementById('game_over_close').onclick = function () {
  gameOverWindow.style.display = 'none';
};

document.getElementById('winners_rating_btn').onclick = function () {
  addWinnerInRating();
  winnersRatingModalWindow.style.display = 'block';
};

document.getElementById('rating_winners_close').onclick = function () {
  winnersRatingModalWindow.style.display = 'none';
};

winnerWindowClose.onclick = function () {
  winnerWindow.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == howToPlay) {
    howToPlay.style.display = 'none';
  }

  if (event.target == winnerWindow) {
    winnerWindow.style.display = 'none';
  }

  if (event.target == gameOverWindow) {
    gameOverWindow.style.display = 'none';
  }

  if (event.target == winnersRatingModalWindow) {
    winnersRatingModalWindow.style.display = 'none';
  }
};

(0,_swipe__WEBPACK_IMPORTED_MODULE_1__.swipe)(gameField, {
  maxTime: 1000,
  minTime: 60,
  maxDist: 250,
  minDist: 40
}, moveAll);

gameField.onmousedown = gameField.onselectstart = function () {
  return false;
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlB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LE9BQS9CLEdBQXlDLE1BQXpDO0VBQ0g7QUFDSixDQWJEOztBQWVBekgsNkNBQUssQ0FBQ29FLFNBQUQsRUFBWTtFQUFFM0QsT0FBTyxFQUFFLElBQVg7RUFBaUJDLE9BQU8sRUFBRSxFQUExQjtFQUE4QkYsT0FBTyxFQUFFLEdBQXZDO0VBQTRDRCxPQUFPLEVBQUU7QUFBckQsQ0FBWixFQUF1RUosT0FBdkUsQ0FBTDs7QUFFQWlFLFNBQVMsQ0FBQzRGLFdBQVYsR0FBd0I1RixTQUFTLENBQUM2RixhQUFWLEdBQTBCLFlBQVk7RUFDMUQsT0FBTyxLQUFQO0FBQ0gsQ0FGRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3dpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzLmNzcz8wNzJmIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHN3aXBlKGVsLCBzZXR0aW5ncywgbW92ZUFsbCkge1xyXG5cclxuICAgIGxldCBzZXR0ID0gT2JqZWN0LmFzc2lnbih7fSwge1xyXG4gICAgICAgIG1pbkRpc3Q6IDYwLFxyXG4gICAgICAgIG1heERpc3Q6IDEyMCxcclxuICAgICAgICBtYXhUaW1lOiA3MDAsXHJcbiAgICAgICAgbWluVGltZTogNTBcclxuICAgIH0sIHNldHQpXHJcblxyXG4gICAgaWYgKHNldHRpbmdzLm1heFRpbWUgPCBzZXR0aW5ncy5taW5UaW1lKSBzZXR0aW5ncy5tYXhUaW1lID0gc2V0dGluZ3MubWluVGltZSArIDUwMFxyXG4gICAgaWYgKHNldHRpbmdzLm1heFRpbWUgPCAxMDAgfHwgc2V0dGluZ3MubWluVGltZSA8IDUwKSB7XHJcbiAgICAgICAgc2V0dGluZ3MubWF4VGltZSA9IDcwMFxyXG4gICAgICAgIHNldHRpbmdzLm1pblRpbWUgPSA1MFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXIsXHJcbiAgICAgICAgc3dpcGVUeXBlLFxyXG4gICAgICAgIGRpc3QsXHJcbiAgICAgICAgaXNNb3VzZSA9IGZhbHNlLFxyXG4gICAgICAgIGlzTW91c2VEb3duID0gZmFsc2UsXHJcbiAgICAgICAgc3RhcnRYID0gMCxcclxuICAgICAgICBkaXN0WCA9IDAsXHJcbiAgICAgICAgc3RhcnRZID0gMCxcclxuICAgICAgICBkaXN0WSA9IDAsXHJcbiAgICAgICAgc3RhcnRUaW1lID0gMCxcclxuICAgICAgICBzdXBwb3J0ID0ge1xyXG4gICAgICAgICAgICBwb2ludGVyOiAhISgnUG9pbnRlckV2ZW50JyBpbiB3aW5kb3cgfHwgKCdtc1BvaW50ZXJFbmFibGVkJyBpbiB3aW5kb3cubmF2aWdhdG9yKSksXHJcbiAgICAgICAgICAgIHRvdWNoOiAhISh0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uICE9PSAndW5kZWZpbmVkJyB8fFxyXG4gICAgICAgICAgICAgICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXHJcbiAgICAgICAgICAgICAgICB8fCAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgfHwgJ21heFRvdWNoUG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yID4gMVxyXG4gICAgICAgICAgICAgICAgfHwgJ21zTWF4VG91Y2hQb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IgPiAxKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0U3VwcG9ydGVkRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIHN1cHBvcnQucG9pbnRlcjpcclxuICAgICAgICAgICAgICAgIGV2ZW50cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6ICdQb2ludGVyRG93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogJ1BvaW50ZXJNb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6ICdQb2ludGVyVXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbDogJ1BvaW50ZXJDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlOiAnUG9pbnRlckxlYXZlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGllMTAgPSAod2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICYmIEZ1bmN0aW9uKCcvKkBjY19vbiByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRNb2RlPT09MTBAKi8nKSgpKVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgaW4gZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAndHlwZScpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzW3ZhbHVlXSA9IChpZTEwKSA/ICdNUycgKyBldmVudHNbdmFsdWVdIDogZXZlbnRzW3ZhbHVlXS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIHN1cHBvcnQudG91Y2g6XHJcbiAgICAgICAgICAgICAgICBldmVudHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RvdWNoJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6ICd0b3VjaGNhbmNlbCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBldmVudHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNlJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogJ21vdXNlZG93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogJ21vdXNlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAnbW91c2V1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmU6ICdtb3VzZWxlYXZlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50c1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBldmVudHNVbmlmeSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXMgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjaGVja1N0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgZXZlbnQgPSBldmVudHNVbmlmeShlKTtcclxuICAgICAgICBpZiAoc3VwcG9ydC50b3VjaCAmJiB0eXBlb2YgZS50b3VjaGVzICE9PSAndW5kZWZpbmVkJyAmJiBlLnRvdWNoZXMubGVuZ3RoICE9PSAxKSByZXR1cm47XHJcbiAgICAgICAgZGlyID0gJ25vbmUnXHJcbiAgICAgICAgc3dpcGVUeXBlID0gJ25vbmUnXHJcbiAgICAgICAgZGlzdCA9IDBcclxuICAgICAgICBzdGFydFggPSBldmVudC5wYWdlWFxyXG4gICAgICAgIHN0YXJ0WSA9IGV2ZW50LnBhZ2VZXHJcbiAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICBpZiAoaXNNb3VzZSkgaXNNb3VzZURvd24gPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNoZWNrTW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGlzTW91c2UgJiYgIWlzTW91c2VEb3duKSByZXR1cm5cclxuICAgICAgICB2YXIgZXZlbnQgPSBldmVudHNVbmlmeShlKVxyXG4gICAgICAgIGRpc3RYID0gZXZlbnQucGFnZVggLSBzdGFydFhcclxuICAgICAgICBkaXN0WSA9IGV2ZW50LnBhZ2VZIC0gc3RhcnRZXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpc3RYKSA+IE1hdGguYWJzKGRpc3RZKSkgZGlyID0gKGRpc3RYIDwgMCkgPyAnbGVmdCcgOiAncmlnaHQnXHJcbiAgICAgICAgZWxzZSBkaXIgPSAoZGlzdFkgPCAwKSA/ICd1cCcgOiAnZG93bidcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2hlY2tFbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChpc01vdXNlICYmICFpc01vdXNlRG93bikge1xyXG4gICAgICAgICAgICBpc01vdXNlRG93biA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgbGV0IHRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lXHJcbiAgICAgICAgaWYgKHRpbWUgPj0gc2V0dGluZ3MubWluVGltZSAmJiB0aW1lIDw9IHNldHRpbmdzLm1heFRpbWUpIHtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3RYKSA+PSBzZXR0aW5ncy5taW5EaXN0ICYmIE1hdGguYWJzKGRpc3RZKSA8PSBzZXR0aW5ncy5tYXhEaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2lwZVR5cGUgPSBkaXJcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaXN0WSkgPj0gc2V0dGluZ3MubWluRGlzdCAmJiBNYXRoLmFicyhkaXN0WCkgPD0gc2V0dGluZ3MubWF4RGlzdCkge1xyXG4gICAgICAgICAgICAgICAgc3dpcGVUeXBlID0gZGlyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzdCA9IChkaXIgPT09ICdsZWZ0JyB8fCBkaXIgPT09ICdyaWdodCcpID8gTWF0aC5hYnMoZGlzdFgpIDogTWF0aC5hYnMoZGlzdFkpXHJcblxyXG4gICAgICAgIGlmIChzd2lwZVR5cGUgIT09ICdub25lJyAmJiBkaXN0ID49IHNldHRpbmdzLm1pbkRpc3QpIHtcclxuICAgICAgICAgICAgbGV0IHN3aXBlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3N3aXBlJywge1xyXG4gICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmdWxsOiBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcjogc3dpcGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3Q6IGRpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogdGltZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KHN3aXBlRXZlbnQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb3ZlQWxsKGRpcilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXZlbnRzID0gZ2V0U3VwcG9ydGVkRXZlbnRzKClcclxuXHJcbiAgICBpZiAoKHN1cHBvcnQucG9pbnRlciAmJiAhc3VwcG9ydC50b3VjaCkgfHwgZXZlbnRzLnR5cGUgPT09ICdtb3VzZScpIGlzTW91c2UgPSB0cnVlXHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuc3RhcnQsIGNoZWNrU3RhcnQpXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3ZlLCBjaGVja01vdmUpXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5lbmQsIGNoZWNrRW5kKVxyXG4gICAgaWYgKHN1cHBvcnQucG9pbnRlciAmJiBzdXBwb3J0LnRvdWNoKSB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9zdHBvaW50ZXJjYXB0dXJlJywgY2hlY2tFbmQpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmOGVmO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY29sb3I6ICM3NzZlN2I7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX193aW5kb3cge1xcclxcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDJmNTI7XFxyXFxuICAgIGJvcmRlcjogMnB4ICNiNWIyYjcgc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgd2lkdGg6IDU1JTtcXHJcXG4gICAgY29sb3I6ICNiNWIyYjc7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9fdGV4dCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX2Nsb3NlOmhvdmVyLFxcclxcbjpmb2N1cyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19pbnB1dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjJiNztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19pbnB1dF9vayB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX2lucHV0X29rOmhvdmVyLFxcclxcbjpmb2N1cyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhdGluZy13aW5uZXJzIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5yYXRpbmctd2lubmVyc19fd2luZG93IHtcXHJcXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmF0aW5nLXdpbm5lcl9faW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5yYXRpbmctd2lubmVyX19pdGVtIHtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWIyYjc7XFxyXFxuICAgIGNvbG9yOiAjNmQyZjUyO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXJzdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNTgzYmM7XFxyXFxuICAgIGNvbG9yOiAjNGIxODM1O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19pbm5lci0xIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2lubmVyLTIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fZGVzY3JpcHRpb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX3RleHRfdW5kZXJsaW5lZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiAjNzc2ZTdiO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19zY29yZSxcXHJcXG4uaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmFmOGVmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViMmI3O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fYnRuIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjZWZkZmRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc3MDcwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2J0bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTEzYTZhO1xcclxcbiAgICBjb2xvcjogI2ZhZjhlZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJhZGEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDgwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA4MHB4KTtcXHJcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQ2MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjMWI0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6ICM3ZTc5NzU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW1fMiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWFmOWM7XFxyXFxufVxcclxcblxcclxcbi5maWVsZF9faXRlbV80IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2YjRjZDtcXHJcXG4gICAgY29sb3I6ICM3OTc2ODE7XFxyXFxufVxcclxcblxcclxcbi5maWVsZF9faXRlbV84IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0Y2RiZDtcXHJcXG4gICAgY29sb3I6ICM3OTc2ODE7XFxyXFxufVxcclxcblxcclxcbi5maWVsZF9faXRlbV8xNiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWI0Y2Q7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTVweDtcXHJcXG4gICAgY29sb3I6ICM3MDcyNzA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZF9faXRlbV8zMiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGM1YjQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTVweDtcXHJcXG4gICAgY29sb3I6ICM3MDcyNzA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZF9faXRlbV82NCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGNhY2Q7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTVweDtcXHJcXG4gICAgY29sb3I6ICM3MDcyNzA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZF9faXRlbV8xMjgge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RiNGI3O1xcclxcbiAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICAgIGNvbG9yOiAjNmI3MDZjO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW1fMjU2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0Y2RjMjtcXHJcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICBjb2xvcjogIzZiNzA2YztcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkX19pdGVtXzUxMiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmJjOGY7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgY29sb3I6ICM2YjcwNmM7XFxyXFxufVxcclxcblxcclxcbi5maWVsZF9faXRlbV8xMDI0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlODA3MDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBjb2xvcjogI2E0YjVhYTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkX19pdGVtXzIwNDgge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzA0MDQwO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiAjYjRjZGJkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fZGVzY3JpcHRpb24ge1xcclxcbiAgICBtYXJnaW46IDQwcHggMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDc4MHB4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICAgIH1cXHJcXG4gICAgLmhlYWRlciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9faW5uZXItMiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDU4cHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNThweCk7XFxyXFxuICAgICAgICBncmlkLWdhcDogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xNixcXHJcXG4gICAgLmZpZWxkX19pdGVtXzMyLFxcclxcbiAgICAuZmllbGRfX2l0ZW1fNjQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xMjgsXFxyXFxuICAgIC5maWVsZF9faXRlbV8yNTYsXFxyXFxuICAgIC5maWVsZF9faXRlbV81MTIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xMDI0LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fMjA0OCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogOTIwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2lubmVyLTIge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW4ge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbl9fZmllbGQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgNjVweCk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA2NXB4KTtcXHJcXG4gICAgICAgIHdpZHRoOiAzOTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzkwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMnB4IDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xNixcXHJcXG4gICAgLmZpZWxkX19pdGVtXzMyLFxcclxcbiAgICAuZmllbGRfX2l0ZW1fNjQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xMjgsXFxyXFxuICAgIC5maWVsZF9faXRlbV8yNTYsXFxyXFxuICAgIC5maWVsZF9faXRlbV81MTIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xMDI0LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fMjA0OCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KSB7XFxyXFxuICAgIC5tb2RhbF9fd2luZG93IHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19idG4ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19pbm5lci0yIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fYmVzdCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbl9fZmllbGQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICAgLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDUwcHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNTBweCk7XFxyXFxuICAgICAgICB3aWR0aDogMzA1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwNXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNnB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xNixcXHJcXG4gICAgLmZpZWxkX19pdGVtXzMyLFxcclxcbiAgICAuZmllbGRfX2l0ZW1fNjQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xMjgsXFxyXFxuICAgIC5maWVsZF9faXRlbV8yNTYsXFxyXFxuICAgIC5maWVsZF9faXRlbV81MTIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xMDI0LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fMjA0OCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX190aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fYnRuIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9faW5uZXItMiB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3Njb3JlLFxcclxcbiAgICAuaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW4ge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3RpdGxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2lubmVyLTIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19pbm5lci0xIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fc2NvcmUsXFxyXFxuICAgIC5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idG5fdGV4dF91bmRlcmxpbmVkIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcXHJcXG4gICAgLnJhdGluZy13aW5uZXJfX2l0ZW0ge1xcclxcbiAgICAgICAgd2lkdGg6IDExMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2J0biB7XFxyXFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19zY29yZSxcXHJcXG4gICAgLmhlYWRlcl9fYmVzdCB7XFxyXFxuICAgICAgICB3aWR0aDogODBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnRuX3RleHRfdW5kZXJsaW5lZCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDUwcHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNTBweCk7XFxyXFxuICAgICAgICBncmlkLWdhcDogNnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI5MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyOTBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xcclxcbiAgICAubWFpbl9fZmllbGQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgNDVweCk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA0NXB4KTtcXHJcXG4gICAgICAgIGdyaWQtZ2FwOiA1cHg7XFxyXFxuICAgICAgICB3aWR0aDogMjY1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI2NXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xcclxcbiAgICAubW9kYWxfX3dpbmRvdyB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJhdGluZy13aW5uZXJfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmF0aW5nLXdpbm5lcl9faXRlbSB7XFxyXFxuICAgICAgICB3aWR0aDogOTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2J0biB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogNnB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluX19maWVsZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA0MHB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDQwcHgpO1xcclxcbiAgICAgICAgZ3JpZC1nYXA6IDRweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyMzVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjM1cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDI1MHB4KSB7XFxyXFxuICAgIC5yYXRpbmctd2lubmVyX190aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJhdGluZy13aW5uZXJfX2l0ZW0ge1xcclxcbiAgICAgICAgd2lkdGg6IDg1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDMwcHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMzBweCk7XFxyXFxuICAgICAgICBncmlkLWdhcDogM3B4O1xcclxcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xNixcXHJcXG4gICAgLmZpZWxkX19pdGVtXzMyLFxcclxcbiAgICAuZmllbGRfX2l0ZW1fNjQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xMjgsXFxyXFxuICAgIC5maWVsZF9faXRlbV8yNTYsXFxyXFxuICAgIC5maWVsZF9faXRlbV81MTIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWVsZF9faXRlbV8xMDI0LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fMjA0OCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFD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QUFlO0lBQ25COztJQUVBO1FBQ0ksc0NBQXNDO1FBQ3RDLG1DQUFtQztRQUNuQyxhQUFhO1FBQ2IsWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHNDQUFzQztRQUN0QyxtQ0FBbUM7UUFDbkMsYUFBYTtRQUNiLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7O1FBR0ksZUFBZTtJQUNuQjs7SUFFQTs7O1FBR0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjhlZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjNzc2ZTdiO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9fd2luZG93IHtcXHJcXG4gICAgbWFyZ2luOiAyMCUgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQyZjUyO1xcclxcbiAgICBib3JkZXI6IDJweCAjYjViMmI3IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHdpZHRoOiA1NSU7XFxyXFxuICAgIGNvbG9yOiAjYjViMmI3O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX3RleHQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9fY2xvc2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19jbG9zZTpob3ZlcixcXHJcXG46Zm9jdXMge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9faW5wdXQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWIyYjc7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9faW5wdXRfb2sge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19pbnB1dF9vazpob3ZlcixcXHJcXG46Zm9jdXMge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yYXRpbmctd2lubmVycyB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmF0aW5nLXdpbm5lcnNfX3dpbmRvdyB7XFxyXFxuICAgIG1hcmdpbjogNSUgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJhdGluZy13aW5uZXJfX2lubmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmF0aW5nLXdpbm5lcl9faXRlbSB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViMmI3O1xcclxcbiAgICBjb2xvcjogIzZkMmY1MjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTU4M2JjO1xcclxcbiAgICBjb2xvcjogIzRiMTgzNTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9faW5uZXItMSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19pbm5lci0yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl90ZXh0X3VuZGVybGluZWQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogIzc3NmU3YjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fc2NvcmUsXFxyXFxuLmhlYWRlcl9fYmVzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZhZjhlZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjJiNztcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2J0biB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBjb2xvcjogI2VmZGZkZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3NzA3MDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19idG46aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBjb2xvciAxcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkxM2E2YTtcXHJcXG4gICAgY29sb3I6ICNmYWY4ZWY7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYWRhMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA4MHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgODBweCk7XFxyXFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0NjBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkX19pdGVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkYzFiNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiAjN2U3OTc1O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkX19pdGVtXzIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FhZjljO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW1fNCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmI0Y2Q7XFxyXFxuICAgIGNvbG9yOiAjNzk3NjgxO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW1fOCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGNkYmQ7XFxyXFxuICAgIGNvbG9yOiAjNzk3NjgxO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW1fMTYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNGNkO1xcclxcbiAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgIGNvbG9yOiAjNzA3MjcwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW1fMzIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjNWI0O1xcclxcbiAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgIGNvbG9yOiAjNzA3MjcwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW1fNjQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRjYWNkO1xcclxcbiAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgIGNvbG9yOiAjNzA3MjcwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW1fMTI4IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkYjRiNztcXHJcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICBjb2xvcjogIzZiNzA2YztcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkX19pdGVtXzI1NiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGNkYzI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgY29sb3I6ICM2YjcwNmM7XFxyXFxufVxcclxcblxcclxcbi5maWVsZF9faXRlbV81MTIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZiYzhmO1xcclxcbiAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICAgIGNvbG9yOiAjNmI3MDZjO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRfX2l0ZW1fMTAyNCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZTgwNzA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgY29sb3I6ICNhNGI1YWE7XFxyXFxufVxcclxcblxcclxcbi5maWVsZF9faXRlbV8yMDQ4IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwNDA0MDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBjb2xvcjogI2I0Y2RiZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3ODBweDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX190aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2J0biB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2lubmVyLTIge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluX19maWVsZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA1OHB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDU4cHgpO1xcclxcbiAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZWxkX19pdGVtIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTYsXFxyXFxuICAgIC5maWVsZF9faXRlbV8zMixcXHJcXG4gICAgLmZpZWxkX19pdGVtXzY0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTI4LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fMjU2LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fNTEyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTAyNCxcXHJcXG4gICAgLmZpZWxkX19pdGVtXzIwNDgge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19pbm5lci0yIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDY1cHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNjVweCk7XFxyXFxuICAgICAgICB3aWR0aDogMzkwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM5MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTJweCA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAwIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZWxkX19pdGVtIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTYsXFxyXFxuICAgIC5maWVsZF9faXRlbV8zMixcXHJcXG4gICAgLmZpZWxkX19pdGVtXzY0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTI4LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fMjU2LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fNTEyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTAyNCxcXHJcXG4gICAgLmZpZWxkX19pdGVtXzIwNDgge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCkge1xcclxcbiAgICAubW9kYWxfX3dpbmRvdyB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX190aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9faW5uZXItMiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAgIC5tYWluX19maWVsZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA1MHB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDUwcHgpO1xcclxcbiAgICAgICAgd2lkdGg6IDMwNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDZweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTVweCAwIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZWxkX19pdGVtIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTYsXFxyXFxuICAgIC5maWVsZF9faXRlbV8zMixcXHJcXG4gICAgLmZpZWxkX19pdGVtXzY0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTI4LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fMjU2LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fNTEyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTAyNCxcXHJcXG4gICAgLmZpZWxkX19pdGVtXzIwNDgge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2J0biB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2lubmVyLTIge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19zY29yZSxcXHJcXG4gICAgLmhlYWRlcl9fYmVzdCB7XFxyXFxuICAgICAgICB3aWR0aDogODBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX190aXRsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fYnRuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19pbm5lci0yIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9faW5uZXItMSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJfX3Njb3JlLFxcclxcbiAgICAuaGVhZGVyX19iZXN0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnRuX3RleHRfdW5kZXJsaW5lZCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxyXFxuICAgIC5yYXRpbmctd2lubmVyX19pdGVtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fc2NvcmUsXFxyXFxuICAgIC5oZWFkZXJfX2Jlc3Qge1xcclxcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ0bl90ZXh0X3VuZGVybGluZWQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluX19maWVsZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA1MHB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDUwcHgpO1xcclxcbiAgICAgICAgZ3JpZC1nYXA6IDZweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyOTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjkwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDBweCAwcHggMTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMzQwcHgpIHtcXHJcXG4gICAgLm1haW5fX2ZpZWxkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDQ1cHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNDVweCk7XFxyXFxuICAgICAgICBncmlkLWdhcDogNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI2NXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNjVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcXHJcXG4gICAgLm1vZGFsX193aW5kb3cge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yYXRpbmctd2lubmVyX190aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJhdGluZy13aW5uZXJfX2l0ZW0ge1xcclxcbiAgICAgICAgd2lkdGg6IDkwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyX19idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDZweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbl9fZmllbGQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgNDBweCk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA0MHB4KTtcXHJcXG4gICAgICAgIGdyaWQtZ2FwOiA0cHg7XFxyXFxuICAgICAgICB3aWR0aDogMjM1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIzNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAyNTBweCkge1xcclxcbiAgICAucmF0aW5nLXdpbm5lcl9fdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yYXRpbmctd2lubmVyX19pdGVtIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4NXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluX19maWVsZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAzMHB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDMwcHgpO1xcclxcbiAgICAgICAgZ3JpZC1nYXA6IDNweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZWxkX19pdGVtIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTYsXFxyXFxuICAgIC5maWVsZF9faXRlbV8zMixcXHJcXG4gICAgLmZpZWxkX19pdGVtXzY0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTI4LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fMjU2LFxcclxcbiAgICAuZmllbGRfX2l0ZW1fNTEyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmllbGRfX2l0ZW1fMTAyNCxcXHJcXG4gICAgLmZpZWxkX19pdGVtXzIwNDgge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcclxuaW1wb3J0IHsgc3dpcGUgfSBmcm9tICcuL3N3aXBlJ1xyXG5jb25zdCBnYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZV9maWVsZCcpXHJcbmNvbnN0IGdhbWVTaXplID0gNVxyXG5jb25zdCBlbGVtZW50cyA9IFtdXHJcbmNvbnN0IHNjb3JlSFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZV9maWVsZCcpXHJcbmNvbnN0IGJlc3RIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jlc3RfZmllbGQnKVxyXG5jb25zdCB3aW5uZXJzUmF0aW5nTW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF0aW5nX3dpbm5lcnNfbW9kYWxfd2luZG93JylcclxuY29uc3QgaG93VG9QbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvd190b19wbGF5JylcclxuY29uc3QgaG93VG9QbGF5Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG93X3RvX3BsYXlfY2xvc2UnKVxyXG5jb25zdCB3aW5uZXJXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyJylcclxuY29uc3Qgd2lubmVyV2luZG93Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyX2Nsb3NlJylcclxuY29uc3QgZ2FtZU92ZXJXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZV9vdmVyJylcclxubGV0IHNjb3JlID0gMFxyXG5sZXQgYmVzdCA9IDBcclxubGV0IGlzR2FtZVN0YXJ0ZWQgPSBmYWxzZVxyXG5sZXQgc3RhcnRUaW1lXHJcbmxldCBmaW5pc2hUaW1lXHJcbmxldCBzb21ldGhpbmdDaGFuZ2VkID0gZmFsc2VcclxuXHJcbmlmIChOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jlc3RTY29yZScpKSA+IDApIHtcclxuICAgIGJlc3QgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jlc3RTY29yZScpKVxyXG59XHJcbnNjb3JlSFRNTC5pbm5lckhUTUwgPSBzY29yZVxyXG5iZXN0SFRNTC5pbm5lckhUTUwgPSBiZXN0XHJcblxyXG5mdW5jdGlvbiBhZGRFbGVtZW50KCkge1xyXG5cclxuICAgIGNvbnN0IG5ld0ZpZWxkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuZXdGaWVsZEl0ZW0uY2xhc3NOYW1lID0gJ2ZpZWxkX19pdGVtJ1xyXG4gICAgbmV3RmllbGRJdGVtLmlubmVySFRNTCA9ICcnXHJcblxyXG4gICAgZ2FtZUZpZWxkLmFwcGVuZENoaWxkKG5ld0ZpZWxkSXRlbSlcclxuXHJcbiAgICByZXR1cm4gbmV3RmllbGRJdGVtXHJcbn1cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZVNpemU7IGkrKykge1xyXG4gICAgZWxlbWVudHNbaV0gPSBbXVxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lU2l6ZTsgaisrKSB7XHJcbiAgICAgICAgZWxlbWVudHNbaV1bal0gPSBhZGRFbGVtZW50KClcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbW92ZUFsbChldmVudC5jb2RlKVxyXG5cclxufSlcclxuXHJcbmZ1bmN0aW9uIG1vdmVBbGwoZGlyZWN0aW9uKSB7XHJcbiAgICBzb21ldGhpbmdDaGFuZ2VkID0gZmFsc2VcclxuICAgIGlmIChpc0dhbWVTdGFydGVkKSB7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgIG1vdmVVcCgpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIG1vdmVEb3duKClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgICAgICAgICBtb3ZlTGVmdCgpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzb21ldGhpbmdDaGFuZ2VkKSB7IHNldFRpbWVvdXQoZ2VuZXJhdGVOZXdJdGVtLCAyMDApIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVOZXdJdGVtKCkge1xyXG5cclxuICAgIGxldCBjb3VudCA9IDBcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVTaXplOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVTaXplOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdldChpLCBqKSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBydW5kb21Qb3NpdGlvbiA9IGdldFJhbmRvbUludCgwLCBjb3VudClcclxuICAgIGNvbnN0IHJ1bmRvbU51bWIgPSBnZXRSYW5kb21JbnQoMCwgMTApXHJcbiAgICBjb25zdCBydW5kb21JdGVtSW5uZXIgPSBydW5kb21OdW1iID09IDAgPyA0IDogMlxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZVNpemU7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZVNpemU7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZ2V0KGksIGopID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVuZG9tUG9zaXRpb24gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChpLCBqLCBydW5kb21JdGVtSW5uZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5kb21Qb3NpdGlvbi0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pXHJcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heClcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZShnZXQsIHNldCkge1xyXG4gICAgaWYgKGlzR2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1vdmVGcm9tSW5kZXggPSAxXHJcbiAgICAgICAgICAgIGxldCBtb3ZlVG9JbmRleCA9IDBcclxuICAgICAgICAgICAgd2hpbGUgKG1vdmVGcm9tSW5kZXggPCBnYW1lU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmVGcm9tSW5kZXggPD0gbW92ZVRvSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlRnJvbUluZGV4ID0gbW92ZVRvSW5kZXggKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0KGksIG1vdmVUb0luZGV4KSAhPSAnJyAmJiBnZXQoaSwgbW92ZVRvSW5kZXgpID09IGdldChpLCBtb3ZlRnJvbUluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChpLCBtb3ZlVG9JbmRleCwgZ2V0KGksIG1vdmVUb0luZGV4KSAqIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KGksIG1vdmVGcm9tSW5kZXgsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlICs9IE51bWJlcihnZXQoaSwgbW92ZVRvSW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlSFRNTC5pbm5lckhUTUwgPSBzY29yZVxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVGcm9tSW5kZXgrK1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb0luZGV4KytcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGdldChpLCBtb3ZlVG9JbmRleCkgPT0gJycgJiYgZ2V0KGksIG1vdmVGcm9tSW5kZXgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KGksIG1vdmVUb0luZGV4LCBnZXQoaSwgbW92ZUZyb21JbmRleCkpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KGksIG1vdmVGcm9tSW5kZXgsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVGcm9tSW5kZXgrK1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0KGksIG1vdmVUb0luZGV4KSAhPSAnJyAmJiBnZXQoaSwgbW92ZUZyb21JbmRleCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlVG9JbmRleCsrXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1vdmVGcm9tSW5kZXgrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lT3ZlcigpKSB7XHJcbiAgICAgICAgICAgIGdhbWVPdmVyV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIGJlc3RSZXNTY29yZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aW4oKSkge1xyXG4gICAgICAgICAgICBpc0dhbWVTdGFydGVkID0gZmFsc2VcclxuICAgICAgICAgICAgZmluaXNoVGltZSA9IERhdGUubm93KClcclxuICAgICAgICAgICAgd2lubmVyV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXJfbmFtZV9zZW5kJykub25jbGljayA9IGlzV2lubmVyXHJcbiAgICAgICAgICAgIGJlc3RSZXNTY29yZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlTGVmdCgpIHtcclxuICAgIG1vdmUoZ2V0TGVmdCwgc2V0TGVmdClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGVmdChpLCBqKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudHNbaV1bal0uaW5uZXJIVE1MXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExlZnQoaSwgaiwgdmFsdWUpIHtcclxuICAgIHNldChpLCBqLCB2YWx1ZSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vdmVSaWdodCgpIHtcclxuICAgIG1vdmUoZ2V0UmlnaHQsIHNldFJpZ2h0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSaWdodChpLCBqKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudHNbaV1bZ2FtZVNpemUgLSBqIC0gMV0uaW5uZXJIVE1MXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJpZ2h0KGksIGosIHZhbHVlKSB7XHJcbiAgICBzZXQoaSwgZ2FtZVNpemUgLSBqIC0gMSwgdmFsdWUpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtb3ZlVXAoKSB7XHJcbiAgICBtb3ZlKGdldFVwLCBzZXRVcClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXAoaSwgaikge1xyXG4gICAgcmV0dXJuIGVsZW1lbnRzW2pdW2ldLmlubmVySFRNTFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVcChpLCBqLCB2YWx1ZSkge1xyXG4gICAgc2V0KGosIGksIHZhbHVlKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbW92ZURvd24oKSB7XHJcbiAgICBtb3ZlKGdldERvd24sIHNldERvd24pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERvd24oaSwgaikge1xyXG4gICAgcmV0dXJuIGVsZW1lbnRzW2dhbWVTaXplIC0gaiAtIDFdW2ldLmlubmVySFRNTFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb3duKGksIGosIHZhbHVlKSB7XHJcbiAgICBzZXQoZ2FtZVNpemUgLSBqIC0gMSwgaSwgdmFsdWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldChpLCBqLCB2YWx1ZSkge1xyXG4gICAgcmVtb3ZlQ2xhc3NGaWVsZEl0ZW0oaSwgailcclxuICAgIGVsZW1lbnRzW2ldW2pdLmlubmVySFRNTCA9IHZhbHVlXHJcbiAgICBhZGRDbGFzc0ZpZWxkSXRlbShpLCBqLCB2YWx1ZSkgIFxyXG4gICAgc29tZXRoaW5nQ2hhbmdlZCA9IHRydWVcclxuICAgIHJldHVybiBlbGVtZW50c1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoaSwgaikge1xyXG4gICAgcmV0dXJuIGVsZW1lbnRzW2ldW2pdLmlubmVySFRNTFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDbGFzc0ZpZWxkSXRlbShpLCBqKSB7XHJcbiAgICBsZXQgaXRlbVZhbHVlID0gZ2V0KGksIGopXHJcbiAgICBlbGVtZW50c1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdmaWVsZF9faXRlbV8nICsgaXRlbVZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbGFzc0ZpZWxkSXRlbShpLCBqLCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudHNbaV1bal0uY2xhc3NMaXN0LmFkZCgnZmllbGRfX2l0ZW1fJyArIHZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdHYW1lRmllbGQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVTaXplOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVTaXplOyBqKyspIHtcclxuICAgICAgICAgICAgc2V0KGksIGosICcnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdlbmVyYXRlTmV3SXRlbSgpXHJcbiAgICBnZW5lcmF0ZU5ld0l0ZW0oKVxyXG4gICAgc2NvcmVIVE1MLmlubmVySFRNTCA9IDBcclxuICAgIGlzR2FtZVN0YXJ0ZWQgPSB0cnVlXHJcbiAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lU2l6ZTsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnZXQoaSwgaikgPT0gJycpIHsgcmV0dXJuIGZhbHNlIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVTaXplOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IGdhbWVTaXplIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnZXQoaSwgaikgPT0gZ2V0KGksIGogKyAxKSB8fCBnZXQoaSwgaikgPT0gZ2V0KGksIGogLSAxKSkgeyByZXR1cm4gZmFsc2UgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZ2FtZVNpemUgLSAxOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVTaXplOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdldChpLCBqKSA9PSBnZXQoaSArIDEsIGopIHx8IGdldChpLCBqKSA9PSBnZXQoaSAtIDEsIGopKSB7IHJldHVybiBmYWxzZSB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNHYW1lU3RhcnRlZCA9IGZhbHNlXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiB3aW4oKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVTaXplOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVTaXplOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdldChpLCBqKSA9PSAyMDQ4KSB7IHJldHVybiB0cnVlIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlc3RSZXNTY29yZSgpIHtcclxuICAgIGlmIChiZXN0IDwgc2NvcmUpIHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jlc3RTY29yZScsIHNjb3JlKSB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzV2lubmVyKCkge1xyXG4gICAgY29uc3Qgb2JqZWN0V2lubmVyID0geyBuYW1lOiAnJywgdGltZTogMCB9XHJcbiAgICBvYmplY3RXaW5uZXIubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXJfaW5wdXRfbmFtZScpLnZhbHVlXHJcbiAgICBsZXQgdGltZVdpbiA9IGZpbmlzaFRpbWUgLSBzdGFydFRpbWVcclxuICAgIG9iamVjdFdpbm5lci50aW1lID0gKHRpbWVXaW4gLyA2MDAwMCkudG9GaXhlZCgyKVxyXG4gICAgbGV0IGFycmF5V2lubmVycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycmF5V2lubmVycycpKVxyXG4gICAgaWYgKGFycmF5V2lubmVycyA9PSBudWxsKSB7IGFycmF5V2lubmVycyA9IFtdIH1cclxuICAgIGFycmF5V2lubmVycy5wdXNoKG9iamVjdFdpbm5lcilcclxuICAgIGFycmF5V2lubmVycy5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlXaW5uZXJzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlXaW5uZXJzKSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkV2lubmVySW5SYXRpbmcoKSB7XHJcblxyXG4gICAgbGV0IGFycmF5V2lubmVycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycmF5V2lubmVycycpKVxyXG4gICAgaWYgKGFycmF5V2lubmVycyA9PSBudWxsKSB7IGFycmF5V2lubmVycyA9IFtdIH1cclxuICAgIGFycmF5V2lubmVycy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1dpbm5lclJhdGluZ0lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBuZXdXaW5uZXJSYXRpbmdJbm5lci5jbGFzc05hbWUgPSAncmF0aW5nLXdpbm5lcl9faW5uZXInXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGluZ193aW5uZXJzX3dpbmRvdycpLmFwcGVuZENoaWxkKG5ld1dpbm5lclJhdGluZ0lubmVyKVxyXG4gICAgICAgIGxldCBuZXdXaW5uZXJSYXRpbmdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBuZXdXaW5uZXJSYXRpbmdJdGVtLmNsYXNzTmFtZSA9ICdyYXRpbmctd2lubmVyX19pdGVtIG5hbWUnXHJcbiAgICAgICAgbmV3V2lubmVyUmF0aW5nSXRlbS5pbm5lckhUTUwgPSBlLm5hbWVcclxuICAgICAgICBuZXdXaW5uZXJSYXRpbmdJbm5lci5hcHBlbmRDaGlsZChuZXdXaW5uZXJSYXRpbmdJdGVtKVxyXG4gICAgICAgIG5ld1dpbm5lclJhdGluZ0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG5ld1dpbm5lclJhdGluZ0l0ZW0uY2xhc3NOYW1lID0gJ3JhdGluZy13aW5uZXJfX2l0ZW0gdGltZSdcclxuICAgICAgICBuZXdXaW5uZXJSYXRpbmdJdGVtLmlubmVySFRNTCA9IGUudGltZVxyXG4gICAgICAgIG5ld1dpbm5lclJhdGluZ0lubmVyLmFwcGVuZENoaWxkKG5ld1dpbm5lclJhdGluZ0l0ZW0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3X2dhbWUnKS5vbmNsaWNrID0gbmV3R2FtZUZpZWxkXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lX3J1bGVzJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGhvd1RvUGxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59XHJcbmhvd1RvUGxheUNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBob3dUb1BsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lX292ZXJfY2xvc2UnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZ2FtZU92ZXJXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXJzX3JhdGluZ19idG4nKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgYWRkV2lubmVySW5SYXRpbmcoKVxyXG4gICAgd2lubmVyc1JhdGluZ01vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn1cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGluZ193aW5uZXJzX2Nsb3NlJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbm5lcnNSYXRpbmdNb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn1cclxud2lubmVyV2luZG93Q2xvc2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbm5lcldpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn1cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT0gaG93VG9QbGF5KSB7XHJcbiAgICAgICAgaG93VG9QbGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHdpbm5lcldpbmRvdykge1xyXG4gICAgICAgIHdpbm5lcldpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBnYW1lT3ZlcldpbmRvdykge1xyXG4gICAgICAgIGdhbWVPdmVyV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHdpbm5lcnNSYXRpbmdNb2RhbFdpbmRvdykge1xyXG4gICAgICAgIHdpbm5lcnNSYXRpbmdNb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbn1cclxuXHJcbnN3aXBlKGdhbWVGaWVsZCwgeyBtYXhUaW1lOiAxMDAwLCBtaW5UaW1lOiA2MCwgbWF4RGlzdDogMjUwLCBtaW5EaXN0OiA0MCB9LCBtb3ZlQWxsKVxyXG5cclxuZ2FtZUZpZWxkLm9ubW91c2Vkb3duID0gZ2FtZUZpZWxkLm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJzd2lwZSIsImVsIiwic2V0dGluZ3MiLCJtb3ZlQWxsIiwic2V0dCIsIk9iamVjdCIsImFzc2lnbiIsIm1pbkRpc3QiLCJtYXhEaXN0IiwibWF4VGltZSIsIm1pblRpbWUiLCJkaXIiLCJzd2lwZVR5cGUiLCJkaXN0IiwiaXNNb3VzZSIsImlzTW91c2VEb3duIiwic3RhcnRYIiwiZGlzdFgiLCJzdGFydFkiLCJkaXN0WSIsInN0YXJ0VGltZSIsInN1cHBvcnQiLCJwb2ludGVyIiwid2luZG93IiwibmF2aWdhdG9yIiwidG91Y2giLCJvcmllbnRhdGlvbiIsInRlc3QiLCJ1c2VyQWdlbnQiLCJtc01heFRvdWNoUG9pbnRzIiwiZ2V0U3VwcG9ydGVkRXZlbnRzIiwiZXZlbnRzIiwidHlwZSIsInN0YXJ0IiwibW92ZSIsImVuZCIsImNhbmNlbCIsImxlYXZlIiwiaWUxMCIsIm1zUG9pbnRlckVuYWJsZWQiLCJGdW5jdGlvbiIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJldmVudHNVbmlmeSIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsImNoZWNrU3RhcnQiLCJldmVudCIsInRvdWNoZXMiLCJsZW5ndGgiLCJwYWdlWCIsInBhZ2VZIiwiRGF0ZSIsImdldFRpbWUiLCJjaGVja01vdmUiLCJNYXRoIiwiYWJzIiwiY2hlY2tFbmQiLCJlbmRUaW1lIiwidGltZSIsInN3aXBlRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwiZnVsbCIsImRpc3BhdGNoRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZUZpZWxkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVTaXplIiwiZWxlbWVudHMiLCJzY29yZUhUTUwiLCJiZXN0SFRNTCIsIndpbm5lcnNSYXRpbmdNb2RhbFdpbmRvdyIsImhvd1RvUGxheSIsImhvd1RvUGxheUNsb3NlIiwid2lubmVyV2luZG93Iiwid2lubmVyV2luZG93Q2xvc2UiLCJnYW1lT3ZlcldpbmRvdyIsInNjb3JlIiwiYmVzdCIsImlzR2FtZVN0YXJ0ZWQiLCJmaW5pc2hUaW1lIiwic29tZXRoaW5nQ2hhbmdlZCIsIk51bWJlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbm5lckhUTUwiLCJhZGRFbGVtZW50IiwibmV3RmllbGRJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiaSIsImoiLCJjb2RlIiwiZGlyZWN0aW9uIiwibW92ZVVwIiwibW92ZURvd24iLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNldFRpbWVvdXQiLCJnZW5lcmF0ZU5ld0l0ZW0iLCJjb3VudCIsImdldCIsInJ1bmRvbVBvc2l0aW9uIiwiZ2V0UmFuZG9tSW50IiwicnVuZG9tTnVtYiIsInJ1bmRvbUl0ZW1Jbm5lciIsInNldCIsIm1pbiIsIm1heCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsIm1vdmVGcm9tSW5kZXgiLCJtb3ZlVG9JbmRleCIsImdhbWVPdmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYmVzdFJlc1Njb3JlIiwid2luIiwibm93Iiwib25jbGljayIsImlzV2lubmVyIiwiZ2V0TGVmdCIsInNldExlZnQiLCJnZXRSaWdodCIsInNldFJpZ2h0IiwiZ2V0VXAiLCJzZXRVcCIsImdldERvd24iLCJzZXREb3duIiwicmVtb3ZlQ2xhc3NGaWVsZEl0ZW0iLCJhZGRDbGFzc0ZpZWxkSXRlbSIsIml0ZW1WYWx1ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm5ld0dhbWVGaWVsZCIsInNldEl0ZW0iLCJvYmplY3RXaW5uZXIiLCJuYW1lIiwidGltZVdpbiIsInRvRml4ZWQiLCJhcnJheVdpbm5lcnMiLCJKU09OIiwicGFyc2UiLCJwdXNoIiwic29ydCIsImEiLCJiIiwic3RyaW5naWZ5IiwiYWRkV2lubmVySW5SYXRpbmciLCJmb3JFYWNoIiwibmV3V2lubmVyUmF0aW5nSW5uZXIiLCJuZXdXaW5uZXJSYXRpbmdJdGVtIiwidGFyZ2V0Iiwib25tb3VzZWRvd24iLCJvbnNlbGVjdHN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==