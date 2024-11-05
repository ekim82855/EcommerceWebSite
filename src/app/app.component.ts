import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { error } from 'node:console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EcommerceWebsite';
  registerObj: any = {
    "UserID": 1, 
    "UserName": "",
    "Password": "",
    "ContactNumber": ""
}
  loginObj: any = {
    "UserName": "",
    "UserPassword": ""
  }
  loggedObj: any = {};
  cartItems: any[]= [];
  loginModelClass: string = '';
  constructor(private productSrv: ProductService) {
    // const localData = localStorage.getItem('amazon_user');
    // if(localData != null) {
    //   const parseObj = JSON.parse(localData);
    //   this.loggedObj = parseObj;
    //   this.getCartData(this.loggedObj.custId)
    // }
    // this.productSrv.cartUpdated.subscribe((res: boolean)=>{
    //   if(res) {
    //     this.getCartData(this.loggedObj.custId)
    //   }
    // })
    // this.productSrv.showLogin.subscribe((res: boolean)=>{
    //   if(res) {
    //      this.loginModelClass = 'show';
    //   }
    // })
  }

  registerUser() {
    this.productSrv.register(this.registerObj).subscribe({
      next: (data: any) => {
        //change later, API response return success status
        console.log(this.registerObj);
        console.log(data);
        if(data.userID != null) {
          this.loggedObj = data;
          this.loggedObj.name = data.UserName;
          alert("User Creation Done");
        }
      },
      error: (error: any) => {
        alert(error.error.detail);
      }
    })
  }

  onLogin() {
    // this.productSrv.login(this.loginObj).subscribe((res: any)=> {
    //   if(res.result) {
    //     alert("User Login Success");
    //     this.loggedObj = res.data;
    //     this.loginModelClass = '';
    //     localStorage.setItem('amazon_user', JSON.stringify(res.data));
    //     this.getCartData(this.loggedObj.custId)
    //   } else {
    //     alert(res.message)
    //   }
    // })
    alert("Logging in");
  }
  
  removeItem(cartId: number) {
    // this.productSrv.removeProductFromCart(cartId).subscribe((res: any)=> {
    //   if(res.result) {
    //     alert("Item Removed"); 
    //     this.getCartData(this.loggedObj.custId)
    //   } else {
    //     alert(res.message)
    //   }
    // })
  }  

  getCartData(id: number) {
    // this.productSrv.getAddtocartdataByCust(id).subscribe((res: any)=>{
    //   this.cartItems = res.data;
    // })
  }
}