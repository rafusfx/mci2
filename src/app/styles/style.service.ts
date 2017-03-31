import { Injectable }              from '@angular/core';
import { Subject }          from 'rxjs/Subject';



@Injectable()
export class StyleService {
   

private selectedVar  = new Subject<string>();  
private valor  = new Subject<string>();  
  // Observable string streams
 
selectedVar$ = this.selectedVar.asObservable();
valor$ = this.valor.asObservable();
    // Service message commands
  publishData(selecteddata: string,valordata:string) {
    this.selectedVar.next(selecteddata);
    this.valor.next(valordata);
  }




}