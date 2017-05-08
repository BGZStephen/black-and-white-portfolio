import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { SamplesQueryService } from "./services/samples-query.service"

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkExamplesComponent } from './pages/work-examples/work-examples.component';
import { CodeLabComponent } from './pages/code-lab/code-lab.component';
import { CssWorkshopComponent } from './pages/css-workshop/css-workshop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WorkExamplesComponent,
    CodeLabComponent,
    CssWorkshopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [SamplesQueryService],
  bootstrap: [AppComponent]
})

export class AppModule {}
