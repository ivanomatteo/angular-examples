import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  template: `
    <p>
      Salve: {{nome}}
    </p>




    <button (click)="cambiaNome()">Cambia Nome</button><br><br><br>
    <button (click)="emitSaluta()">Saluta</button>

    <h5>Descrizione:</h5>
    <div [innerHTML]="descrizione"></div>

    <h5>Snacks:</h5>
    <div *ngFor="let s of snacks" >
      {{s}}
    </div>

  `,
  styles: []
})
export class InputOutputComponent implements OnInit {

  @Input() nome = 'ljsdfhklfjsdklfjklsdjfklsd';
  @Output() nomeChange = new EventEmitter<any>();


  @Input() descrizione;
  @Input() snacks = [];

  @Output() loaded = new EventEmitter<any>();
  @Output() saluta = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.loaded.emit('InputOutputComponent è pronto!!!');
  }
  emitSaluta() {
    this.saluta.emit('ciao');
  }
  cambiaNome() {
    if (this.nome === 'Salvatore') {
      this.nome = 'Daniel';
    } else {
      this.nome = 'Salvatore';
    }
    this.nomeChange.emit(this.nome);
  }

}
