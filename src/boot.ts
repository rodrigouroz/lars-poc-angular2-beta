import {bootstrap}    from 'angular2/platform/browser';
import {provide, enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, Http, XHRBackend} from 'angular2/http';
import {LarsComponent} from './app/main';
import {Functies as FunctiesService} from './app/services/functies';
import {Personen as PersonenService} from './app/services/personen';
import {ProgressIndicatorBackend} from './app/lib/progress-indicator-backend';

bootstrap(LarsComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(XHRBackend,
    {useClass: ProgressIndicatorBackend}), FunctiesService, PersonenService]);
