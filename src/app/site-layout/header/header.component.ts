import { ProductService } from './../../products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm:any

  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
  }
search(event:any){
 this.searchTerm = event.target.value
 this.ProductService.search.next(this.searchTerm)

}
}

