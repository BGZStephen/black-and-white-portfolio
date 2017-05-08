import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { WorkExamplesComponent } from "./pages/work-examples/work-examples.component"
import { CodeLabComponent } from "./pages/code-lab/code-lab.component"
import { CssWorkshopComponent } from "./pages/css-workshop/css-workshop.component"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "work-examples", component: WorkExamplesComponent},
  {path: "code-lab", component: CodeLabComponent},
  {path: "css-workshop", component: CssWorkshopComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
