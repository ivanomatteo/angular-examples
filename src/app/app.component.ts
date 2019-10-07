import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'a8examples';

  nome = 'Salvatore';


  log(x) {
    console.log('app.component_log: ', x);
  }

  alert(x) {
    alert('app.component_alert: ' + x);
  }


}
