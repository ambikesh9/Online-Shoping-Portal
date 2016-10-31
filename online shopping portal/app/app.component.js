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
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.pageTitle = "Phone Cart";
        this.visible = true;
        console.log("Inside Constructor");
    }
    AppComponent.prototype.login = function () {
        var value = document.getElementById("login").innerHTML;
        if (value === "Login") {
            this._router.navigate(['/login']);
            document.getElementById("login").style.display = "none";
        }
        else if (value === "Logout") {
            sessionStorage.clear();
            document.getElementById("login").innerHTML = "Login";
            document.getElementById("welcome").style.display = "none";
            this._router.navigate(['/welcome']);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n<div >\n    <nav class='navbar navbar-default' >\n        <div class=\"container-fluid\">\n           <a class='navbar-brand'> <div class=\"phonecart\"> {{pageTitle}}  </div>   </a>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><div class=\"panel-heading text-right\" id=\"welcome\"style=\"display:none;\"></div></li>\n<li class=\"divider-vertical\"></li>\n                 <li><div class=\"btn-nav\"><a id=\"login\" class=\"btn btn-warning navbar-btn\"\n                (click)=\"login()\" style=\"margin-right:3px;\">Login</a></div></li>\n            </ul>\n            </div>\n            </nav>\n<div class='container'>\n<router-outlet></router-outlet>\n</div>\n\n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map