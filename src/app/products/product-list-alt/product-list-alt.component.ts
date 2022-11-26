import { Component } from '@angular/core';

import { ProductService } from '../product.service';
import {MessageService} from "../../message.service";

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId = 0;

  products$ = this.productService.products$;

  constructor(
      private productService: ProductService,
      private messageService: MessageService) { }


  onSelected(productId: number): void {
      this.messageService.add('Not yet implemented');
  }
}
