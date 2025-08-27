import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { ServicesComponentComponent } from '@components/services-component/services-component.component';
import { FooterComponent } from "@shared/common/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponentComponent, CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {

    showScrollButton = false;
  private scrollThreshold = 300;

  // Method to check scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }
  // Check if the scroll is greater than threshold
  checkScroll() {
    this.showScrollButton = window.pageYOffset > this.scrollThreshold;
  }

  // Scroll to top of the page
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
