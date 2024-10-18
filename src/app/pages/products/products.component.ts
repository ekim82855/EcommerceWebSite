import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productsArray: any[] = [];
  categories: any[] = [];
  selectedCategory: number = 0;
  loggedObj: any = {};

  constructor(private productServ: ProductService) {
    // const localData = localStorage.getItem('amazon_user');
    // if(localData != null) {
    //   const parseObj =  JSON.parse(localData);
    //   this.loggedObj = parseObj;
    // }
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategory();
  }
  
  loadProducts() {
    this.productServ.getAllProducts().subscribe((data: any) => {
      this.productsArray = data;
    })
  }

  loadCategory() {
    this.productServ.getAllCategory().subscribe((data: any) => {
      this.categories = data;
    })
  }

  getAllProductsByCategory(categoryId: number) {
    this.productServ.getAllProductsByCategory(categoryId).subscribe((data: any) => {
      this.productsArray = data;
    })
  }

  
  addToCart(productId: number) {
    // if(this.loggedObj.custId == undefined) {
    //   this.productSrv.showLogin.next(true);
    // } else {
    //   const obj = {
    //     "CartId": 0,
    //     "CustId": this.loggedObj.custId,
    //     "ProductId": producId,
    //     "Quantity": 1,
    //     "AddedDate": new Date()
    //   }
    //   this.productSrv.addtoCart(obj).subscribe((res: any)=> {
    //     if(res.result) {
    //       alert("Product Added to Cart"); 
    //       this.productSrv.cartUpdated.next(true);
    //     } else {
    //       alert(res.message)
    //     }
    //   }) 
    // }
    alert("Product Added to Cart"); 
    
  }
}
