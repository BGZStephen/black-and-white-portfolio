import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import "rxjs/Rx"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuVisible: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  toggleMenuVisibility() {
    if(this.menuVisible && screen.width < 1024) {
      return {"left": "0px"}
    } else if (this.menuVisible && screen.width >= 1024) {
      return {"left": "40px"}
    } else  if (!this.menuVisible && screen.width < 1024){
      return {"left": "-100%"}
    } else {
      return {"left": "-400px"}
    }
  }

}
