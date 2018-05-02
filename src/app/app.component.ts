import { Component } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/bootstrap.min.css'],
  providers: [NgbAlertConfig]
})
export class AppComponent {
  title = 'Developer Evaluation';
  subtitle = 'Built on Angular';

  constructor(alertConfig: NgbAlertConfig) {
    alertConfig.type = 'danger';
  }

}
