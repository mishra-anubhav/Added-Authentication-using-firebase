import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.less']
})
export class CopyrightComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';

  toggle() {
    this.show = !this.show;  

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
      

    else
      this.buttonName = "Show";
  }

  constructor() {  
   }

  ngOnInit() {

  }

}
