import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenuVisibility() {
    if(this.menuVisible && screen.width < 1024) {
      return {"left": "0px"}
    } else if (this.menuVisible && screen.width >= 1024) {
      return {"left": "40px"}
    } else {
      return {"left": "-100%"}
    }
  }

}
