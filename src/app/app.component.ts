import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tarefa = "";
  public items = [];

  valor: number = 0;

  deletarCiclo: boolean = false;


  mudarValor(){
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }

  
  addTarefa(){
    this.items.push(this.tarefa);
  }
  removeTarefa(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
  
}