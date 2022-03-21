import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-contactview',
  templateUrl: './contactview.component.html',
  styleUrls: ['./contactview.component.scss']
})

export class ContactviewComponent implements OnInit {
  contactId:any;
  token:any;
  name:any;
  contactData:any;
  contactList:any;
  allNameData:any;
  constructor(private userService:UserService, private route : Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.contactId = localStorage.getItem('userId');
    this.name=localStorage.getItem('name');
  this.  getContactsById();
  this. getAllContactsByName();

  }
  getContactsById(){
    this.userService.getAllContacts().subscribe((response:any)=>{
      response.data.forEach((element:any)=>{
        if(element.userId == this.contactId){
          this.contactData=element;
          console.log("here is data",this.contactData);
        }

      })
    })
  }


  getAllContactsByName(){
  // {
  //   let reqData ={
  //     name : this.details.name
  //   }

  //   this.userService.getContactsByName(reqData).subscribe((response:any)=>{

  //     console.log("all the contacts  by name",response);
  //     this.allNameData=response;
  //     // this.route.navigateByUrl("/home/contactByName")
  //   })

  // }
  this.userService.getAllContacts().subscribe((response:any)=>{
    response.data.forEach((element:any)=>{
      if(element.userName == this.name){
        this.contactData=element;
        console.log("here is data",this.contactData);
      }

    })
  })

}
}
