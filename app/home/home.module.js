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
var home_component_1 = require("./home.component");
var home_router_1 = require("./home.router");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            home_router_1.default
        ],
        declarations: [home_component_1.HomeComponent],
    })
], HomeModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeModule;
//# sourceMappingURL=home.module.js.map