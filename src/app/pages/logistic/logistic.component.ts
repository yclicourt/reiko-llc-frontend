import { Component } from '@angular/core';
import { FooterComponent } from "@shared/common/components/footer/footer.component";
import { CarouselImagesLogisticComponent } from "@shared/common/components/carousel-images-logistic/carousel-images-logistic.component";
import { ButtonUpComponent } from "@shared/common/components/button-up/button-up.component";

@Component({
  selector: 'app-logistic',
  standalone: true,
  imports: [FooterComponent, CarouselImagesLogisticComponent, ButtonUpComponent],
  templateUrl: './logistic.component.html',
  styleUrl: './logistic.component.css'
})
export default class LogisticComponent {

}
