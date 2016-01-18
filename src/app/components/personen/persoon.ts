import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Personen as PersonenService} from '../../services/personen';
import {Persoon} from '../../model/persoon';
import * as uuid from 'node-uuid';

@Component({
  selector: 'persoon',
  viewProviders: [PersonenService],
  templateUrl: '/assets/views/persoon.html',
  directives: [ROUTER_DIRECTIVES]
})

export class PersoonComponent {
  persoon: Persoon;
  new: boolean;
  constructor(private service: PersonenService, private params: RouteParams,
    private router: Router) {
    let key: string = params.get('key');
    if (key) {
      this.new = false;
      this.service.get(key)
        .subscribe(res => {
          this.persoon = res;
          this.persoon.birthdate = this.persoon.birthdate.substring(0, 10);
        });
    } else {
      this.new = true;
      this.persoon = new Persoon();
    }
  }
  onSubmit() {
    // generate a uuid v4 key
    if (!this.persoon.key) {
      this.persoon.key = uuid.v4();
    }
    this.service.save(this.persoon)
      .subscribe(
        () => this.router.navigate(['/Personen']),
        () => console.log('error')
      );
  }
}
