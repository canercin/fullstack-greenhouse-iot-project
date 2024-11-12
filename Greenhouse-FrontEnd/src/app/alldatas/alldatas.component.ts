import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {GreenhouseService} from "../service/greenhouse.service";
import {SensorData} from "../chartsbox/SensorDatas";
import {NgSwitch} from "@angular/common";

@Component({
  selector: 'app-alldatas',
  standalone: true,
  imports: [
    SidebarComponent,
    NgSwitch
  ],
  templateUrl: './alldatas.component.html',
  styleUrl: './alldatas.component.css'
})
export class AlldatasComponent implements OnInit{

  sensorData: SensorData[] | any[] = [];

  constructor(private greenhouseService: GreenhouseService) {}


  ngOnInit() {
    this.greenhouseService.getDatas().subscribe(data => {
      this.sensorData = data;
    })
  }
}
