import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrapejsComponent } from './grapejs/grapejs.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    GrapejsComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
