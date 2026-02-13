import { Component } from '@angular/core';
import { FooterComponent } from "@shared/common/components/footer/footer.component";
import { CarouselImagesStorageComponent } from "@shared/common/components/carousel-images-storage/carousel-images-storage.component";
import { ButtonUpComponent } from "@shared/common/components/button-up/button-up.component";
import { NavbarComponent } from "@shared/navbar/navbar.component";

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [FooterComponent, CarouselImagesStorageComponent, ButtonUpComponent, NavbarComponent],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css'
})
export default class StorageComponent {

}
