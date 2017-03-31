import { Component, OnInit } from '@angular/core';
import{MenuItem} from './menu.model';

@Component({
  selector: 'menu-comp',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menuItem = MenuItem;

  constructor() {
    // Do stuff
   
  }

  

  addMenuItem(color:string, lineHeight:string, fontSize:string, border:string):string{
        var item = `
        <li style="display:inline-block;
        color:`+ color +`;
        line-height:`+lineHeight+`;
        font-size:`+fontSize+`;
        border:`+border+`;
        ">Menu Item
        </li>` ;

        return item;
    }

    QtdLinks(value) {
      console.log("Changed to " + value);
      var menuhead = document.getElementById("menumock");
      var items="";
      var i;
      for (i=0;i<value; i++){
          console.log("inside the loop");
          items += this.addMenuItem("#000", "20px", "14px", "1px solid #111");
      }
     menuhead.innerHTML = items;
      
  }

  ngOnInit() {
    console.log('Hello Menu');
  }

}