import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'menu2-link',
  templateUrl: './menulinks.component.html',
  styleUrls: ['./menulinks.component.scss'],
 
})
export class MenuLink implements OnInit {
@Input() menulink: MenuLink;
@Input('MenuName') menuName:string;
@Input('Color') color:string;
@Input('FontSize') size:string;
@Input('FontWeight') weight:string;
@Input('Border') border:string;
@Input('BorderTop') borderTop:string;
@Input('BorderBottom') borderBottom:string;
@Input('BorderLeft') borderLeft:string;
@Input('BorderRight') borderRight:string;
@Input('TextShadow') textShadow:string;
@Input('Margin') margin:string;
@Input('MarginLeft') marginLeft:string;
@Input('MarginRight') marginRight:string;
@Input('MarginTop') marginTop:string;
@Input('MarginBottom') marginBottom:string;
@Input('Padding') padding:string;
@Input('PaddingLeft') paddingLeft:string;
@Input('PaddingRight') paddingRight:string;
@Input('PaddingTop') paddingTop:string;
@Input('PaddingBottom') paddingBottom:string;



linkstyles(){
  
  let styled= {
   
  'color':this.color,
  'font-size':this.size,
  'font-weight':this.weight,
  'border-top':this.borderTop,
  'border-right':this.borderRight,
  'border-bottom': this.borderBottom,
  'border-left': this.borderLeft,
  'border':this.border,
  'text-shadow':this.textShadow,
  'margin-top':this.marginTop,
  'margin-right':this.marginRight,
  'margin-bottom': this.marginBottom,
  'margin-left': this.marginLeft,
  'margin':this.margin,
  'padding-top':this.paddingTop,
  'padding-right': this.paddingRight,
  'padding-bottom': this.paddingBottom,
  'padding-left':this.paddingLeft,
  'padding':this.padding
  };

  return styled;
}
    constructor(){
      

    }

 

  ngOnInit() {
    console.log('Hello Menulinks');
  }

}