import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RepeatSectionFormlyComponent } from './repeat-section.type.component'
import { FormlyModule } from '@ngx-formly/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    RepeatSectionFormlyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat-section',
          component: RepeatSectionFormlyComponent,
        }
      ]
    })
  ]
})
export class RepeatSectionFormlyModule {}
