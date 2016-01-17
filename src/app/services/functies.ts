import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Functie} from '../model/functie';
import 'rxjs/add/operator/map';

@Injectable()
export class Functies {
  url: string;
  functies: Array<Functie>;
  constructor(public http: Http) {
    this.url = 'https://lars-poc-rest-prototype.herokuapp.com/functies';
  }

  public list() : any {
    return this.http.get(this.url)
      .map(res => res.json())
      .map((functies: any) => {
        let results: Array<Functie> = [];
        let functie: Functie;
        if (functies) {
          functies.results.forEach((result) => {
            functie = new Functie();
            functie.key = result.$$expanded.key;
            functie.name = result.$$expanded.name;
            functie.description = result.$$expanded.description;
            results.push(functie);
          });
        }
        return results;
      });
  }

  public get(key: string): any {
    return this.http.get(this.url + '/' + key)
      .map(res => res.json());
  }

  public save(functie: Functie) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.url + '/' + functie.key, JSON.stringify(functie), {headers: headers});
  }

  public log(err) {
    console.error('There was an error: ' + err);
  }
}
