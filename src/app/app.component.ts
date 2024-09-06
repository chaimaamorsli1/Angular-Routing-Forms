import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'routing-demo';
  size: NzButtonSize = 'large';
}
