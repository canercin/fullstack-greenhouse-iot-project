import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

   protected isAdmin: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
        this.isAdmin = JSON.parse(String(localStorage.getItem('role') === 'ROLE_ADMIN'));
        console.log(this.isAdmin);
  }

  routeMain() {
    this.router.navigate(['main']).then();
  }

  routeAllUsers() {
    this.router.navigate(['allusers']).then();
  }

  routeAllDatas() {
    this.router.navigate(['alldatas']).then();
  }

  routeRegister() {
    this.router.navigate(['register']).then();
  }

  routeAverages() {
    this.router.navigate(['averages']).then();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']).then();
  }
}
