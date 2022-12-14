import { Component } from '@angular/core';
import { DownloaderService } from './downloader.service';

@Component({
    selector: 'app-downloader',
    templateUrl: './downloader.component.html',
    styleUrls: ['./downloader.component.css'],
    providers: [ DownloaderService ]
})
export class DownloaderComponent {
    contents: string | undefined;
    constructor(private downloaderService: DownloaderService) {}

    clear() {
        this.contents = undefined;
    }

    download() {
        this.downloaderService.getTextFile('assets/textfile.txt')
            .subscribe(results => this.contents = results);
    }
}
