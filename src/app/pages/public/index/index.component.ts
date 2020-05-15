import { Component, OnInit } from '@angular/core';
import { GlobalVars } from 'src/app/shared/vars/global.vars';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'index-component',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private readonly gVars: GlobalVars,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  public login() {
    this.gVars.isAuthorized = true;
    this.router.navigate(['/home']);
  }

}
