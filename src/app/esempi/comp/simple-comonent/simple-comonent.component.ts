import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-simple-comonent',
  templateUrl: './simple-comonent.component.html',
  styleUrls: ['./simple-comonent.component.scss']
})
export class SimpleComonentComponent implements OnInit {


  @Input() nome = 'Daniel';
  @Output() loaded = new EventEmitter<any>();


  _oggi;

  giorniSettimana = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];

  stileParagrafo = { 'font-weight': 'bold', 'font-size': '1.5em' };

  constructor() { }

  ngOnInit() {

    /*  const intrval = setInterval(() => {
       if (this.giorniSettimana.length) {
         this.giorniSettimana.pop();
       } else {
         clearInterval(intrval);
       }
     }, 1000); */


     this.loaded.emit('ok sono pronto!!!');

  }

  saluta() {
    alert('ciao');
  }


  get oggi() {
    if (!this._oggi) {
      this._oggi = this.getOggi();
    }
    return this._oggi;
  }



  getOggi() {
    const day = new Date().getDay();
    console.log('day: ', day);

    return this.giorniSettimana[day - 1];
  }

}
