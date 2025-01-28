import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: false,
  
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit{
  
  constructor( private fb: FormBuilder ) {}

  public myForm!: FormGroup;
  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['',[ Validators.required ]],
      email: ['', [ Validators.required ]],
      username: ['', [ Validators.required ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]],
      password2: ['', [ Validators.required ]]
    })
  }

}
