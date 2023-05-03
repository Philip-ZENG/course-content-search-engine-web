"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/searchResults",{

/***/ "./component/searchResultCard.js":
/*!***************************************!*\
  !*** ./component/searchResultCard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/** \r\n * @description:\r\n * * This is the search result card, which is used in the search results page\r\n*/ \n\n\n\n\n\nconst GET_SECTION_INFO_URL = \"http://localhost:4000/getSectionInfo\";\nconst GET_MATCHED_SENTENCES_URL = \"http://localhost:4000/getMatchedSentences\";\nclass SearchResultCard extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    // Get section info from server\n    componentDidMount() {\n        this.getSectionInfo();\n        this.getMatchedSentences();\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card, {\n            centered: true,\n            fluid: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Header, {\n                            children: [\n                                \"Section \",\n                                this.state.sectionID\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        margin: \"10px 0px 10px 0px\"\n                                    },\n                                    children: \"Pages: \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, this),\n                                this.state.sectionPages.map((page, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            page,\n                                            \", \"\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                    extra: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Description, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Matched Sentence: \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this),\n                            this.state.matchedSentences\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                    extra: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Tags:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, this),\n                        this.state.sectionTags.map((tag, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    tag.tagName,\n                                    \", \"\n                                ]\n                            }, index, true, {\n                                fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                                lineNumber: 130,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                    extra: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: this.viewSectionContent,\n                        children: \"View Section Content\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n                    lineNumber: 134,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\eie3280_web\\\\component\\\\searchResultCard.js\",\n            lineNumber: 107,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            sectionID: this.props.sectionID,\n            matchedString: this.props.matchedString,\n            sectionTags: [],\n            sectionPages: [],\n            matchedSentences: []\n        };\n        /**\r\n   * @description:\r\n   * * Get section info from server\r\n   * * * sectionTags\r\n   * * * sectionPages\r\n   * * * matchedSentence: sentence that contains the search key word (similar to google search)\r\n   * @serverFilePath\r\n   * * server\\searchServer.js\r\n   * @serverPort\r\n   * * http://localhost:4000/getSectionInfo\r\n   * @dataSendToServer\r\n   * * sectionID: number\r\n   * @dataGetFromServer\r\n   * * sectionInfo: {sectionTags: [], sectionPages: []}\r\n   */ this.getSectionInfo = ()=>{\n            const that = this;\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(GET_SECTION_INFO_URL, {\n                sectionID: that.state.sectionID\n            }).then(function(response) {\n                console.log(response.data);\n                that.setState({\n                    sectionTags: response.data.sectionTags,\n                    sectionPages: response.data.sectionPages\n                });\n            }).catch(function(error) {\n                console.log(error);\n            });\n        };\n        /**\r\n   * @description:\r\n   * * Retrieve matched sentences from database\r\n   * @serverFilePath\r\n   * * server\\searchServer.js\r\n   * @serverPort\r\n   * * http://localhost:4000/getMatchedSentences\r\n   * @dataSendToServer\r\n   * * sectionID: number\r\n   * * matchedString: String\r\n   * @dataGetFromServer\r\n   * * matchedSentences: [string]\r\n   */ this.getMatchedSentences = ()=>{\n            const that = this;\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(GET_MATCHED_SENTENCES_URL, {\n                sectionID: that.state.sectionID,\n                matchedString: that.state.matchedString\n            }).then(function(response) {\n                console.log(response.data);\n                if (response.data.matchedSentences.length > 0) {\n                    that.setState({\n                        matchedSentences: response.data.matchedSentences\n                    });\n                } else {\n                    that.setState({\n                        matchedSentences: [\n                            \"No matched sentences\"\n                        ]\n                    });\n                }\n            }).catch(function(error) {\n                console.log(error);\n            });\n        };\n        /**\r\n   * @description:\r\n   * * Route to section content page and display the screenshot of the pages in the section\r\n   */ this.viewSectionContent = ()=>{\n            // Pass data to section content page and redirect to it\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push({\n                pathname: \"/sectionContent\",\n                query: {\n                    sectionID: this.state.sectionID,\n                    sectionPages: this.state.sectionPages\n                }\n            });\n        };\n    }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResultCard);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDRixTQUFTRyxJQUFJO2dCQUN6QixJQUFHSCxTQUFTRyxJQUFJLENBQUNmLGdCQUFnQixDQUFDbUIsTUFBTSxHQUFHLEdBQUc7b0JBQzVDVixLQUFLTyxRQUFRLENBQUM7d0JBQUNoQixrQkFBa0JZLFNBQVNHLElBQUksQ0FBQ2YsZ0JBQWdCO29CQUFBO2dCQUNqRSxPQUFPO29CQUNMUyxLQUFLTyxRQUFRLENBQUM7d0JBQUNoQixrQkFBa0I7NEJBQUM7eUJBQXVCO29CQUFBO2dCQUMzRCxDQUFDO1lBQ0gsR0FDQ2lCLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7Z0JBQ3RCTCxRQUFRQyxHQUFHLENBQUNJO1lBQ2Q7UUFDSjtRQUVBOzs7R0FHQyxRQUNEWixxQkFBcUIsSUFBTTtZQUN6Qix1REFBdUQ7WUFDdkQvQix1REFBVyxDQUFDO2dCQUNWOEMsVUFBVTtnQkFDVkMsT0FBTztvQkFBRWxDLFdBQVcsSUFBSSxDQUFDRCxLQUFLLENBQUNDLFNBQVM7b0JBQUVLLGNBQWMsSUFBSSxDQUFDTixLQUFLLENBQUNNLFlBQVk7Z0JBQUM7WUFDbEY7UUFDRjs7QUF1Q0Y7O0FBRUEsK0RBQWVmLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvc2VhcmNoUmVzdWx0Q2FyZC5qcz9mYmQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBcclxuICogQGRlc2NyaXB0aW9uOlxyXG4gKiAqIFRoaXMgaXMgdGhlIHNlYXJjaCByZXN1bHQgY2FyZCwgd2hpY2ggaXMgdXNlZCBpbiB0aGUgc2VhcmNoIHJlc3VsdHMgcGFnZVxyXG4qL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEdFVF9TRUNUSU9OX0lORk9fVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9nZXRTZWN0aW9uSW5mbyc7XHJcbmNvbnN0IEdFVF9NQVRDSEVEX1NFTlRFTkNFU19VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dldE1hdGNoZWRTZW50ZW5jZXMnO1xyXG5cclxuY2xhc3MgU2VhcmNoUmVzdWx0Q2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZWN0aW9uSUQ6IHRoaXMucHJvcHMuc2VjdGlvbklELFxyXG4gICAgbWF0Y2hlZFN0cmluZzogdGhpcy5wcm9wcy5tYXRjaGVkU3RyaW5nLFxyXG4gICAgc2VjdGlvblRhZ3M6IFtdLFxyXG4gICAgc2VjdGlvblBhZ2VzOiBbXSxcclxuICAgIG1hdGNoZWRTZW50ZW5jZXM6IFtdXHJcbiAgfTtcclxuXHJcbiAgLy8gR2V0IHNlY3Rpb24gaW5mbyBmcm9tIHNlcnZlclxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRTZWN0aW9uSW5mbygpO1xyXG4gICAgdGhpcy5nZXRNYXRjaGVkU2VudGVuY2VzKCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uOlxyXG4gICAqICogR2V0IHNlY3Rpb24gaW5mbyBmcm9tIHNlcnZlclxyXG4gICAqICogKiBzZWN0aW9uVGFnc1xyXG4gICAqICogKiBzZWN0aW9uUGFnZXNcclxuICAgKiAqICogbWF0Y2hlZFNlbnRlbmNlOiBzZW50ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBzZWFyY2gga2V5IHdvcmQgKHNpbWlsYXIgdG8gZ29vZ2xlIHNlYXJjaClcclxuICAgKiBAc2VydmVyRmlsZVBhdGhcclxuICAgKiAqIHNlcnZlclxcc2VhcmNoU2VydmVyLmpzXHJcbiAgICogQHNlcnZlclBvcnRcclxuICAgKiAqIGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9nZXRTZWN0aW9uSW5mb1xyXG4gICAqIEBkYXRhU2VuZFRvU2VydmVyXHJcbiAgICogKiBzZWN0aW9uSUQ6IG51bWJlclxyXG4gICAqIEBkYXRhR2V0RnJvbVNlcnZlclxyXG4gICAqICogc2VjdGlvbkluZm86IHtzZWN0aW9uVGFnczogW10sIHNlY3Rpb25QYWdlczogW119XHJcbiAgICovXHJcbiAgZ2V0U2VjdGlvbkluZm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KEdFVF9TRUNUSU9OX0lORk9fVVJMLCB7XHJcbiAgICAgICAgc2VjdGlvbklEOiB0aGF0LnN0YXRlLnNlY3Rpb25JRFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGF0LnNldFN0YXRlKHtzZWN0aW9uVGFnczogcmVzcG9uc2UuZGF0YS5zZWN0aW9uVGFncywgc2VjdGlvblBhZ2VzOiByZXNwb25zZS5kYXRhLnNlY3Rpb25QYWdlc30pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb246XHJcbiAgICogKiBSZXRyaWV2ZSBtYXRjaGVkIHNlbnRlbmNlcyBmcm9tIGRhdGFiYXNlXHJcbiAgICogQHNlcnZlckZpbGVQYXRoXHJcbiAgICogKiBzZXJ2ZXJcXHNlYXJjaFNlcnZlci5qc1xyXG4gICAqIEBzZXJ2ZXJQb3J0XHJcbiAgICogKiBodHRwOi8vbG9jYWxob3N0OjQwMDAvZ2V0TWF0Y2hlZFNlbnRlbmNlc1xyXG4gICAqIEBkYXRhU2VuZFRvU2VydmVyXHJcbiAgICogKiBzZWN0aW9uSUQ6IG51bWJlclxyXG4gICAqICogbWF0Y2hlZFN0cmluZzogU3RyaW5nXHJcbiAgICogQGRhdGFHZXRGcm9tU2VydmVyXHJcbiAgICogKiBtYXRjaGVkU2VudGVuY2VzOiBbc3RyaW5nXVxyXG4gICAqL1xyXG4gIGdldE1hdGNoZWRTZW50ZW5jZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KEdFVF9NQVRDSEVEX1NFTlRFTkNFU19VUkwsIHtcclxuICAgICAgICBzZWN0aW9uSUQ6IHRoYXQuc3RhdGUuc2VjdGlvbklELFxyXG4gICAgICAgIG1hdGNoZWRTdHJpbmc6IHRoYXQuc3RhdGUubWF0Y2hlZFN0cmluZ1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhLm1hdGNoZWRTZW50ZW5jZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7bWF0Y2hlZFNlbnRlbmNlczogcmVzcG9uc2UuZGF0YS5tYXRjaGVkU2VudGVuY2VzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe21hdGNoZWRTZW50ZW5jZXM6IFsnTm8gbWF0Y2hlZCBzZW50ZW5jZXMnXX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uOlxyXG4gICAqICogUm91dGUgdG8gc2VjdGlvbiBjb250ZW50IHBhZ2UgYW5kIGRpc3BsYXkgdGhlIHNjcmVlbnNob3Qgb2YgdGhlIHBhZ2VzIGluIHRoZSBzZWN0aW9uXHJcbiAgICovXHJcbiAgdmlld1NlY3Rpb25Db250ZW50ID0gKCkgPT4ge1xyXG4gICAgLy8gUGFzcyBkYXRhIHRvIHNlY3Rpb24gY29udGVudCBwYWdlIGFuZCByZWRpcmVjdCB0byBpdFxyXG4gICAgUm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogJy9zZWN0aW9uQ29udGVudCcsXHJcbiAgICAgIHF1ZXJ5OiB7IHNlY3Rpb25JRDogdGhpcy5zdGF0ZS5zZWN0aW9uSUQsIHNlY3Rpb25QYWdlczogdGhpcy5zdGF0ZS5zZWN0aW9uUGFnZXMgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8Q2FyZCBjZW50ZXJlZCBmbHVpZD5cclxuICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgPENhcmQuSGVhZGVyPlNlY3Rpb24ge3RoaXMuc3RhdGUuc2VjdGlvbklEfTwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZC5NZXRhPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbjogXCIxMHB4IDBweCAxMHB4IDBweFwifX0+UGFnZXM6IDwvcD5cclxuICAgICAgICAgICAgey8qIExpc3QgZWxlbWVudHMgaW4gc3RhdGUuc2VjdGlvblBhZ2VzICovfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWN0aW9uUGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PntwYWdlfSwgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9DYXJkLk1ldGE+XHJcbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8cD5NYXRjaGVkIFNlbnRlbmNlOiA8L3A+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1hdGNoZWRTZW50ZW5jZXN9XHJcbiAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgIDxwPlRhZ3M6PC9wPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc2VjdGlvblRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e3RhZy50YWdOYW1lfSwgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy52aWV3U2VjdGlvbkNvbnRlbnR9PlxyXG4gICAgICAgICAgICBWaWV3IFNlY3Rpb24gQ29udGVudFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsImF4aW9zIiwiUm91dGVyIiwiR0VUX1NFQ1RJT05fSU5GT19VUkwiLCJHRVRfTUFUQ0hFRF9TRU5URU5DRVNfVVJMIiwiU2VhcmNoUmVzdWx0Q2FyZCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0U2VjdGlvbkluZm8iLCJnZXRNYXRjaGVkU2VudGVuY2VzIiwicmVuZGVyIiwiY2VudGVyZWQiLCJmbHVpZCIsIkNvbnRlbnQiLCJIZWFkZXIiLCJzdGF0ZSIsInNlY3Rpb25JRCIsIk1ldGEiLCJwIiwic3R5bGUiLCJtYXJnaW4iLCJzZWN0aW9uUGFnZXMiLCJtYXAiLCJwYWdlIiwiaW5kZXgiLCJzcGFuIiwiZXh0cmEiLCJEZXNjcmlwdGlvbiIsIm1hdGNoZWRTZW50ZW5jZXMiLCJzZWN0aW9uVGFncyIsInRhZyIsInRhZ05hbWUiLCJhIiwib25DbGljayIsInZpZXdTZWN0aW9uQ29udGVudCIsInByb3BzIiwibWF0Y2hlZFN0cmluZyIsInRoYXQiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzZXRTdGF0ZSIsImNhdGNoIiwiZXJyb3IiLCJsZW5ndGgiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/searchResultCard.js\n"));

/***/ })

});