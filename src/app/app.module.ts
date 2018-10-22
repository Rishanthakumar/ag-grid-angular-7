import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import 'ag-grid-enterprise';
import { RedComponentComponent } from './red-component/red-component.component';

@NgModule({
  declarations: [AppComponent, RedComponentComponent],
  imports: [BrowserModule, HttpClientModule, AgGridModule.withComponents([RedComponentComponent])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}