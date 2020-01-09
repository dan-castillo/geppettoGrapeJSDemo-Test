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
  private addStyles = [];
  private addScripts = [];
  private editor: any;
  private blockManager: any;
  ngOnInit() {
    this.editor = this.initializeEditor();
    this.blockManager = this.editor.BlockManager;
    this.blockManager.add('my-first-block', { // create my-first-block
      label: 'Test Dhina',
      content: '<div class="my-block">This is a simple block</div>',
    });

    this.blockManager.get('my-first-block').set({
      label: 'Updated simple block', // Update my-first-block attributes
      attributes: {
        title: 'My title'
      }
    });
    this.blockManager.add('my-map-block', {
      label: 'Simple map block',
      content: {
        type: 'map', // Built-in 'map' component
        style: {
          height: '350px'
        },
        removable: false, // Once inserted it can't be removed
      }
    });

    this.blockManager.add('the-row-block', {
      label: '2 Columns',
      content: '<div class="row" data-gjs-droppable=".row-cell" data-gjs-custom-name="Row">' +
          '<div class="row-cell" data-gjs-draggable=".row">Div 1</div>' +
          '<div class="row-cell" data-gjs-draggable=".row">Div 2</div>' +
        '</div>',
    });
     // Trait Addition - Html element Attribute addition
    this.editor.DomComponents.addType('input', {
      isComponent: el => el.tagName === 'INPUT',
      model: {
        defaults: {
          traits: [
            // Strings are automatically converted to text types
            'name', // Same as: { type: 'text', name: 'name' }
            'placeholder',
            {
              type: 'select', // Type of the trait
              label: 'Type', // The label you will see in Settings
              name: 'type', // The name of the attribute/property to use on component
              options: [
                { id: 'text', name: 'Text'},
                { id: 'email', name: 'Email'},
                { id: 'password', name: 'Password'},
                { id: 'number', name: 'Number'},
              ]
            }, {
              type: 'checkbox',
              name: 'required',
          }],
          // As by default, traits are binded to attributes, so to define
          // their initial value we can use attributes
          attributes: { type: 'text', required: true },
        },
      },
  });

  }

  goBack() {
    this.router.navigateByUrl('');
  }

  private initializeEditor(): any {
    this.addStyles.push(`./assets/common/sample.css`); // Adding Custom css in to GrapesJs
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
          navbarOpts: false,
          countdownOpts: false,
          // formsOpts: false,
          blocksBasicOpts: {
            blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3'],
            flexGrid: false,
            stylePrefix: 'lala-'
          }
        }
      },
      canvas: {
        styles: this.addStyles, // Wiring the Custom CSS in to GrapesJs Canvas
      }
    });
  }

}

