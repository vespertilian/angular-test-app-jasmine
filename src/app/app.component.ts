import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { BehaviorSubject, Subject } from 'rxjs'
import { map, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-test-app'
  form = new FormGroup({})
  model = {}
  fields = []

  destroy$ = new Subject()
  showPassword$ = new BehaviorSubject(false)
  showPasswordIcon$ = this.showPassword$.pipe(
    map(v => (v ? "visibility" : "visibility_off"))
  )

  ngOnInit() {
    const emailField = {
      key: "email",
      type: "input",
      id: "sign-in-email",
      templateOptions: {
        label: "Email",
        placeholder: "your_email@domain.com",
        required: true,
        appearance: "fill"
      }
    };

    const passwordField = {
      key: "password",
      type: "input",
      templateOptions: {
        label: "Password",
        placeholder: "secret",
        required: true,
        appearance: "fill",
        type: "password",
        matSuffix: {
          icon: this.showPasswordIcon$,
          onClick: () => this.togglePasswordVisibility()
        }
      }
    };

    this.fields = [emailField, passwordField]

    this.showPassword$
      .pipe(
        takeUntil(this.destroy$),
        map(v => (v ? "text" : "password"))
      )
      .subscribe(v => {
        passwordField.templateOptions.type = v
      })
  }

  togglePasswordVisibility() {
    const currentValue = this.showPassword$.getValue()
    this.showPassword$.next(!currentValue)
  }

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2))
    }
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
