/*import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}*/


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

type CtaConfig = { text: string; link: any[]; queryParams?: Record<string, string> };

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  cta: CtaConfig = { text: 'Request Service', link: ['/contact'] };

  constructor(private router: Router) {
    // set inicial
    this.updateCTA(this.router.url);

    // updates en navegación
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.updateCTA(e.urlAfterRedirects));
  }

  private updateCTA(url: string) {
    const clean = url.split('?')[0].toLowerCase();

    if (clean.startsWith('/transport')) {
      this.cta = {
        text: 'Request Transport Service',
        link: ['/contact'],
        queryParams: { service: 'transport' },
      };
      return;
    }

    if (clean.startsWith('/storage')) {
      this.cta = {
        text: 'Request Storage Service',
        link: ['/contact'],
        queryParams: { service: 'storage' },
      };
      return;
    }

    if (clean.startsWith('/logistic')) {
      this.cta = {
        text: 'Request Logistics Service',
        link: ['/contact'],
        queryParams: { service: 'logistic' },
      };
      return;
    }

    this.cta = { text: 'Request Service', link: ['/contact'] };
  }
}