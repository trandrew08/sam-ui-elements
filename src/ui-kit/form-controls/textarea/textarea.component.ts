import {Component, Input, ViewChild, forwardRef} from '@angular/core';
import { LabelWrapper } from '../../wrappers/label-wrapper';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, Validators, FormControl} from "@angular/forms";

export const TEXT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SamTextareaComponent),
  multi: true
};

/**
 * The <samTextArea> component provides a textarea input form control
 *
 * @Input value: string - Sets the text input value
 * @Input label: string - Sets the label text
 * @Input name: string - Sets the name attribute 
 * @Input hint: string - Sets the helpful hint text
 * @Input errorMessage: string - Sets the general error message
 * @Input disabled: boolean - Sets the disabled attribute
 * @Input required: boolean - Sets the required attribute
 * @Input maxlength: number - Sets the maxlength attribute
 */
@Component({
  selector: 'samTextArea',
  templateUrl: 'textarea.template.html',
  providers: [ TEXT_VALUE_ACCESSOR ]
})
export class SamTextareaComponent implements ControlValueAccessor {
  @Input() value: string;
  @Input() label: string;
  @Input() name: string;
  @Input() hint: string;
  @Input() errorMessage: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() maxlength: number;
  @Input() control: FormControl;

  onChange: any = () => {
    //this.wrapper.formatErrors(this.control);
  };

  onTouched: any = () => {

  };

  @ViewChild(LabelWrapper) wrapper: LabelWrapper;

  constructor() {

  }

  ngOnInit() {
    if (!this.name) {
      throw new Error("<samTextArea> requires a [name] parameter for 508 compliance");
    }

    if (!this.control) {
      return;
    }

    let validators: any[] = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    if (this.maxlength) {
      validators.push(Validators.maxLength(this.maxlength));
    }

    this.control.setValidators(validators);
    this.control.valueChanges.subscribe(this.onChange);
    //this.wrapper.formatErrors(this.control);
  }

  onInputChange(value) {
    this.value = value;
    this.onChange(value);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled) {
    this.disabled = disabled;
  }

  writeValue(value) {
    this.value = value;
  }
}