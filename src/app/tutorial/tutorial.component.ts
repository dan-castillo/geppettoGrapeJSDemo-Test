import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor(private routes: Router) { }

  private title = 'GrapesJs';
  ngOnInit() {
  }

  goToWorkSpace() {
    this.routes.navigateByUrl('grapesJs');
  }
}
