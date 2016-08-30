'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var DataSvc_1 = require('../services/DataSvc');
var SalesByCategoryCmp = (function () {
    function SalesByCategoryCmp(dataSvc) {
        this.productSales = dataSvc.productSales;
    }
    SalesByCategoryCmp = __decorate([
        core_1.Component({
            selector: 'sales-by-catalog-cmp',
            templateUrl: 'src/components/salesByCategoryCmp.html',
            directives: [common_1.CORE_DIRECTIVES, wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], SalesByCategoryCmp);
    return SalesByCategoryCmp;
}());
exports.SalesByCategoryCmp = SalesByCategoryCmp;
//# sourceMappingURL=SalesByCategoryCmp.js.map