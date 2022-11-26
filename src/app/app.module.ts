import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

const materialModules = [CommonModule, MatCardModule, MatCheckboxModule];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
        AppRoutingModule,
        BrowserAnimationsModule,
        materialModules
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        PageNotFoundComponent,
        NavComponent,
        MessagesComponent,
        ConfigComponent,
        DownloaderComponent
    ],
    providers: [HttpErrorHandler, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
