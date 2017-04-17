"use strict";
var router_1 = require("@angular/router");
var _1 = require(".");
var detail_1 = require("./detail");
var oil_component_1 = require("./list/oil/oil.component");
var watercolor_component_1 = require("./list/watercolor/watercolor.component");
exports.routes = [
    {
        path: '', component: _1.TechniquesComponent,
        children: [
            {
                path: 'oil',
                component: oil_component_1.OilComponent
            },
            {
                path: 'watercolor',
                component: watercolor_component_1.WatercolorComponent
            },
            {
                path: ':id',
                component: detail_1.DetailComponent
            },
        ]
    }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=techniques.router.js.map