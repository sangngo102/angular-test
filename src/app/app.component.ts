import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public dem: number = 600;
  public ngOnInit(): void {
    this.dem2();
  }
  public dem2() {
    this.dem--;
    setTimeout(() => {
      this.dem2(), 1000;
    });
  }
}
