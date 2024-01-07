import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [NgbModalConfig, NgbModal],
})
export class ProductComponent {
  formData = {
    id: '',
    productName: '',
    brand: '',
    price: 0,
    category: '',
    details: '',
    images: [] as File[]
  };
  constructor(config: NgbModalConfig,
		private modalService: NgbModal,) {
      config.backdrop = 'static';
		  config.keyboard = false;
    }
  submitForm() {
    // Handle form submission logic here, e.g., sending data to backend
    console.log(this.formData);
    // Reset form after submission
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      id: '',
      productName: '',
      brand: '',
      price: 0,
      category: '',
      details: '',
      images: []
    };
  }

  handleImageChange(event: any) {
    this.formData.images = event.target.files;
  }
  open(content: any) {
		this.modalService.open(content);
	}
}
