import { NgStyle } from '@angular/common';
import { Component,  Input,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() details : any
  allNameData : any;
  token:any;


constructor(private route:Router, private userService:UserService) { }


  ngOnInit(): void {
    console.log("This is transfered data", this.details)
    this.token=localStorage.getItem('token')

  }
  // allContacts()
  // {
  //   this.route.navigateByUrl("/display/contacts")
  // }


  getAllContactsByName()
  {
    let reqData ={
      name : this.details.name
    }

    this.userService.getContactsByName(reqData).subscribe((response:any)=>{

      console.log("all the contacts  by name",response);
      this.allNameData=response;
      // this.route.navigateByUrl("/home/contactByName")
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



