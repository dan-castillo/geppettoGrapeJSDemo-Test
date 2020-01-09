import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrapejsComponent } from './grapejs/grapejs.component';
import { TutorialComponent } from './tutorial/tutorial.component';


const routes: Routes = [
  {
    path: 'grapesJs',
    component: GrapejsComponent
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
