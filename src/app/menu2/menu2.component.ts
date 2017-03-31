import { Component, OnInit } from '@angular/core';

import{MenuLink} from './menulinks.component';
import{StyleComponent} from '../styles/style.component';

@Component({
  
  selector: 'menu2-comp',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss'],
 
})

export class MenuComponent2 implements OnInit {
menulinks: MenuLink[];
styleDrops:StyleComponent[]=[];
MenuName: string = "MenuLink";
Color:string = "black";
FontSize:number = 12;
FontWeight:string = "bold";
Border:string ="1px solid #000";
BorderTop:string ="none";
BorderBottom:string="none";
BorderLeft:string="none";
BorderRight:string="none";
TextShadow:string="none";
Margin:string="0px 0px 0px 0px";
MarginLeft:number=0;
MarginRight:number=0;
MarginTop:number=0;
MarginBottom:number=0;
Padding:string="0px 0px 0px 0px";
PaddingLeft:number=0;
PaddingRight:number=0;
PaddingTop:number=0;
PaddingBottom:number=0;  
MenuLinkCode:string = "{";

  constructor() {
  
  }

  setStyle(values:any){
   var splits = values.split(";");
   var selectedVar = splits[0];
   var valor = splits[1];
   

  if(selectedVar == 'Color'){
    this.Color = valor
    this.MenuLinkCode += 'color:'+ valor + ',';
  };
  if(selectedVar == 'FontSize') {
    this.FontSize = valor
   
  };
  if(selectedVar == 'FontWeight') this.FontWeight = valor;
  if(selectedVar == 'Border') this.Border = valor;
  if(selectedVar == 'BorderTop') this.BorderTop = valor;
  if(selectedVar == 'BorderBottom') this.BorderBottom = valor;
  if(selectedVar == 'BorderLeft') this.BorderLeft = valor;
  if(selectedVar == 'BorderRight') this.BorderRight = valor;
  if(selectedVar == 'TextShadow') this.TextShadow = valor;
  if(selectedVar == 'Margin') this.Margin = valor;
  if(selectedVar == 'MarginTop') this.MarginTop = valor;
  if(selectedVar == 'MarginBottom') this.MarginBottom = valor;
  if(selectedVar == 'MarginLeft') this.MarginLeft = valor;
  if(selectedVar == 'MarginRight') this.MarginRight = valor;
  if(selectedVar == 'Padding') this.Padding = valor;
  if(selectedVar == 'PaddingTop') this.PaddingTop = valor;
  if(selectedVar == 'PaddingBottom') this.PaddingBottom = valor;
  if(selectedVar == 'PaddingLeft') this.PaddingLeft = valor;
  if(selectedVar == 'PaddingRight') this.PaddingRight = valor;
}

   addComboStyle(){
    this.styleDrops.push(new StyleComponent());
  }



  AddLinks(numoflinks:number){
    this.menulinks=[];
    var i;
    for(i=0;i<numoflinks;i++){
        var newlink = new MenuLink();
        this.menulinks.push(newlink);
    }
  }

 
  /*FontSize(size:number){
    console.log("returned "+ size );
    return size;
  }

  changeFontSize(fontSize:number){
    console.log("changed to "+ fontSize );
    this.FontSize(fontSize);
  }*/

  changeTab(tab:string){
    event.preventDefault();
    let tabPage = document.getElementById(tab);
   
    let elements : HTMLCollectionOf<Element> = document.getElementsByClassName("tab-pane");
    let elementsArr = Array.prototype.slice.call(elements);
   
    let i;
    for( i=0;i< elements.length;i++){

      if(tabPage == elementsArr[i]){
          elementsArr[i].style.display="block";
      }else{
          elementsArr[i].style.display="none";
      }
    }

  }

  ngOnInit() {
    console.log('Hello Menu2');
  }

}