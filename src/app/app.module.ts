import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { ParentchildComponent } from './parentchild/parentchild.component';
import {HttpClientModule} from '@angular/common/http';
import { ChildComponent } from './child/child.component'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ParentchildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
