import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StubcComponent } from './feature/stubc/stubc.component';
import { HomeComponent } from './feature/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StubcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
