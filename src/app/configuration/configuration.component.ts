import { Component } from '@angular/core';

@Component({
    selector: 'pm-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
    showConfig = true;
    showDownloader = true;

    toggleConfig() {
        this.showConfig = !this.showConfig;
    }
    toggleDownloader() {
        this.showDownloader = !this.showDownloader;
    }
}
