import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesComponentComponent } from '@components/services-component/services-component.component';
import { FooterComponent } from '@shared/common/components/footer/footer.component';
import { ContactComponent } from '@features/contact/contact.component';
import { ButtonUpComponent } from '@shared/common/components/button-up/button-up.component';
import { NavbarComponent } from "@shared/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServicesComponentComponent,
    CommonModule,
    FooterComponent,
    ContactComponent,
    ButtonUpComponent,
    NavbarComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
