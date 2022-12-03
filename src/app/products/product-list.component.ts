import { ChangeDetectionStrategy, Component } from '@angular/core';

// import { Subscription } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

// import { Product } from './product';
import { ProductService } from './product.service';
import {
    BehaviorSubject,
    catchError,
    combineLatest,
    EMPTY,
    filter,
    Subject
} from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategoryService } from '../product-categories/product-category.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
    pageTitle = 'Product List';
    errorMessage = '';

    private selectedCategoryIdSubject = new BehaviorSubject<number>(0);
    selectedCategoryId$ = this.selectedCategoryIdSubject.asObservable();

    // NOTE:  Using the async pipe in the template so don't need to subscribe to the observable
    products$ = combineLatest([
        this.productService.productsWithCategory$,
        this.selectedCategoryId$
    ]).pipe(
        map(([products, selectedCategoryId]) =>
            products.filter(
                product =>
                    selectedCategoryId ? product.categoryId === selectedCategoryId : true
            )
        ),
        catchError((err) => {
            this.errorMessage = err;
            return EMPTY;
        })
    );

    categories$ = this.productCategoryService.productCategories$.pipe(
        catchError((err) => {
            this.errorMessage = err;
            return EMPTY;
        })
    );

    constructor(
        private productService: ProductService,
        private productCategoryService: ProductCategoryService
    ) {}

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

    // productsSimpleFilter$ = this.productService.productsWithCategory$.pipe(
    //     map((products) =>
    //         products.filter((product) =>
    //             this.selectedCategoryId$
    //                 ? product.categoryId === this.selectedCategoryId
    //                 : true
    //         )
    //     )
    // );

    onAdd(): void {
        console.log('Not yet implemented');
    }

    onSelected(categoryId: string): void {
        // console.log(`selected category id is ${categoryId}`);
        this.selectedCategoryIdSubject.next(+categoryId);
    }
}
