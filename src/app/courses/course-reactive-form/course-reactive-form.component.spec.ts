import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReactiveFormComponent } from './course-reactive-form.component';

describe('CourseReactiveFormComponent', () => {
  let component: CourseReactiveFormComponent;
  let fixture: ComponentFixture<CourseReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
