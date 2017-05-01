"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//3rd party librairies imports
var core_1 = require("@angular/core");
// pxs imports
var techniques_component_1 = require("./techniques.component");
var techniques_router_1 = require("./techniques.router");
var index_1 = require("./list/index");
var index_2 = require("./detail/index");
var TechniquesModule = (function () {
    function TechniquesModule() {
    }
    return TechniquesModule;
}());
TechniquesModule = __decorate([
    core_1.NgModule({
        imports: [
            techniques_router_1.default
        ],
        declarations: [
            index_1.ListComponent,
            index_2.DetailComponent,
            index_1.OilComponent,
            index_1.WatercolorComponent,
            techniques_component_1.TechniquesComponent
        ],
        exports: [
            techniques_component_1.TechniquesComponent
        ]
    })
], TechniquesModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TechniquesModule;
//# sourceMappingURL=techniques.module.js.map