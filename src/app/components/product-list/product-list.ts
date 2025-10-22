import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { HttpClient } from '@angular/common/http';
import { ProductListResponse } from '../../models/productListResponse';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
//onpush:değişiklikleri zorla uygulatıyoruz

//implement(oninit) zorunlu değil ama faydalı (yazım yanlışlarına karşı)
export class ProductList implements OnInit{
  productResponse!:ProductListResponse

  //Cons. parametreleri ekstra parametrelerle açılmak zorunda değil otomaitk this altına eklenir
  constructor(private httpClient:HttpClient, private changeDetector:ChangeDetectorRef) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.httpClient
    .get<ProductListResponse>("https://dummyjson.com/products")
    .subscribe({
      next:(response:ProductListResponse) => {
        this.productResponse = response;
        this.changeDetector.detectChanges()
      },
      error:(err:any) => {
        console.log("Hata alındı:", err)
      },
      complete: () => {
        console.log("Hata ya da cevap başarılı geldi. İstek bitti.")
      }
    }) //RxJS yapısının angulardaki kullanımı !!!
  }
}

//backendden gelen her cevap önyüzde modellenmeli