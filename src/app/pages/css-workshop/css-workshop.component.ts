import { Component, OnInit, OnDestroy } from '@angular/core';
import { SamplesQueryService } from "../../services/samples-query.service"

@Component({
  selector: 'app-css-workshop',
  templateUrl: './css-workshop.component.html',
  styleUrls: ['./css-workshop.component.scss']
})
export class CssWorkshopComponent implements OnInit, OnDestroy {

  bars = document.getElementsByClassName("fa-bars")[0]
  terminal = document.getElementsByClassName("fa-terminal")[0]
  menuContainer = document.getElementsByClassName("menu-container")[0]

  constructor() { }

  ngOnInit() {
    this.bars.classList.toggle("css-workshop-color")
    this.terminal.classList.toggle("css-workshop-color")
    this.menuContainer.classList.toggle("css-workshop-background-color")
  }

  ngOnDestroy() {
    this.bars.classList.toggle("css-workshop-color")
    this.terminal.classList.toggle("css-workshop-color")
    this.menuContainer.classList.toggle("css-workshop-background-color")
  }

}
