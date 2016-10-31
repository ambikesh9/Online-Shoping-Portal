"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Login_1 = require('./Login');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var LoginComponent = (function () {
    function LoginComponent(router, _http) {
        var _this = this;
        this.router = router;
        this._http = _http;
        this.login = new Login_1.Login('', '', '');
        this.fLogin = new Login_1.Login('', '', '');
        this._http.get('api/users/user.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (users) { _this.users = users; });
    }
    LoginComponent.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    LoginComponent.prototype.onSubmit = function () {
        var name = this.login.userName;
        sessionStorage.setItem("username", this.login.userName);
        var password = this.login.password;
        var user = this.users.filter(function (user) { return user.userName == name && user.password == password; })[0];
        console.log("User:", user);
        if (user) {
            document.getElementById("login").style.display = '';
            document.getElementById("login").innerHTML = "Logout";
            this.router.navigate(['/products']);
        }
        else {
            alert("Invalid Credentials.... Try again later");
            this.login.userName = '';
            this.login.password = '';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/login/login-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map