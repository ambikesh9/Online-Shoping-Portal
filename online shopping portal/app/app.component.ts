import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Http, Response} from '@angular/http';
@Component({
  selector: 'my-app',
  template: `

<div >
    <nav class='navbar navbar-default' >
        <div class="container-fluid">
           <a class='navbar-brand'> <div class="phonecart"> {{pageTitle}}  </div>   </a>
            <ul class="nav navbar-nav navbar-right">
                <li><div class="panel-heading text-right" id="welcome"style="display:none;"></div></li>
<li class="divider-vertical"></li>
                 <li><div class="btn-nav"><a id="login" class="btn btn-warning navbar-btn"
                (click)="login()" style="margin-right:3px;">Login</a></div></li>
            </ul>
            </div>
            </nav>
<div class='container'>
<router-outlet></router-outlet>
</div>

</div>

`
})
export class AppComponent 
{ 
    pageTitle:string ="Phone Cart";
    visible:boolean=true;
    orders: any;
    
    constructor(private _router:Router,private _http:Http){
    console.log("Inside Constructor");    
    }
login(){
var value=document.getElementById("login").innerHTML;
    
    if(value==="Login") {
        this._router.navigate(['/login']);
        document.getElementById("login").style.display="none";
        }
    else if (value==="Logout"){
    sessionStorage.clear();    
    document.getElementById("login").innerHTML="Login";
        document.getElementById("welcome").style.display="none";
        this._router.navigate(['/welcome']);
    
    }

}
   
}
