import {ConnectionBackend, Connection, Request, Response, ReadyState, XHRConnection, BrowserXhr,
    ResponseOptions} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

export enum Actions {START, STOP};

export class ProgressIndicatorConnection implements Connection {

    static pending: Observable<Actions> =
        new Observable (observer => ProgressIndicatorConnection.observer = observer);

    private static observer;

    private baseConnection: XHRConnection;

    constructor(req: Request, browserXHR: BrowserXhr, baseResponseOptions?: ResponseOptions) {
        this.baseConnection = new XHRConnection(req, browserXHR, baseResponseOptions);
        ProgressIndicatorConnection.observer.next(Actions.START);
        this.response.subscribe(() => {
           ProgressIndicatorConnection.observer.next(Actions.STOP);
        });
    }

    get readyState(): ReadyState {
        return this.baseConnection.readyState;
    }
    get request(): Request {
        return this.baseConnection.request;
    }
    get response(): Observable<Response> {
        return this.baseConnection.response;
    }

}

@Injectable()
export class ProgressIndicatorBackend implements ConnectionBackend {
  constructor(private _browserXHR: BrowserXhr, private _baseResponseOptions: ResponseOptions) {}
  createConnection(request: Request): ProgressIndicatorConnection {
    return new ProgressIndicatorConnection(request, this._browserXHR, this._baseResponseOptions);
  }
}
