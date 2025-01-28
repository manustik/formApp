import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-register-page',
  standalone: false,
  
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit{
  
  constructor( 
    private fb: FormBuilder ,
    private validatorsService: ValidatorsService
  ) {}

  public myForm!: FormGroup;
  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['',[ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern ) ]],
      email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ]],
      username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]],
      password2: ['', [ Validators.required ]]
    })
  }

  isValidField( field: string ) {
    // Obtener validacion desde un servicio
    return this.validatorsService.isValidField( this.myForm, field )
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
