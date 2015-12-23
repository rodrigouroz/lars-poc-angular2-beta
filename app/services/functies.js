System.register(['angular2/core', 'angular2/http', '../model/functie', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, functie_1;
    var Functies;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (functie_1_1) {
                functie_1 = functie_1_1;
            },
            function (_1) {}],
        execute: function() {
            Functies = (function () {
                function Functies(http) {
                    this.http = http;
                    this.url = 'https://lars-poc-rest-prototype.herokuapp.com/functies';
                }
                Functies.prototype.list = function () {
                    return this.http.get(this.url)
                        .map(function (res) { return res.json(); })
                        .map(function (functies) {
                        var results = [];
                        var functie;
                        if (functies) {
                            functies.results.forEach(function (result) {
                                functie = new functie_1.Functie();
                                functie.key = result.$$expanded.key;
                                functie.name = result.$$expanded.name;
                                functie.description = result.$$expanded.description;
                                results.push(functie);
                            });
                        }
                        return results;
                    });
                };
                Functies.prototype.get = function (key) {
                    return this.http.get(this.url + '/' + key)
                        .map(function (res) { return res.json(); });
                };
                Functies.prototype.save = function (functie) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.put(this.url + '/' + functie.key, JSON.stringify(functie), { headers: headers });
                };
                Functies.prototype.log = function (err) {
                    console.error('There was an error: ' + err);
                };
                Functies = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Functies);
                return Functies;
            })();
            exports_1("Functies", Functies);
        }
    }
});
//# sourceMappingURL=functies.js.map