import { Component, OnInit } from '@angular/core';
import { Platform}  from '@angular/cdk/platform'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  constructor(private platform: Platform){

  }
  ngOnInit(): void {
    window.alert(this.platform.IOS);
  }
}
