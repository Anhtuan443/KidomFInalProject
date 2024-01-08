import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Catagory } from '../../../shared/models/Catagory';
import { CatagoryService } from '../../../services/catagory.service';
import { CartService} from '../../../services/cart.service';
// import { faStar} from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../../../item';


@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
  
  })
export class ProductDetailComponent implements OnInit {
    products: Product[] = [];
    catagorys: Catagory[] =[];
    categoryName: string = '';
    thumbnail: Product = new Product();
    quantity: number=1;
    relatedProducts: Product[] = [];
    isClicked: boolean = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private catagoryService: CatagoryService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router,

  ) {
    route.queryParams.subscribe(params => {
      productService.getDetail(params['id']).subscribe(res => {
        this.products = res;
        console.log(params['id']);
        console.log(this.products);
      });
      productService.getProductThumbnail(params['id']).subscribe(res => {
        this.thumbnail = res;
      });
      console.log(this.products);
    });
    this.catagorys= catagoryService.getAll(); 
    // this.relatedProducts = productService.getAll();
  }
  toggleHeart() {
    this.isClicked = !this.isClicked;
  }

//chọn số lượng
  increase(){
    this.quantity +=1;
  }
  decrease(){
    if (this.quantity > 1){
        this.quantity -=1;
    }
  }
  handleChange(event: any) { // Xử lý sự kiện khi giá trị thay đổi
    console.log('Quantity changed:', this.quantity);
  }
//------------------------------------------------

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      // Gọi phương thức hoặc service để lấy sản phẩm chi tiết (this.productServices.getDetail(productId))
      // Sau đó, gọi phương thức hoặc service để lấy các sản phẩm cùng danh mục
      this.productService.getProductsByCategory(this.thumbnail.category).subscribe(res => {
        this.relatedProducts = res;
      });
  });
  }

  changeThumbnail(index: number): void {
    let temp = this.thumbnail;

    this.thumbnail = this.products[index];
    this.products = this.products.slice(0, index).concat(this.products.slice(index + 1));
    this.products.push(temp);
  }



  // Gọi hàm addToCart từ CartService để thêm sản phẩm vào giỏ hàng
  addToCart(thumbnail: Product) {
    this.cartService.addToCart(thumbnail);
  }
  buyNow(thumbnail: Product) {
    this.cartService.addToCart(thumbnail);
    //Chuyển qua cart
    this.router.navigate(['/cart']);
  }

}
