import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BtFormModule } from './bt-form/bt-form.module';
import { CbModule } from './cb/cb.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BtFormModule, CbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
