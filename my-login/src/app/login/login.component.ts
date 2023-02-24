import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  users !: User[];


  constructor(private userService: UserService, private router:Router){}


  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
     
  
    
    const email = form.value.email;
    const password = form.value.password;

   if(this.userService.AuthUser(email,password)){
    this.router.navigate(['/auth'])
   }else{
    form.reset();
   }

   

  }

}
