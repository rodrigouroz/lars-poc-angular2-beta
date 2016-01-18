import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Functies as FunctiesService} from '../../services/functies';
import {Functie} from '../../model/functie';
import {Grid} from '../grid/grid';
import {Column} from '../grid/column';

@Component({
  selector: 'functies',
  viewProviders: [FunctiesService],
  templateUrl: '/assets/views/functies.html',
  directives: [Grid, ROUTER_DIRECTIVES]
})

export class FunctiesComponent {
  functies: Array<Functie>;
  columns: Array<Column>;
  constructor(private router: Router, private service: FunctiesService) {
    this.columns = [
      new Column('name', 'Name'),
      new Column('description', 'Description')
    ];

    this.service.list()
      .subscribe(res => this.functies = res);
  }

  edit(functie) {
    this.router.navigate(['/EditFunctie', {key: functie.key}]);
  }
}
