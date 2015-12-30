System.register(['angular2/http', 'angular2/core', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1;
    var Actions, ProgressIndicatorConnection, ProgressIndicatorBackend;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            (function (Actions) {
                Actions[Actions["START"] = 0] = "START";
                Actions[Actions["STOP"] = 1] = "STOP";
            })(Actions || (Actions = {}));
            exports_1("Actions", Actions);
            ;
            ProgressIndicatorConnection = (function () {
                function ProgressIndicatorConnection(req, browserXHR, baseResponseOptions) {
                    this.baseConnection = new http_1.XHRConnection(req, browserXHR, baseResponseOptions);
                    ProgressIndicatorConnection.observer.next(Actions.START);
                    this.response.subscribe(function () {
                        ProgressIndicatorConnection.observer.next(Actions.STOP);
                    });
                }
                Object.defineProperty(ProgressIndicatorConnection.prototype, "readyState", {
                    get: function () {
                        return this.baseConnection.readyState;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressIndicatorConnection.prototype, "request", {
                    get: function () {
                        return this.baseConnection.request;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressIndicatorConnection.prototype, "response", {
                    get: function () {
                        return this.baseConnection.response;
                    },
                    enumerable: true,
                    configurable: true
                });
                ProgressIndicatorConnection.pending = new Observable_1.Observable(function (observer) { return ProgressIndicatorConnection.observer = observer; });
                return ProgressIndicatorConnection;
            })();
            exports_1("ProgressIndicatorConnection", ProgressIndicatorConnection);
            ProgressIndicatorBackend = (function () {
                function ProgressIndicatorBackend(_browserXHR, _baseResponseOptions) {
                    this._browserXHR = _browserXHR;
                    this._baseResponseOptions = _baseResponseOptions;
                }
                ProgressIndicatorBackend.prototype.createConnection = function (request) {
                    return new ProgressIndicatorConnection(request, this._browserXHR, this._baseResponseOptions);
                };
                ProgressIndicatorBackend = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.BrowserXhr, http_1.ResponseOptions])
                ], ProgressIndicatorBackend);
                return ProgressIndicatorBackend;
            })();
            exports_1("ProgressIndicatorBackend", ProgressIndicatorBackend);
        }
    }
});
//# sourceMappingURL=progress-indicator-backend.js.map