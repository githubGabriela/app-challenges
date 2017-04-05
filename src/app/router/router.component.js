"use strict";
//px imports
var index_1 = require("../home/index");
var index_2 = require("../about/index");
exports.appRoutes = [
    { path: '', component: index_1.HomeComponent },
    { path: 'home', component: index_1.HomeComponent },
    { path: 'about', component: index_2.AboutComponent }
];
//# sourceMappingURL=router.component.js.map