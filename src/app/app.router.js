"use strict";
var router_1 = require("@angular/router");
//px imports
var not_found_component_1 = require("./access/not-found.component");
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/home/home.module' },
    { path: 'about', loadChildren: 'app/about/about.module' },
    { path: 'techniques', loadChildren: 'app/techniques/techniques.module' },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.AppRoutes = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.router.js.map