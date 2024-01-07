import { Component } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  categories = [
    { label: 'Đồ chơi ngoài trời', value: 'ĐỒ CHƠI NGOÀI TRỜI' },
    { label: 'Búp bê - Gấu bông', value: 'BÚP BÊ - GẤU BÔNG' },
    { label: 'Thủ công - Mỹ thuật', value: 'THỦ CÔNG - MỸ THUẬT' },
    { label: 'Hoá trang', value: 'HOÁ TRANG' },
    { label: 'Thể thao', value: 'THỂ THAO' },
    { label: 'Trí tuệ', value: 'TRÒ CHƠI TRÍ TUỆ' }
  ];
  selectedCategory: string = ''; // Initial selected category
  filteredProducts: Product[] = [];

  constructor(private productServices: ProductService, private activatedRoute: ActivatedRoute, private cartService: CartService) {}
  ngOnInit(): void {
    this.productServices.getThumbnail().subscribe((data: Product[]) => {
      this.products = data;
      this.filteredProducts = this.products;

      this.activatedRoute.params.subscribe((params) => {
        if (params.searchTerm) {
          this.productServices.getAllProductsBySearchTerm(params.searchTerm).subscribe((searchResults: Product[]) => {
            this.filteredProducts = searchResults;
          });
        } else {
          this.filteredProducts = this.products;
        }
      });
    });
  }

  onCategoryChange(categoryValue: string): void {
    this.selectedCategory = categoryValue;
    if (categoryValue) {
      this.filteredProducts = this.products.filter(product => product.category === categoryValue);
    } else {
      this.filteredProducts = this.products;
    }
  }
  addToCart(product: Product) {
    //Thêm để check
    console.log('Adding to Cart:', product);
    // Gọi hàm addToCart từ CartService để thêm sản phẩm vào giỏ hàng
    this.cartService.addToCart(product);
  }
}