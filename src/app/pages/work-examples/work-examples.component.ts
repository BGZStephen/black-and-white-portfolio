import { Component, OnInit, OnDestroy } from '@angular/core';
import { SamplesQueryService } from "../../services/samples-query.service"

@Component({
  selector: 'app-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.scss']
})
export class WorkExamplesComponent implements OnInit, OnDestroy {

  workExamples: Array<object>
  bars = document.getElementsByClassName("fa-bars")[0]
  terminal = document.getElementsByClassName("fa-terminal")[0]
  menuContainer = document.getElementsByClassName("menu-container")[0]

  constructor(
    private samplesQuery: SamplesQueryService
  ) { }

  ngOnInit() {
    this.samplesQuery.getWorkExamples()
    .subscribe(res => {
      console.log(res)
      this.workExamples = res
    })
    this.bars.classList.toggle("work-samples-color")
    this.terminal.classList.toggle("work-samples-color")
    this.menuContainer.classList.toggle("work-samples-background-color")
  }

  ngOnDestroy() {
    this.bars.classList.toggle("work-samples-color")
    this.terminal.classList.toggle("work-samples-color")
    this.menuContainer.classList.toggle("work-samples-background-color")
  }

}
