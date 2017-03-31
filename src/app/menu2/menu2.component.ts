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
MenuLinkCode:string = "";
MenuLinkTemplate:string = ".menu-item{\n}";

  constructor() {
  
  }

  checkIsThere(test:string){

    if(document.getElementById(test)){
      return true;
    }else{
      return false;
    }

  }

  setStyle(values:any){
   var splits = values.split(";");
   var selectedVar = splits[0];
   var valor = splits[1];
  
    

  if(selectedVar == 'Color'){
    this.Color = valor;

    if(!this.checkIsThere('colors')){
      console.log("is false adding html");
    this.MenuLinkCode += `<div id="colors" class="fields">color: ${ this.Color  };</div>`;
    }else{
      console.log("is true adding text");
        document.getElementById('colors').innerHTML="color:" + valor ;
        // criar hidden field com campos template para alterar e depois fazer verificação nestes campos alterar valor e depois display no html.
      }
  }
  if(selectedVar == 'FontSize') {
    this.FontSize = valor;
     if(!this.checkIsThere('fontsize')){
     this.MenuLinkCode += `<div id="fontsize" class="fields">font-size: ${this.FontSize};</div>`;
     }else{
       document.getElementById('fontsize').innerHTML=`font-size: ${this.FontSize};`;
     }
  }
  if(selectedVar == 'FontWeight') {
    this.FontWeight = valor;
     this.MenuLinkCode += `font-weight: ${this.FontWeight};\n`;
  }
  if(selectedVar == 'Border'){
     this.Border = valor;
      this.MenuLinkCode += `border: ${this.Border};\n`;
  }
  if(selectedVar == 'BorderTop') {
    this.BorderTop = valor;
    this.MenuLinkCode += `border-top: ${this.BorderTop};\n`;
  }
  if(selectedVar == 'BorderBottom') {
    this.BorderBottom = valor;
     this.MenuLinkCode += `border-bottom: ${this.BorderBottom};\n`;
  }
  if(selectedVar == 'BorderLeft') {
    this.BorderLeft = valor;
    this.MenuLinkCode += `border-left: ${this.BorderLeft};\n`;
  }
  if(selectedVar == 'BorderRight') {
    this.BorderRight = valor;
   this.MenuLinkCode += `border-right: ${this.BorderRight};\n`;
  }
  if(selectedVar == 'TextShadow') {
    this.TextShadow = valor;
   this.MenuLinkCode += `text-shadow: ${this.TextShadow};\n`;
  }
  if(selectedVar == 'Margin') {
    this.Margin = valor;
     this.MenuLinkCode += `margin: ${this.Margin};\n`;
  }
  if(selectedVar == 'MarginTop') {
    this.MarginTop = valor;
   this.MenuLinkCode += `margin-top: ${this.MarginTop};\n`;
  }
  if(selectedVar == 'MarginBottom') {
    this.MarginBottom = valor;
     this.MenuLinkCode += `margin-bottom: ${this.MarginBottom};\n`;
  }
  if(selectedVar == 'MarginLeft') {
    this.MarginLeft = valor;
    this.MenuLinkCode += `margin-left: ${this.MarginLeft};\n`;
  }
  if(selectedVar == 'MarginRight') {
    this.MarginRight = valor;
   this.MenuLinkCode += `margin-right: ${this.MarginRight};\n`;
  }
  if(selectedVar == 'Padding') {
    this.Padding = valor;
     this.MenuLinkCode += `padding: ${this.Padding};\n`;
  }
  if(selectedVar == 'PaddingTop') {
    this.PaddingTop = valor;
     this.MenuLinkCode += `padding-top: ${this.PaddingTop};\n`;
  }
  if(selectedVar == 'PaddingBottom'){ 
    this.PaddingBottom = valor;
     this.MenuLinkCode += `padding-bottom: ${this.PaddingBottom};\n`;
  }
  if(selectedVar == 'PaddingLeft') {
    this.PaddingLeft = valor;
     this.MenuLinkCode += `padding-left: ${this.PaddingLeft};\n`;
  }
  if(selectedVar == 'PaddingRight') {
     this.PaddingRight = valor;
     this.MenuLinkCode += `padding-right: ${this.PaddingRight};\n`;
  }
  
    
    this.MenuLinkTemplate =".menu-item{\n";
    this.MenuLinkTemplate +=this.MenuLinkCode;
    this.MenuLinkTemplate +="\n}";
    //document.getElementById("sass").innerHTML = this.MenuLinkTemplate;
   
    console.log("MenuLinkCode: " + this.MenuLinkCode);
    console.log("MenuLinkTemplate: " + this.MenuLinkTemplate);
  
   
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