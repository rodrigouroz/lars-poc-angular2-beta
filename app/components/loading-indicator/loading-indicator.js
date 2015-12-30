System.register(['angular2/core', 'angular2/common', '../../lib/progress-indicator-backend'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, progress_indicator_backend_1;
    var LoadingIndicator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (progress_indicator_backend_1_1) {
                progress_indicator_backend_1 = progress_indicator_backend_1_1;
            }],
        execute: function() {
            LoadingIndicator = (function () {
                function LoadingIndicator() {
                    var _this = this;
                    this.requests = 0;
                    this.show = false;
                    progress_indicator_backend_1.ProgressIndicatorConnection.pending.subscribe(function (action) {
                        if (action == progress_indicator_backend_1.Actions.START) {
                            _this.requests++;
                        }
                        else {
                            _this.requests--;
                        }
                        _this.show = _this.requests > 0 && _this.width > 0;
                        if (_this.requests > 0) {
                            // start timers
                            _this.startAnimation();
                        }
                        else {
                            // stop timers
                            _this.stopAnimation();
                        }
                    });
                }
                Object.defineProperty(LoadingIndicator.prototype, "widthStyle", {
                    get: function () {
                        return (this.width * 100) + '%';
                    },
                    enumerable: true,
                    configurable: true
                });
                LoadingIndicator.prototype.startAnimation = function () {
                    var _this = this;
                    this.width = 0;
                    this.timer = setTimeout(function () { return _this.increaseIndicator(); }, 250);
                };
                LoadingIndicator.prototype.stopAnimation = function () {
                    clearTimeout(this.timer);
                };
                LoadingIndicator.prototype.increaseIndicator = function () {
                    var _this = this;
                    if (this.width >= 1 || this.requests == 0) {
                        return;
                    }
                    var rnd = 0;
                    if (this.width >= 0 && this.width < 0.25) {
                        // Start out between 3 - 6% increments
                        rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
                    }
                    else if (this.width >= 0.25 && this.width < 0.65) {
                        // increment between 0 - 3%
                        rnd = (Math.random() * 3) / 100;
                    }
                    else if (this.width >= 0.65 && this.width < 0.9) {
                        // increment between 0 - 2%
                        rnd = (Math.random() * 2) / 100;
                    }
                    else if (this.width >= 0.9 && this.width < 0.99) {
                        // finally, increment it .5 %
                        rnd = 0.005;
                    }
                    else {
                        // after 99%, don't increment:
                        rnd = 0;
                    }
                    this.width += rnd;
                    this.timer = setTimeout(function () { return _this.increaseIndicator(); }, 250);
                };
                LoadingIndicator = __decorate([
                    core_1.Component({
                        selector: 'loading-indicator',
                        templateUrl: 'app/components/loading-indicator/loading-indicator.html',
                        styleUrls: ['app/components/loading-indicator/loading-indicator.css'],
                        directives: [common_1.NgStyle]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoadingIndicator);
                return LoadingIndicator;
            })();
            exports_1("LoadingIndicator", LoadingIndicator);
        }
    }
});
//# sourceMappingURL=loading-indicator.js.map