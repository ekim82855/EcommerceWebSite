import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //$env:NODE_TLS_REJECT_UNAUTHORIZED=0 POWER SHELL ERROR
  cartUpdated: Subject<boolean> = new Subject<boolean>();
  showLogin: Subject<boolean> = new Subject<boolean>();
  url: string = "localhost:7213";
  // url: string = "momoflowersapi.azurewebsites.net";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`https://${this.url}/api/Product/GetAllProducts`);
  }
  getAllProductsByCategoryID(id: number): Observable<any[]> {
    return this.http.get<any[]>(`https://${this.url}/api/Product/GetAllProductsByCategoryID?categoryID=${id}`);
  }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`https://${this.url}/api/Category/GetAllCategories`);
  }

  register(obj: any) : Observable<any> {
    return this.http.post<any>(`https://${this.url}/api/User/Register`, obj);
  }

  login(obj: any) : Observable<any> {
    return this.http.post<any>("https://freeapi.miniprojectideas.com/api/amazon/Login", obj);
  }

  addtoCart(obj: any) : Observable<any> {
    return this.http.post<any>("https://freeapi.miniprojectideas.com/api/amazon/AddToCart", obj);
  }

  getAddtocartdataByCust(id: number): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/amazon/GetCartProductsByCustomerId?id="+ id);
  }

  removeProductFromCart(cartId: number): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/amazon/DeleteProductFromCartById?id="+ cartId);
  }

  PlaceOrder(obj: any) : Observable<any> {
    return this.http.post<any>("https://freeapi.miniprojectideas.com/api/amazon/PlaceOrder", obj);
  }
}