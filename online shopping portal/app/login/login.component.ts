import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './Login';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl:'app/login/login-form.component.html'    
})
export class LoginComponent {
    users: any[];
    login= new Login('','','');
    fLogin = new Login('','','');
    
    constructor(private router:Router, private _http:Http){
    this._http.get('api/users/user.json')
        .map((response: Response) => <Login[]>response.json())
        .subscribe(users => {this.users=users;});    
    }
    private handleError(error: Response){
    console.error(error);
        return Observable.throw(error.json().error || 'Server error');    
    }
    
    onSubmit(){
        
        var name=this.login.userName;
        sessionStorage.setItem("username",this.login.userName);
        var password=this.login.password;
        var user=this.users.filter(user => user.userName == name && user.password== password)[0];
        console.log("User:",user);
        if(user) {
            document.getElementById("login").style.display = '';
        document.getElementById("login").innerHTML="Logout";
            this.router.navigate(['/products']);    
        }
        else{
        alert("Invalid Credentials.... Try again later");
            this.login.userName='';
            this.login.password='';    
        }
        
        
        
        }
    
    }
