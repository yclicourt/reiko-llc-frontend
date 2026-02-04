import { Component } from '@angular/core';
import { CarouselImagesComponent } from "@shared/common/components/carousel-images/carousel-images.component";
import { FooterComponent } from "@shared/common/components/footer/footer.component";
import { ButtonUpComponent } from "@shared/common/components/button-up/button-up.component";

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [CarouselImagesComponent, FooterComponent, ButtonUpComponent],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.css'
})
export default class TransportComponent {

}
