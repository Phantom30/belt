import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  AllProducts;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.GetAllProduct();
  }
  GetAllProduct(){
    let obs = this._httpService.GetAllProduct();
    obs.subscribe(data => {
      console.log("get All Products",data)
      this.AllProducts = data;
      }
    )
  }
}
