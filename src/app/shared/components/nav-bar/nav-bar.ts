import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    CommonModule,
    RouterLinkActive,
    
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  isMenuCollapsed = true;
  isScrolled = false;

  navItems = [
    { label: 'Inicio', route: '/home', fragment: null },
    { label: 'Proyectos', route: '/home', fragment: 'projects' },
    { label: 'Habilidades', route: '/home', fragment: 'skills' },
    { label: 'Sobre Mí', route: '/home', fragment: 'about' },
    { label: 'Contacto', route: '/home', fragment: 'contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu() {
    this.isMenuCollapsed = true;
  }

  scrollToSection(fragment: string | null) {
    this.closeMenu();
    
    if (fragment) {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }
}
