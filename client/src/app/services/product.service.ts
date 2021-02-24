import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../interfaces/Product';
import { Order } from '../interfaces/Order';
import { Observable } from 'rxjs'

//CRUD EN ANGULAR
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/product`);
  }

  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/product/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/product/create`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    console.log(id);
    return this.http.delete<Product>(`${this.BASE_URL}/product/delete?productID=${id}`);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/product/update?productID=${id}`, product);
  }


  createOrder(quantity: number): Observable<Order> {
    return this.http.post<Order>(`${this.BASE_URL}/calcular/`, quantity);
  }

  listOrdersByUser(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.BASE_URL}/calcular/${id}`);
  }





}
