import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router'
import {FunctiesComponent} from './components/functies/functies';
import {FunctieComponent} from './components/functies/functie';
import {PersonenComponent} from './components/personen/personen';
import {PersoonComponent} from './components/personen/persoon';
import {HomeComponent} from './components/home/home';

@Component({
    selector: 'lars-app',
    templateUrl: 'app/main.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: HomeComponent, as: 'Home' },
    { path: '/functies', component: FunctiesComponent, as: 'Functies' },
    { path: '/functie/:key', component: FunctieComponent, as: 'EditFunctie' },
    { path: '/functie/new', component: FunctieComponent, as: 'NewFunctie' },
    { path: '/persoon/:key', component: PersoonComponent, as: 'EditPersoon' },
    { path: '/persoon/new', component: PersoonComponent, as: 'NewPersoon' },
    { path: '/personen', component: PersonenComponent, as: 'Personen' }
])
export class LarsComponent {
    constructor(public location: Location) { }
    isActiveLink(path: string) {
        return this.location.path() === path;
    }
}