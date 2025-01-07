import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  {

  isSidenavOpen = false; // Estado del sidenav

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  closeSidenav() {
    this.isSidenavOpen = false;
  }
  menuItems = [
    { label: 'Home', link: '/home', icon: 'fas fa-home' },
    { label: 'About', link: '/about', icon: 'fas fa-user' },
    { label: 'Resume', link: '/resume', icon: 'fas fa-file-alt' },
    { label: 'Portfolio', link: '/portfolio', icon: 'fas fa-briefcase' },
    { label: 'Contact', link: '/contact', icon: 'fas fa-envelope' }
  ];

  // Efecto de particulas
  particlesOptions = {
    background: {
      color: {
        value: "#000000", 
      },
    },
    particles: {
      number: {
        value: 100, // Número de partículas
      },
      color: {
        value: "#ffffff", // Color de las partículas
      },
      size: {
        value: 5, // Tamaño de las partículas
      },
      move: {
        speed: 2, // Velocidad de movimiento
      },
    },
  };
}

