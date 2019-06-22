import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { MatIconModule, MatMenuModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { MTDApp } from './app.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LogoAnime } from '../pages'
import { BookmarkService, MTDService } from '../services'
import { PipesModule } from '../pipes/pipes.module'
import { EntryListModule } from '../pages/shared/entry-list.module'
import { WordModalPageModule } from '../pages/shared/word-modal.module';
import { SettingsModule } from '../pages/shared/settings.module'
import { SettingsDialog } from '../pages/shared/settings.component'
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    MTDApp,
    LogoAnime
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EntryListModule,
    WordModalPageModule,
    PipesModule,
    SettingsModule,
  
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    MTDApp,
    LogoAnime,
    SettingsDialog,
  ],
  providers: [BookmarkService, MTDService],
  bootstrap: [MTDApp]
})
export class AppModule { }
