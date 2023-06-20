import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Rocket {
  name: string;
  description: string;
  flickr_images: string[];
  diameter: {
    meters: number;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: Rocket[] = [];
  currentImageIndex = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Rocket[]>('https://api.spacexdata.com/v4/rockets')
      .subscribe(
        (data: Rocket[]) => {
          this.data = data;
        },
        (error) => {
          console.log('Error al obtener los datos de la API:', error);
        }
      );
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.data.length;
  }

  showPreviousImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.data.length) % this.data.length;
  }
}