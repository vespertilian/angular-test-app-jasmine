import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { TimePickerControlComponent } from './time-picker-control/time-picker-control.component'
import { MatSelectModule } from '@angular/material/select'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TimePickerControlComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
