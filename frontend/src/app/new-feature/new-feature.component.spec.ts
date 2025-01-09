import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NewFeatureComponent } from './new-feature.component';

describe('NewFeatureComponent', () => {
  let component: NewFeatureComponent;
  let fixture: ComponentFixture<NewFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFeatureComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with two input fields', () => {
    const compiled = fixture.nativeElement;
    const inputElements = compiled.querySelectorAll('input');
    expect(inputElements.length).toBe(2);
  });

  it('should validate form inputs', () => {
    const input1 = component.form.controls['input1'];
    const input2 = component.form.controls['input2'];

    input1.setValue('');
    input2.setValue('');
    expect(component.form.valid).toBeFalsy();

    input1.setValue('test');
    input2.setValue('test');
    expect(component.form.valid).toBeTruthy();
  });

  it('should handle form submission', () => {
    spyOn(component, 'onSubmit');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
