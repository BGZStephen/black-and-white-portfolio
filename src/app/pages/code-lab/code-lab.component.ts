import { Component, OnInit } from '@angular/core';
import { SamplesQueryService } from "../../services/samples-query.service"

@Component({
  selector: 'app-code-lab',
  templateUrl: './code-lab.component.html',
  styleUrls: ['./code-lab.component.scss']
})
export class CodeLabComponent implements OnInit {

  codelabExamples: Array<object>
  bars = document.getElementsByClassName("fa-bars")[0]
  terminal = document.getElementsByClassName("fa-terminal")[0]
  menuContainer = document.getElementsByClassName("menu-container")[0]

  constructor(
    private samplesQuery: SamplesQueryService
  ) { }

  ngOnInit() {
    this.samplesQuery.getCodeLab()
    .subscribe(res => {
      console.log(res)
      this.codelabExamples = res
    })

    this.bars.classList.toggle("code-lab-color")
    this.terminal.classList.toggle("code-lab-color")
    this.menuContainer.classList.toggle("code-lab-background-color")
  }

    ngOnDestroy() {
      this.bars.classList.toggle("code-lab-color")
      this.terminal.classList.toggle("code-lab-color")
      this.menuContainer.classList.toggle("code-lab-background-color")
    }

}
