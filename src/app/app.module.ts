import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { GrapesjsComponent } from './grapesjs/grapesjs.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    GrapesjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
