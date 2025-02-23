import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from "./components/product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {

}
