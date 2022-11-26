import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    showConfig = true;
    showDownloader = true;

    toggleConfig() { this.showConfig = !this.showConfig; }
    toggleDownloader() { this.showDownloader = !this.showDownloader; }

}
