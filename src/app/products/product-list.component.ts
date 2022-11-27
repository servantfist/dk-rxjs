import { Component } from '@angular/core';

// import { Subscription } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

// import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    pageTitle = 'Product List';
    errorMessage = '';
    categories: ProductCategory[] = [];

    // NOTE:  Using the async pipe in the template so don't need to subscribe to the observable
    products$ = this.productService.productsWithCategory$;

    /* NOTE:  The following is the original code which disappears when we
      replace it with an observable and a pipe() operator.
      This is called 'Declarative Programming' and is the preferred
        way to write Angular code vs. 'Imperative Programming'

    products: Product[] = [];
    sub!: Subscription;

    ngOnInit(): void {
        this.sub = this.productService.getProducts()
        .subscribe({
            next: products => this.products = products,
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
  */

    constructor(private productService: ProductService) {}

    onAdd(): void {
        console.log('Not yet implemented');
    }

    onSelected(categoryId: string): void {
        console.log('Not yet implemented');
    }
}
