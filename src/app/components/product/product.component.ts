import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  product: any;
  isBold =  true;
  fontsize = 50;
  hellotext = 'Hello this is the product!';

  constructor() {
    this.product =   { id: 1, name:   'P2', amount: 45};
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
