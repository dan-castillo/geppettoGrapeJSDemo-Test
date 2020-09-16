import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrapesjsComponent } from './grapesjs/grapesjs.component';
import { TutorialComponent } from './tutorial/tutorial.component';


const routes: Routes = [
  {
    path: 'grapesJs',
    component: GrapesjsComponent
  },
  {
    path: '',
    component: TutorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
