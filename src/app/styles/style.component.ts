import { Component, EventEmitter } from '@angular/core';


@Component({
  selector: 'drop-styles',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss'],
  outputs:['setVariable']
})
export class StyleComponent{
setVariable:EventEmitter<any> = new EventEmitter<any>();
setValue:EventEmitter<any> = new EventEmitter<any>();
Color:string ;
FontSize:number;
FontWeight:string;
Border:string;
BorderTop:string;
BorderBottom:string;
BorderLeft:string;
BorderRight:string;
TextShadow:string;
Margin:string;
MarginLeft:number;
MarginRight:number;
MarginTop:number;
MarginBottom:number;
Padding:string;
PaddingLeft:number;
PaddingRight:number;
PaddingTop:number;
PaddingBottom:number;  


  constructor(){
   
    
  }

  ngAfterViewChecked()
  {
    console.log( "some fucking error" );
    
   
  }

  

  setStyle(selectedVar,valor){
    
    this.setVariable.emit(selectedVar+";"+valor);    
 }

 



}