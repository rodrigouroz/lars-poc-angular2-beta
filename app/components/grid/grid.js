System.register(['angular2/core', './fixed-data-table-wrapper'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, fixed_data_table_wrapper_1;
    var Grid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fixed_data_table_wrapper_1_1) {
                fixed_data_table_wrapper_1 = fixed_data_table_wrapper_1_1;
            }],
        execute: function() {
            Grid = (function () {
                function Grid() {
                    this.change = new core_1.EventEmitter();
                }
                Grid.prototype.edit = function (element) {
                    this.change.emit(element);
                };
                Grid.prototype.ngOnChanges = function () {
                    if (this.rows) {
                        var table = new fixed_data_table_wrapper_1.FixedDataTableWrapper({
                            width: 500,
                            height: 500,
                            rowHeight: 50,
                            headerHeight: 50
                        }, this.rows, this.columns);
                        table.display('fixed-data-table');
                    }
                };
                Grid = __decorate([
                    core_1.Component({
                        selector: 'grid',
                        templateUrl: 'app/components/grid/grid.html',
                        inputs: ['rows: rows', 'columns: columns'],
                        outputs: ['change']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Grid);
                return Grid;
            })();
            exports_1("Grid", Grid);
        }
    }
});
//# sourceMappingURL=grid.js.map