import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JdHeaderComponent } from './jd-header/jd-header.component';
import { JdCorpsComponent } from './jd-corps/jd-corps.component';
import { JdSidebarComponent } from './jd-sidebar/jd-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    JdHeaderComponent,
    JdCorpsComponent,
    JdSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
