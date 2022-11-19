import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]]
  });

  SubmitForm(){
    alert(this.SignupForm.value);
    console.warn(this.SignupForm.value);
    console.log( "form sent")
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}










  




