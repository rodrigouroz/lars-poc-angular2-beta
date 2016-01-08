import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Functies as FunctiesService} from '../../services/functies';
import {Functie} from '../../model/functie';
import {Grid} from '../grid/grid';
import {DataColumn} from '../grid/data-column';

@Component({
  selector: 'functies',
  viewProviders: [FunctiesService],
  templateUrl: 'app/components/functies/functies.html',
  directives: [Grid, ROUTER_DIRECTIVES]
})

export class FunctiesComponent {
  functies: Array<Functie>;
  columns: Array<DataColumn>;
  constructor(private router: Router, private service: FunctiesService) {
    this.columns = [
      {field: 'name', description: 'Name', width: 300},
      {field: 'description', description: 'Description', width: 600}
    ];
    
    this.service.list()
      .subscribe(res => this.functies = res);
  }
  
  edit(functie) {
    this.router.navigate(['/EditFunctie', {key: functie.key}]);
  }
}
