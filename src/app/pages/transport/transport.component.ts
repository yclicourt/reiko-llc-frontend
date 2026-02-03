import { Component } from '@angular/core';
import { CarouselImagesComponent } from "@shared/common/components/carousel-images/carousel-images.component";

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [CarouselImagesComponent],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.css'
})
export default class TransportComponent {

}
