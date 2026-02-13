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
  cta: CtaConfig = { text: 'Request Service', link: ['/'] };

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
        link: ['/'],
        queryParams: { service: 'Transport' },
      };
      return;
    }

    if (clean.startsWith('/storage')) {
      this.cta = {
        text: 'Request Storage Service',
        link: ['/'],
        queryParams: { service: 'Storage' },
      };
      return;
    }

    if (clean.startsWith('/logistic')) {
      this.cta = {
        text: 'Request Logistics Service',
        link: ['/'],
        queryParams: { service: 'Logistic' },
      };
      return;
    }

    this.cta = { text: 'Request Service', link: ['/'] };
  }
}