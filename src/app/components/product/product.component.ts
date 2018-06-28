import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  isBold =  true;
  fontsize = 50;
  hellotext = 'Hello this is the product!';

  constructor() {
  }

  ngOnInit() {
    this.product =  { 'id': 1, 'name':   'P2', 'amount': 45};
  }

  getClasses() {
    const cl =  {
      red: true,
      blue: false
    };
    return cl;
  }

  getStyles() {
    const styles = {
        'color' : 'Red',
        'margin-left.px' : 35,
        'font-weight': this.isBold ? 'Bold' : 'normal'

    };
    return styles;
  }
}
