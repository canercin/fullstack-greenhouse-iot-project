import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {AllusersComponent} from "./allusers/allusers.component";
import {MainComponent} from "./main/main.component";
import {AlldatasComponent} from "./alldatas/alldatas.component";
import {LoginComponent} from "./login/login.component";
import {AveragesComponent} from "./averages/averages.component";

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'allusers', component: AllusersComponent },
  { path: 'alldatas', component: AlldatasComponent},
  { path: "login", component: LoginComponent },
  { path: "main", component: MainComponent},
  { path: 'averages', component: AveragesComponent},
  { path: '', component: LoginComponent}
];
