import { Component } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formInfo = {
    username: '',
    password: ''
  };

  users: any;
  error: string;

  constructor(private session: SessionService) {}
}
