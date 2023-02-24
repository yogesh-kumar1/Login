import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Us : User[] = [

    {
      
      Name : 'john',
      Password : 'john@123',
     
    },


    
    {
  
      Name : 'james',
      Password : 'james@123',
    
    }





    ];



  constructor() { }



    AuthUser(nm:string,pwd:string):boolean{
      let A: boolean = false
      this.Us.forEach(function (value){
         if(value.Name == nm && value.Password == pwd){
          A = true
         }
        
      });
   
     return A
    }
    getUsers() :User[] {

        return this.Us;
      }

    }
   
 
