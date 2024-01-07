import { Component } from '@angular/core';
import { Banner } from '../../../shared/models/Banner';
import { BannerService } from '../../../services/banner.service';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';
import { Catagory } from '../../../shared/models/Catagory';
import { CatagoryService } from '../../../services/catagory.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../../item';
import { CartService } from '../../../services/cart.service';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  banners: Banner[] = [];
  products: Product[] = [];
  catagorys: Catagory[] =[];

  // constructor(private bannerServices: BannerService, private productServices: ProductService, private catagoryServices: CatagoryService) { 
  //   this.banners = bannerServices.getAll();
  //   this.products = productServices.getThumbnail();
  //   this.catagorys= catagoryServices.getAll()

  constructor(
    private cartService: CartService,
    private bannerServices: BannerService,
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    private catagoryServices: CatagoryService,
      // Sửa tên thành activatedRoute
  ) {

    

    this.banners = bannerServices.getAll();

    productServices.getThumbnail().subscribe(res => {
      this.products = res;
    });

    this.catagorys = catagoryServices.getAll();

    console.log(this.products);

    let observeProduct: Observable<Product[]>;



    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        observeProduct = this.productServices.getAllProductsBySearchTerm(params.searchTerm);
      } else {
        observeProduct = productServices.getThumbnail();
      }

      observeProduct.subscribe(res => {
        this.products = res;
      })
    });
  }

  addToCart(product: Product) {
    //Thêm để check
    console.log('Adding to Cart:', product);
    // Gọi hàm addToCart từ CartService để thêm sản phẩm vào giỏ hàng
    this.cartService.addToCart(product);
  }
}

