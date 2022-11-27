import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
    catchError,
    combineLatest,
    map,
    Observable,
    of,
    tap,
    throwError
} from 'rxjs';

import { Product } from './product';
import { MessageService } from '../message.service';
import { ProductCategory } from '../product-categories/product-category';
import { ProductCategoryService } from '../product-categories/product-category.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsUrl = 'api/products';

    // private suppliersUrl = 'api/suppliers';
    productCategories$ = this.productCategoryService.productCategories$;

    constructor(
        private http: HttpClient,
        private messageService: MessageService,
        private productCategoryService: ProductCategoryService
    ) {}

    /* V! - This does not combine the two observables into one.  */
    products$ = this.http.get<Product[]>(this.productsUrl).pipe(
        // NOTE:  When using the map operator, we need to return an object
        //          that is the same shape as the object we are mapping to.
        //          So, first RxJS `map` the products, then using the TS arrays map
        //          operator, putting the product into curly braces and using the spread
        //          operator to copy the existing properties of each product

        /*  Remove the map operator and use the combineLatest operator instead
        map((products) =>
            products.map(
                (product) =>
                    ({
                        ...product,
                        // Grab each product and increase the price by 50%
                        price: product.price ? product.price * 1.5 : 0,
                        // NOTE:  Adding explicit searchKey property to the product object
                        //        to make it easier to search for products by name
                        //        in the ProductListComponent and ProductDetailComponent
                        //        (see the search() method in those components)
                        //
                        searchKey: [product.productName]
                        // NOTE: Doing explicit type casting to Product type.
                    } as Product)
            )
        ), */
        // Uncomment the following line to see the products in the console
        tap((data) => console.log('Products: ', JSON.stringify(data))),
        catchError(this.handleError<Product[]>('products', []))
    );

    productsWithCategory$ = combineLatest([
        this.products$,
        this.productCategories$
    ]).pipe(
        map(([products, categories]) =>
            products.map(
                (product) =>
                    ({
                        ...product,
                        price: product.price ? product.price * 1.5 : 0,
                        categoryName: categories.find(
                            (c) => product.categoryId === c.id
                        )?.name // NOTE:  The ? is to handle the case where the categories array is empty
                    } as Product)
            )
        )
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
