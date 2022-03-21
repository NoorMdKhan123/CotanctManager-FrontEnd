import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 token:any
  constructor(private httpService : HttpService)
  {
      this.token=localStorage.getItem("token")
  }


   userRegistration(reqData : any)
   {
    console.log("data",reqData);
     let httpOptions=
     {
       headers : new HttpHeaders(
         {
           'Content-type':'application/json',

         }
       )
     }

     console.log(reqData);
     return this.httpService.postService('/User/register',reqData,false,httpOptions);
   }

   Userogin(reqData : any, token:any)
   {
     let httpOptions=
     {
       headers : new HttpHeaders(
        {
          'Content-type':'application/json',
          Authorizationn:'Bearer '+ token
        }
       )
     }
     console.log("Data",reqData);
     console.log("token",token);
     return this.httpService.postService('/User/login',reqData, true, httpOptions)
   }

   getAllContacts()
   {
      let httpOptions =
      {
        headers : new HttpHeaders(
          {
            'Content-type':'application/json',

          }
        )
      }
      return this.httpService.getService('/User',false,httpOptions)
   }

   getContactsByName(data:any)
   {
      let httpOptions =
      {
        headers : new HttpHeaders(
          {
            'Content-type':'application/json',

          }
        )
      }
      return this.httpService.getService('/User/byName/'+data,false,httpOptions)
    }

    deleteContact(reqData:any, token:any)
    {
      let httpOptions ={
        headers : new HttpHeaders(
          {
            'Content-type':'application/json',
            Authorization :'Bearer ' + token
          }
        )
      }
      console.log("service class data",reqData.contactId);
      console.log("token",token);
      return this.httpService.deleteService('/User/'+reqData.contactId,reqData,true,httpOptions);

    }

    addContact(reqData:any, token:any)
    {
      let httpOptions ={
        headers : new HttpHeaders(
          {
            'Content-type':'application/json',
            Authorization :'Bearer ' + token
          }
        )
      }
      console.log("service class data",reqData.contactId);
      console.log("token",token);
      return this.httpService.postService('/User/AddContact/'+reqData.contactId,reqData,true,httpOptions);

    }


}
