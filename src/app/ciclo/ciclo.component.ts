import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  OnDestroy, 
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent 
implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial : number =10;

  constructor() {
    this.log('contrutor');
   }

   ngOnChanges(){
     this.log('ngOnChanges');
   }

   ngOnInit() {
     this.log('ngOnInit');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
