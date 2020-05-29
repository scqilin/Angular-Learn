import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Runing Shoes',
        99,
        ['Men', 'Showe']
      ),
      new Product(
        'BEuiyJUYhy',
        'Black Runing Shoes',
        120,
        ['Men', 'Showe']
      ),
      new Product(
        'THiukd',
        'Black Runing Shoes',
        150,
        ['Men', 'Showe']
      ),
      new Product(
        'IOUkjid',
        'Black Runing Shoes',
        180,
        ['Men', 'Showe']
      )
    ];
   }

  ngOnInit(): void {
  }
  productWaslected(product: Product){
    console.log('product clicked :>> ', product);
  }

}

class Product{
  constructor(
    public sku: string,
    public name: string,
    public price: number,
    public department: string[],
  ){}
}
