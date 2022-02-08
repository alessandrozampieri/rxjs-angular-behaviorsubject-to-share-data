import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, ProducerComponent, ConsumerComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProducerComponent, ConsumerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
