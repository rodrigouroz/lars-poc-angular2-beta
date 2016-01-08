System.register(['angular2/core', 'angular2/router', '../../services/personen', '../grid/grid'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, personen_1, grid_1;
    var PersonenComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (personen_1_1) {
                personen_1 = personen_1_1;
            },
            function (grid_1_1) {
                grid_1 = grid_1_1;
            }],
        execute: function() {
            PersonenComponent = (function () {
                function PersonenComponent(router, service) {
                    var _this = this;
                    this.router = router;
                    this.service = service;
                    this.columns = [
                        { field: 'firstname', description: 'First Name', width: 300 },
                        { field: 'lastname', description: 'Last Name', width: 300 },
                        { field: 'email', description: 'Email', width: 300 }
                    ];
                    this.service.list()
                        .subscribe(function (res) { return _this.personen = res; });
                }
                PersonenComponent.prototype.edit = function (persoon) {
                    this.router.navigate(['/EditPersoon', { key: persoon.key }]);
                };
                PersonenComponent = __decorate([
                    core_1.Component({
                        selector: 'personen',
                        viewProviders: [personen_1.Personen],
                        templateUrl: 'app/components/personen/personen.html',
                        directives: [grid_1.Grid, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, personen_1.Personen])
                ], PersonenComponent);
                return PersonenComponent;
            })();
            exports_1("PersonenComponent", PersonenComponent);
        }
    }
});
//# sourceMappingURL=personen.js.map