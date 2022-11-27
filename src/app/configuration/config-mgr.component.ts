import { Component } from '@angular/core';

@Component({
    selector: 'pm-config-mgr',
    templateUrl: './config-mgr.component.html',
    styleUrls: ['./config-mgr.component.css']
})
export class ConfigMgrComponent {
    showConfig = true;
    showDownloader = true;

    toggleConfig() {
        this.showConfig = !this.showConfig;
    }
    toggleDownloader() {
        this.showDownloader = !this.showDownloader;
    }
}
