import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RepeatSectionFormlyComponent } from './repeat-section.type.component';

xdescribe('RepeatSectionComponent', () => {
  let component: RepeatSectionFormlyComponent;
  let fixture: ComponentFixture<RepeatSectionFormlyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatSectionFormlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatSectionFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
