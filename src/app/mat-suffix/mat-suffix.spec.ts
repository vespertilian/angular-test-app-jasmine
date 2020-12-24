import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MatSuffixComponent } from "./mat-suffix.component"
import { FormlyModule, FieldType } from '@ngx-formly/core'
import { Component } from '@angular/core'
import { MatSuffixModule, SUFFIX_EXTENSION_CONFIG } from './mat-suffix.module';
import { By } from "@angular/platform-browser"
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { FormlyMatInputModule } from '@ngx-formly/material/input'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  template: `
    <form [formGroup]="form">
      <formly-form [fields]="fields" [model]="model" [form]="form"></formly-form>
    </form>
  `
})
class TestComponent {
  toggled = false
  model = {}
  form = new FormGroup({})
  fields = [
    {
      key: "email",
      type: "input",
      templateOptions: {
        label: "Email address",
        placeholder: "Enter email",
        required: true,
        matSuffix: {
          icon: "visibility",
          onClick: () => this.togglePasswordVisibility()
        }
      }
    }
  ]

  togglePasswordVisibility() {
    this.toggled = true
  }
}

describe("MatSuffixComponent", () => {
  function setup() {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        FormlyMatInputModule,
        // FormlyModule.forRoot({
        //   ...SUFFIX_EXTENSION_CONFIG
        // }),
        FormlyModule.forRoot(),
        MatSuffixModule,
      ],
      declarations: [
        TestComponent,
        MatSuffixComponent,
      ]
    })

    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
      TestComponent
    )

    const component = fixture.componentInstance

    return { fixture, component }
  }

  fit("should create", () => {
    const { component, fixture } = setup()
    fixture.detectChanges()

    expect(fixture.debugElement.query(By.css("input"))).toBeTruthy()
    const suffixComponent = fixture.debugElement.query(By.css("app-mat-suffix"))
    expect(suffixComponent).toBeTruthy()

    // I need this mat icon to render as it has the click handler
    expect(fixture.debugElement.query(By.css("mat-icon"))).toBeTruthy()
  })
})
