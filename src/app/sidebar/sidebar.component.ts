import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  links = [
    { label: 'Home', route: '/home' },
    { label: 'Rockets', route: '/products' },
    { label: 'Clientes', route: '/customers' },
    // Otros enlaces
  ];
}
