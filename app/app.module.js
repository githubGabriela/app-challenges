"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var ng2_translate_1 = require("ng2-translate");
//px imports
var app_router_1 = require("./app.router");
var app_component_1 = require("./app.component");
var not_found_component_1 = require("./access/not-found.component");
var index_1 = require("./header/index");
var menu_component_1 = require("./menu/menu.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule,
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [http_1.Http]
            }),
            app_router_1.AppRoutes,
        ],
        declarations: [
            menu_component_1.MenuComponent,
            index_1.HeaderComponent,
            not_found_component_1.NotFoundComponent,
            app_component_1.AppComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
function createTranslateLoader(http) {
    console.log('createTranslateLoader');
    return new ng2_translate_1.TranslateStaticLoader(http, 'assets/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
//# sourceMappingURL=app.module.js.map