System.register(['angular2/core', 'angular2/router', './components/functies/functies', './components/functies/functie', './components/personen/personen', './components/personen/persoon', './components/home/home'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, functies_1, functie_1, personen_1, persoon_1, home_1;
    var LarsComponent;
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
            function (personen_1_1) {
                personen_1 = personen_1_1;
            },
            function (persoon_1_1) {
                persoon_1 = persoon_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            LarsComponent = (function () {
                function LarsComponent(location) {
                    this.location = location;
                }
                LarsComponent.prototype.isActiveLink = function (path) {
                    return this.location.path() === path;
                };
                LarsComponent = __decorate([
                    core_1.Component({
                        selector: 'lars-app',
                        templateUrl: 'app/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_1.HomeComponent, as: 'Home' },
                        { path: '/functies', component: functies_1.FunctiesComponent, as: 'Functies' },
                        { path: '/functie/:key', component: functie_1.FunctieComponent, as: 'EditFunctie' },
                        { path: '/functie/new', component: functie_1.FunctieComponent, as: 'NewFunctie' },
                        { path: '/persoon/:key', component: persoon_1.PersoonComponent, as: 'EditPersoon' },
                        { path: '/persoon/new', component: persoon_1.PersoonComponent, as: 'NewPersoon' },
                        { path: '/personen', component: personen_1.PersonenComponent, as: 'Personen' }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], LarsComponent);
                return LarsComponent;
            })();
            exports_1("LarsComponent", LarsComponent);
        }
    }
});
//# sourceMappingURL=main.js.map