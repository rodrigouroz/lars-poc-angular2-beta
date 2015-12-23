System.register(['angular2/core', 'angular2/router', '../../services/personen', '../../model/persoon', 'node-uuid'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, personen_1, persoon_1, uuid;
    var PersoonComponent;
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
            function (persoon_1_1) {
                persoon_1 = persoon_1_1;
            },
            function (uuid_1) {
                uuid = uuid_1;
            }],
        execute: function() {
            PersoonComponent = (function () {
                function PersoonComponent(service, params, router) {
                    var _this = this;
                    this.service = service;
                    this.params = params;
                    this.router = router;
                    var key = params.get('key');
                    if (key) {
                        this.new = false;
                        this.service.get(key)
                            .subscribe(function (res) {
                            _this.persoon = res;
                            _this.persoon.birthdate = _this.persoon.birthdate.substring(0, 10);
                        });
                    }
                    else {
                        this.new = true;
                        this.persoon = new persoon_1.Persoon();
                    }
                }
                PersoonComponent.prototype.onSubmit = function () {
                    var _this = this;
                    // generate a uuid v4 key
                    if (!this.persoon.key) {
                        this.persoon.key = uuid.v4();
                    }
                    this.service.save(this.persoon)
                        .subscribe(function () { return _this.router.navigate(['/Personen']); }, function () { return console.log('error'); });
                };
                PersoonComponent = __decorate([
                    core_1.Component({
                        selector: 'persoon',
                        viewProviders: [personen_1.Personen],
                        templateUrl: 'app/components/personen/persoon.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [personen_1.Personen, router_1.RouteParams, router_1.Router])
                ], PersoonComponent);
                return PersoonComponent;
            })();
            exports_1("PersoonComponent", PersoonComponent);
        }
    }
});
//# sourceMappingURL=persoon.js.map