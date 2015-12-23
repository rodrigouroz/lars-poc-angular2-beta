import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LarsComponent} from './main';
import {Functies as FunctiesService} from './services/functies';
import {Personen as PersonenService} from './services/personen';

bootstrap(LarsComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, FunctiesService, PersonenService]);