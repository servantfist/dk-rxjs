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
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ConfigMgrModule } from './configuration/config-mgr.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
        AppRoutingModule,
        BrowserAnimationsModule,
        ConfigMgrModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        PageNotFoundComponent,
        NavComponent,
        MessagesComponent
    ],
    providers: [HttpErrorHandler, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
