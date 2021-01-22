import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { TimePickerControlComponent } from './time-picker-control/time-picker-control.component'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormlyModule } from '@ngx-formly/core'
import { MatSuffixModule, SUFFIX_EXTENSION_CONFIG } from './mat-suffix/mat-suffix.module'
import { MatSelectModule } from '@angular/material/select'
import { FormlyMatInputModule } from '@ngx-formly/material/input'
import { CommonModule } from '@angular/common'
import { RepeatSectionFormlyModule } from './repeat-section/repeat-section-formly.module';

@NgModule({
  declarations: [
    AppComponent,
    TimePickerControlComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormlyModule.forRoot(
      // SUFFIX_EXTENSION_CONFIG
    ),
    RepeatSectionFormlyModule,
    FormlyMatInputModule,
    MatSuffixModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
