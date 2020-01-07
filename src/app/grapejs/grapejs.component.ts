import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';


@Component({
  selector: 'app-grapejs',
  templateUrl: './grapejs.component.html',
  styleUrls: ['./grapejs.component.css']
})
export class GrapejsComponent implements OnInit {

  constructor(private router: Router) { }

  private editor: any;
  ngOnInit() {
    this.editor = this.initializeEditor();
    this.editor.on('asset:add', () => {
      console.log('Asset add fired');
      // this.editor.runCommand('open-assets');
    });
  }

  goBack() {
    this.router.navigateByUrl('');
  }

  get editorData() {
    return this.editor;
  }
  private initializeEditor(): any {
    console.dir(window);
    return grapesjs.init({
      container: '#gjs',
       // Fit to Screen size
       height: '500px',
       width: 'auto',
      autorender: true,
      forceClass: false,
      components: '',
      style: '',
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          // navbarOpts: false,
          // countdownOpts: false,
          // formsOpts: false,
          // blocksBasicOpts: {
          //   blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3'],
          //   flexGrid: false,
          //   stylePrefix: 'lala-'
          // }
        }
      }
    });
  }

}
