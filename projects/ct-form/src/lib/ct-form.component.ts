import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CtFormControlType } from './model/ct-form-control-type.enum';
import { CtForm, CtFormControl, CtFormRow, CtFormSection } from './model/ct-form.model';

@Component({
  selector: 'ct-form',
  templateUrl: "./ct-form.component.html",
  styleUrls: [ "./ct-form.component.css" ]
})
export class CtFormComponent implements OnInit {

  @Input() ctForm: CtForm = new CtForm();

  controlTypes = CtFormControlType;
  form: FormGroup = this.fb.group({});
  loading: boolean = true;
  // TODO: JSON PARSER
  // TODO: FORM BUILDER && HTML

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.ctForm))

    this.ctForm.sections.forEach(section => {
      section.rows.forEach(row => {
        row.controls.forEach(control => {
          this.form.addControl(
            control.attributeName,
            new FormControl({ value: control.predefinedValue, disabled: false }, [Validators.required])
          )
        });
      });
    });
    this.loading = false;
  }

  onControlValueChange(event: any, control: CtFormControl) {
    console.log(event);
    if (control.onChangeCallbackFn != null) {
      control.onChangeCallbackFn(event.target.value);
    }
  }
}
