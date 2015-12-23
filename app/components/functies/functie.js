System.register(['angular2/core', 'angular2/router', '../../services/functies', '../../model/functie', 'node-uuid'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, functies_1, functie_1, uuid;
    var FunctieComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (functies_1_1) {
                functies_1 = functies_1_1;
            },
            function (functie_1_1) {
                functie_1 = functie_1_1;
            },
            function (uuid_1) {
                uuid = uuid_1;
            }],
        execute: function() {
            FunctieComponent = (function () {
                function FunctieComponent(service, params, router) {
                    var _this = this;
                    this.service = service;
                    this.params = params;
                    this.router = router;
                    var key = params.get('key');
                    if (key) {
                        this.new = false;
                        this.service.get(key)
                            .subscribe(function (res) { return _this.functie = res; });
                    }
                    else {
                        this.new = true;
                        this.functie = new functie_1.Functie();
                    }
                }
                FunctieComponent.prototype.onSubmit = function () {
                    var _this = this;
                    // generate a uuid v4 key
                    if (!this.functie.key) {
                        this.functie.key = uuid.v4();
                    }
                    this.service.save(this.functie)
                        .subscribe(function () { return _this.router.navigate(['/Functies']); }, function () { return console.log('error'); });
                };
                FunctieComponent = __decorate([
                    core_1.Component({
                        selector: 'functie',
                        viewProviders: [functies_1.Functies],
                        templateUrl: 'app/components/functies/functie.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [functies_1.Functies, router_1.RouteParams, router_1.Router])
                ], FunctieComponent);
                return FunctieComponent;
            })();
            exports_1("FunctieComponent", FunctieComponent);
        }
    }
});
//# sourceMappingURL=functie.js.map