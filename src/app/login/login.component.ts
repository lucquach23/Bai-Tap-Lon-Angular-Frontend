import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../lib/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // public loginForm: FormGroup;
  // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   this.loginForm = new FormGroup({
  //     username: new FormControl('', Validators.required),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(6),
  //     ]),
  //     remember: new FormControl(false, []),
  //   });
  // }
  // onSubmit(value: any) {
  //   let xx = value;
  //   debugger;
  //   // stop here if form is invalid
   
  //   this.router.navigate(['']);
  // }
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.returnUrl = this.route.snapshot.queryParams['/'] || '/'||'register-sv'||'register-gv';

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data.role);
          if(data.role=='Gv')
          {
            this.router.navigate(['register-gv']);
          }
          if(data.role=='Sv')
          {
            this.router.navigate(['register-sv']);
          }
          if(data.role=='Admin')
          {
            this.router.navigate(['/']);
          }
          //this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.error = error;
          this.loading = false;   
          debugger;     
        }
      );
  }
}
