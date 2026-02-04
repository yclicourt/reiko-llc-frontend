import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-up.component.html',
  styleUrl: './button-up.component.css',
})
export class ButtonUpComponent {
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
