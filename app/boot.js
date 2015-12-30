System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './main', './services/functies', './services/personen', './lib/progress-indicator-backend'], function(exports_1) {
    var browser_1, core_1, router_1, http_1, main_1, functies_1, personen_1, progress_indicator_backend_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (functies_1_1) {
                functies_1 = functies_1_1;
            },
            function (personen_1_1) {
                personen_1 = personen_1_1;
            },
            function (progress_indicator_backend_1_1) {
                progress_indicator_backend_1 = progress_indicator_backend_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(main_1.LarsComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(http_1.XHRBackend, { useClass: progress_indicator_backend_1.ProgressIndicatorBackend }), functies_1.Functies, personen_1.Personen]);
        }
    }
});
//# sourceMappingURL=boot.js.map