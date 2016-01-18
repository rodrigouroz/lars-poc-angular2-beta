import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Persoon} from '../model/persoon';
import 'rxjs/add/operator/map';

@Injectable()
export class Personen {
  url: string;
  functies: Array<Persoon>;
  constructor(public http: Http) {
    this.url = 'https://lars-poc-rest-prototype.herokuapp.com/personen';
  }

  public list() : any {
    return this.http.get(this.url)
      .map((res: Response) => res.json())
      .map((personen: any) => {
        let results: Array<Persoon> = [];
        let persoon: Persoon;
        if (personen) {
          personen.results.forEach((result) => {
            persoon = new Persoon();
            persoon.key = result.$$expanded.key;
            persoon.registrationnumber = result.$$expanded.registrationnumber;
            persoon.firstname = result.$$expanded.firstname;
            persoon.lastname = result.$$expanded.lastname;
            persoon.email = result.$$expanded.email;
            persoon.birthdate = result.$$expanded.birthdate;
            results.push(persoon);
          });
        }
        return results;
      });
  }

  public get(key: string): any {
    return this.http.get(this.url + '/' + key)
      .map((res: Response) => res.json());
  }

  public save(persoon: Persoon) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.url + '/' + persoon.key, JSON.stringify(persoon), {headers: headers});
  }

  public log(err) {
    console.error('There was an error: ' + err);
  }
}
