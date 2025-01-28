import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  standalone: false,
  
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}
  
  public myForm!: FormGroup;

  public person = {
    gender: 'F',
    wantNotification: false
  }
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      gender: ['M', Validators.required ],
      wantNotification: [ true, Validators.required ],
      termsAndConditions: [ false, Validators.requiredTrue ],
    });

    this.myForm.reset( this.person )
  }

  // ngSubmit
  onSave() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;
    
    this.person = newPerson;
    console.log(this.person)

    console.log(this.myForm.value)
  }

  isValidField( field: string ) {
    return this.validatorsService.isValidField( this.myForm, field )
  }
  
}
