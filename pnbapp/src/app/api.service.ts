import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PnbUser, PnbSignInUser } from './pnb-user';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  apiURL: string = 'http://localhost:9001/portalnbeyond';

  constructor(private httpClient: HttpClient) {
  }

  public createUser(pnbuser: PnbUser) {
    return this.httpClient.post(this.apiURL+'/adduser', pnbuser, {responseType: 'text'});
  }
  public signInUser(pnbuser: PnbSignInUser) {
    return this.httpClient.post(this.apiURL+'/signinuser', pnbuser, {responseType: 'text', headers: 
    {'Content-Type': 'undefined', 'Access-Control-Allow-Origin': '*'}});
  }
}
