import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './NgRxTrial/state/counter.reducer';
import { MyCounterComponent } from './NgRxTrial/my-counter/my-counter.component';
import { MyCounterWServiceComponent } from './NgRxTrial/my-counter-w-service/my-counter-w-service.component';
@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MyCounterWServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
