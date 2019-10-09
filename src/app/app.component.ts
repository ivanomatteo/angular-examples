import { Component, OnInit } from '@angular/core';


 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'a8examples';

  nome = 'Salvatore';

  ngOnInit() {
   
  }


  log(x) {
    console.log('app.component_log: ', x);
  }

  alert(x) {
    alert('app.component_alert: ' + x);
  }


}
