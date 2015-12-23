import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Personen as PersonenService} from '../../services/personen';
import {Persoon} from '../../model/persoon';
import {Grid} from '../grid/grid';
import {Column} from '../grid/column';

@Component({
  selector: 'personen',
  viewProviders: [PersonenService],
  templateUrl: 'app/components/personen/personen.html',
  directives: [Grid, ROUTER_DIRECTIVES]
})

export class PersonenComponent {
  personen: Array<Persoon>;
  columns: Array<Column>;
  constructor(private router: Router, private service: PersonenService) {
    this.columns = [
      new Column('firstname', 'First Name'),
      new Column('lastname', 'Last Name')
    ];
    this.service.list()
      .subscribe(res => this.personen = res);
  }
  
  edit(persoon) {
    this.router.navigate(['/EditPersoon', {key: persoon.key}]);
  }
}
