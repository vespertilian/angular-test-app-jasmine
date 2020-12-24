import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MatSuffixComponent } from "./mat-suffix.component"
import { FormlyModule, FieldType } from "@ngx-formly/core"
import { Component } from "@angular/core"
import { MatSuffixModule, SUFFIX_EXTENSION_CONFIG } from './mat-suffix.module'
import { By } from "@angular/platform-browser"
import { ReactiveFormsModule } from "@angular/forms"

@Component({
  template: `
    <formly-form [fields]="fields"></formly-form>
  `
})
class TestComponent {
  toggled = false
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

@Component({
  template: `
    <input [formControl]="formControl" [formlyAttributes]="field" />
  `
})
class StubFormControlComponent extends FieldType {}

describe("MatSuffixComponent", () => {
  function setup() {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            {
              name: "input",
              component: StubFormControlComponent
            }
          ],
          // ...SUFFIX_EXTENSION_CONFIG
        }),
        MatSuffixModule,
      ],
      declarations: [
        TestComponent,
        StubFormControlComponent,
        MatSuffixComponent,
      ]
    })

    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
      TestComponent
    )

    const component = fixture.componentInstance

    return { fixture, component }
  }

  it("should create", () => {
    const { component, fixture } = setup()
    fixture.detectChanges()
    fixture.detectChanges()

    expect(fixture.debugElement.query(By.css("input"))).toBeTruthy()
    const suffixComponent = fixture.debugElement.query(By.css("app-mat-suffix"))
    expect(suffixComponent).toBeTruthy()

    // I need this mat icon to render as it has the click handler
    expect(fixture.debugElement.query(By.css("mat-icon"))).toBeTruthy()
  })
})
