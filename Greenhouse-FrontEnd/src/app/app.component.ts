import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AllusersComponent} from "./allusers/allusers.component";
import {MainComponent} from "./main/main.component";
import {NgApexchartsModule} from 'ng-apexcharts';
import {ChartsComponent} from "./charts/charts.component";
import {ChartsboxComponent} from "./chartsbox/chartsbox.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AveragechartComponent} from "./averagechart/averagechart.component";
import {AveragesComponent} from "./averages/averages.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, AllusersComponent, MainComponent, ChartsComponent, NgApexchartsModule, ChartsboxComponent, SidebarComponent, ReactiveFormsModule, AveragechartComponent, AveragesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sera';
}
