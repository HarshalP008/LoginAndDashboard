import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  myLoginForm: FormGroup | any;
  empDetails: any;
  isRememberMe: boolean = false;
  isForgotPassword: boolean = false;

  constructor(private fbLogin: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myLoginForm = this.fbLogin.group({
      email: this.fbLogin.control('', [Validators.required, Validators.minLength(5)]),
      password: this.fbLogin.control('', [Validators.required]),
    })
  }
  submit() {
    this.router.navigate(['/dashboard']);
  }
  
  rememberMe() {
    this.isRememberMe = !this.isRememberMe;
  }

  forgotPassword() {
    this.isForgotPassword = true;
  }

  submitRegiEmail() {
    this.isForgotPassword = false;
  }
}
