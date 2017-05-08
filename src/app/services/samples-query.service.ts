import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class SamplesQueryService {

  constructor(
    private http: Http,
  ) {}

  getWorkExamples() {
    return this.http.get("/assets/black-and-white-portfolio/data-sources/work-examples.json")
    .map(res => res.json())
  }

  getCodeLab() {
    return this.http.get("/assets/black-and-white-portfolio/data-sources/code-lab.json")
    .map(res => res.json())
  }

}
