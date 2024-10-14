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
    this.testAPI();
  }
  testAPI() {
    this.productServ.testAPI().subscribe((Res: any) => {
      console.log(Res);
    })
  }
  
  loadProducts() {
    // this.productServ.getAllProducts().subscribe((Res: any) => {
    //   this.productsArray = Res.data;
    // })
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name", productPrice: 5.00, categoryId: 1});
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name 2", productPrice: 10.00, categoryId: 1});
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name 3", productPrice: 10.00, categoryId: 2});
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name 4", productPrice: 10.00, categoryId: 2});
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name 5", productPrice: 10.00, categoryId: 3});
  }

  loadCategory() {
    // this.productServ.getAllCategory().subscribe((Res: any) => {
    //   this.productsArray = Res.data;
    // })
    this.categories.push({ categoryName: 'Category 1', categoryId: 1});
    this.categories.push({ categoryName: 'Category 2', categoryId: 2});
    this.categories.push({ categoryName: 'Category 3', categoryId: 3});
    this.categories.push({ categoryName: 'Category 4', categoryId: 4});
  }

  getAllProductsByCategory(categoryId: number) {
    // this.productServ.getAllProductsByCategory(categoryId).subscribe((Res: any) => {
    //   this.productsArray = Res.data;
    // })
    this.selectedCategory = categoryId;
    this.productsArray = [];
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name", productPrice: 5.00, categoryId: 1});
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name 2", productPrice: 10.00, categoryId: 1});
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name 3", productPrice: 10.00, categoryId: 2});
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name 4", productPrice: 10.00, categoryId: 2});
    this.productsArray.push({ productImageUrl: '', productShortName: "Some Name 5", productPrice: 10.00, categoryId: 3});
    this.productsArray = this.productsArray.filter(i => i.categoryId == categoryId);
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
