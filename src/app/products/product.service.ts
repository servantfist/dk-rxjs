import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {catchError, map, Observable, of, tap, throwError} from 'rxjs';

import { Product } from './product';
import {MessageService} from "../message.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  // private suppliersUrl = 'api/suppliers';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  products$ = this.http.get<Product[]>(this.productsUrl)
      .pipe(
          /* NOTE:  When using the map operator, we need to return an object
                    that is the same shape as the object we are mapping to.
                    So, first RxJS `map` the products, then using the TS arrays map
                    operator, putting the product into curly braces and using the spread
                    operator to copy the existing properties of each product
          */
        map(products => products.map(product => ({
          ...product,
            // Grab each product and increase the price by 50%
          price: product.price? product.price * 1.5 : 0,
            /* NOTE:  Adding explicit searchKey property to the product object
                    to make it easier to search for products by name
                    in the ProductListComponent and ProductDetailComponent
                    (see the search() method in those components)
             */
          searchKey: [product.productName]
            // NOTE: Doing explicit type casting to Product type.
        } as Product))),
        // Uncomment the following line to see the products in the console
        // tap(data => console.log('Products: ', JSON.stringify(data))),
        catchError(this.handleError<Product[]>('products', []))
      );

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /*
        NOTE:  This method is used to log messages to the MessageService, but
               in production, we would want to use a remote logging infrastructure
    */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

}
