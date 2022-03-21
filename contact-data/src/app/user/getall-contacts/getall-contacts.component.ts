import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-getall-contacts',
  templateUrl: './getall-contacts.component.html',
  styleUrls: ['./getall-contacts.component.scss']
})
export class GetallContactsComponent implements OnInit {
  token:any;
  contactList:any;
  serachDetails!:FormGroup;
  submitted=true;
  contactId : any;

  constructor(private userService : UserService, private formBuilder: FormBuilder, private route:Router)  {}
data:any;
  ngOnInit(): void {
    this.token=localStorage.getItem('token')
  this.serachDetails = this.formBuilder.group({
    name:['',Validators.required]
  });
  this.getAllContacts();


  }


  getAllContacts()
  {
    this.userService.getAllContacts().subscribe((response:any)=>{
      this.contactList=response.data
      console.log("all the contacts",this.contactList);
    })
  }



view(contacts:any)
{
localStorage.setItem('userId', contacts.userId)
console.log("id", contacts.userId);
this.route.navigateByUrl('/display/contactview/'+contacts.userId)
}

deleteContacts(contacts:any){
  {
    console.log("contacts of del", contacts)
    let reqData ={
      contactId : contacts.userId
    }
    console.log("contact id",contacts.userId )
    this.userService.deleteContact(reqData,this.token).subscribe((response:any)=>{
      console.log("response data", response);
    })
  }

}
addContacts(contacts:any){
  console.log("contacts of add", contacts)
    let reqData ={
      contactId : contacts.userId
    }
    console.log("contact id",contacts.userId )
    this.userService.addContact(reqData,this.token).subscribe((response:any)=>{
      console.log("response data", response);
    })
  }

}


