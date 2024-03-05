import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  cityName: string = 'Kochi';
  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  weatherData?: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  convertMsToKmh(metersPerSecond: number): number {
    return metersPerSecond * 3.6;
  }
  convertMbToBar(millibars: number): number {
    return millibars / 1000;
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
