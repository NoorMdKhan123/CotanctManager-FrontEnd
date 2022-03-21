import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm! : FormGroup;
  submitted = true;

  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name : ['',Validators.required],
      email : ['',Validators.email],
      password : ['',Validators.required],
      phone : ['',Validators.required],
      department : ['', Validators.required],
      gender : ['',Validators.required],
      age : ['',Validators.required],
      dateofbirth : ['',Validators.required],
      location : ['',Validators.required]
    });
    console.log(this.registrationForm);

  }

  onRegister(){
    this.submitted=true;
    if(this.registrationForm.value)
    {

      let data={
        userName:this.registrationForm.value.name,
        email:this.registrationForm.value.email,
        password:this.registrationForm.value.password,
        phone:this.registrationForm.value.phone,
        department:this.registrationForm.value.department,
        gender:this.registrationForm.value.gender,
        age:this.registrationForm.value.age,
        dateofBirth:this.registrationForm.value.dateofbirth,
        location:this.registrationForm.value.location


      }
      console.log(data)
      this.userService.userRegistration(data).subscribe((response:any)=>{
        console.log(response);
      })
    }
    else{
      console.log("invalid");
    }

  }

}
