import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';

@Component({
  selector: 'app-grapesjs',
  templateUrl: './grapesjs.component.html',
  styleUrls: ['./grapesjs.component.css']
})
export class GrapesjsComponent implements OnInit {

  constructor() { }


  public grapesjs: any;

  ngOnInit() {


    this.grapesjs = grapesjs.init({

      container: '#gjs',
      formElement: true,
      height: '600px',
      width: 'auto',
      storagemanager: true,
      draggable: true,
      plugins: ['gjs-preset-webpage'],
      pulginsOpts: {
        'gjs-preset-webpage': {
        }
      },
      panels: {
        defaults: []
      }

    });

    this.custom_block();
  }


  private custom_block() {
    this.grapesjs.BlockManager.add('dynamicDropdown', {
      id: 'dynamicDropdown',
      label: `\n  <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n
      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,
      16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero">
      </path> \n
      <polygon class="gjs-block-svg-path" transform="translate(18.500000,12.000000) scale(1, -1) translate(-18.500000, -12.000000)"
      points = "18.5 11 20 13 17 13"> </polygon>\n
      <rect class="gjs-block-svg-path" x="4" y="11.5" width ="11" height="1"></rect>\n
         </svg>\n  <div class="gjs-block-label"> Dynamic Dropdown </div>`,
      category: 'special',
      content: `<div style="padding-top:10px; padding-right: 2px; padding-left: 2px; padding-bottom: 10px">
      <select>
      <option value="1">1</option>
      </select>
      </div>`,
      draggable: true,
      removeable: true
    });

    this.custom_traits();
  }

  private custom_traits() {

    const comps = this.grapesjs.DomComponents;
    const defaultType = comps.getType('default');
    const defaultModel = defaultType.model;
    comps.addType('select', {
      model: {
        defaults: {
          draggable: '*',
          droppable: false,
          traits: [
            'name',
            {
              type: 'select',
              label: 'Type',
              name: 'events',
              changeProp: 1,
              options: [
                { key: 'click', value: 'onClick' },
                { key: 'focus', value: 'onFocus' },
                { key: 'blur', value: 'onBlur' }
              ]
            },
            {
              text: 'actionButton',
              label: 'Flow',
              name: 'actionbutton',
              type: 'button',
              changeProp: 1
            }
          ]
        },
        init() {
          this.listenTo(this, 'change:events', this.handlechangetype);
          this.listenTo(this, 'click:actionbutton', this.buttonaction);
        },
        handlechangetype() {
          console.log('Input type changed to : ', this.get('traits').where({
            name: 'events'
          })[0]);
        },
        buttonaction() {
          console.log('button action');
        }
      },
      view: defaultType.view
    });
  }
}
