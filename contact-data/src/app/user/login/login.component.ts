import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token : any;
  loginForm! : FormGroup
  submitted = true;

  constructor(private formBuilder : FormBuilder, private userService : UserService, private route:Router, private routeAct:ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['',Validators.required]
    });
    this.token=this.routeAct.snapshot.paramMap.get('token');
    console.log("Token",this.token)
  }

OnSubmit(){
  this.submitted = true;
  if(this.loginForm.valid)
  {
    let data = {
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    console.log(data)
    this.userService.Userogin(data, this.token).subscribe((response:any)=>{
      console.log(response)
      localStorage.setItem('token',response.data.token);
      console.log("token",this.token);
      this.route.navigateByUrl("/dashboard/contacts")
    })
  }

  }


}
