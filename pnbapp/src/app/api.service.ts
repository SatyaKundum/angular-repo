import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PnbUser } from './pnb-user';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL: string = 'http://localhost:9001/portalnbeyond';

  constructor(private httpClient: HttpClient) {
  }

  public createUser(pnbuser: PnbUser) {
    console.log(this.apiURL);
    console.log(pnbuser.username);
    return this.httpClient.post('http://localhost:9001/portalnbeyond/adduser', pnbuser);
  }
}
