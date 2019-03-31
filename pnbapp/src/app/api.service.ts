import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PnbUser } from './pnb-user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
  }
  apiURL: string = 'http://localhost:9001/portalnbeyond/adduser';
  public createUser(pnbuser: PnbUser) {
    return this.httpClient.post('apiURL', pnbuser);
  }
  public updateCustomer(pnbuser: PnbUser) { }
  public deleteCustomer(id: number) { }
  public getCustomerById(id: number) { }
  public getCustomers(url?: string) { }
}
