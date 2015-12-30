import {bootstrap}    from 'angular2/platform/browser';
import {provide, enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, Http, XHRBackend} from 'angular2/http';
import {LarsComponent} from './main';
import {Functies as FunctiesService} from './services/functies';
import {Personen as PersonenService} from './services/personen';
import {ProgressIndicatorBackend} from './lib/progress-indicator-backend';

// TODO: When there's a build process only run this in the bundled production file, not in dev
enableProdMode();
bootstrap(LarsComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(XHRBackend, {useClass: ProgressIndicatorBackend}), FunctiesService, PersonenService]);