import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Functies as FunctiesService} from '../../services/functies';
import {Functie} from '../../model/functie';
import * as uuid from 'node-uuid';

@Component({
  selector: 'functie',
  viewProviders: [FunctiesService],
  templateUrl: '/assets/views/functie.html',
  directives: [ROUTER_DIRECTIVES]
})

export class FunctieComponent {
  functie: Functie;
  new: boolean;
  constructor(private service: FunctiesService, private params: RouteParams,
    private router: Router) {
    let key: string = params.get('key');
    if (key) {
      this.new = false;
      this.service.get(key)
        .subscribe(res => this.functie = res);
    } else {
      this.new = true;
      this.functie = new Functie();
    }
  }
  onSubmit() {
    // generate a uuid v4 key
    if (!this.functie.key) {
      this.functie.key = uuid.v4();
    }
    this.service.save(this.functie)
      .subscribe(
        () => this.router.navigate(['/Functies']),
        () => console.log('error')
      );
  }
}
