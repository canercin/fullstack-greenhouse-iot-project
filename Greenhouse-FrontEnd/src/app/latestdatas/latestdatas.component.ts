import {Component, OnInit} from '@angular/core';
import {GreenhouseService} from "../service/greenhouse.service";
import {SensorData} from "../chartsbox/SensorDatas";

@Component({
  selector: 'app-latestdatas',
  standalone: true,
  imports: [],
  templateUrl: './latestdatas.component.html',
  styleUrl: './latestdatas.component.css'
})
export class LatestdatasComponent implements OnInit{

  sensorData: SensorData[] | any[] = [];

 constructor(private greenhouseService: GreenhouseService) {
 }

  ngOnInit(): void {
   this.greenhouseService.getLastTenData().subscribe(data => {
      this.sensorData = data;
   })
  }
}
