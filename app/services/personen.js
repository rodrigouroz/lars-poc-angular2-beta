System.register(['angular2/core', 'angular2/http', '../model/persoon', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, persoon_1;
    var Personen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (persoon_1_1) {
                persoon_1 = persoon_1_1;
            },
            function (_1) {}],
        execute: function() {
            Personen = (function () {
                function Personen(http) {
                    this.http = http;
                    this.url = 'https://lars-poc-rest-prototype.herokuapp.com/personen';
                }
                Personen.prototype.list = function () {
                    return this.http.get(this.url)
                        .map(function (res) { return res.json(); })
                        .map(function (personen) {
                        var results = [];
                        var persoon;
                        if (personen) {
                            personen.results.forEach(function (result) {
                                persoon = new persoon_1.Persoon();
                                persoon.key = result.$$expanded.key;
                                persoon.registrationnumber = result.$$expanded.registrationnumber;
                                persoon.firstname = result.$$expanded.firstname;
                                persoon.lastname = result.$$expanded.lastname;
                                persoon.email = result.$$expanded.email;
                                persoon.birthdate = result.$$expanded.birthdate;
                                results.push(persoon);
                            });
                        }
                        return results;
                    });
                };
                Personen.prototype.get = function (key) {
                    return this.http.get(this.url + '/' + key)
                        .map(function (res) { return res.json(); });
                };
                Personen.prototype.save = function (persoon) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.put(this.url + '/' + persoon.key, JSON.stringify(persoon), { headers: headers });
                };
                Personen.prototype.log = function (err) {
                    console.error('There was an error: ' + err);
                };
                Personen = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Personen);
                return Personen;
            })();
            exports_1("Personen", Personen);
        }
    }
});
//# sourceMappingURL=personen.js.map