import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {ChartsboxComponent} from "../chartsbox/chartsbox.component";
import {LatestdatasComponent} from "../latestdatas/latestdatas.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SidebarComponent,
    ChartsboxComponent,
    LatestdatasComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {}
