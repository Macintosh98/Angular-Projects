import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    v_name:boolean=false;
    v_password:boolean=false;
    str:string;
    Student:{
      name1:string;
      password:string;
      address:string;
      number1:string;
      email:string;
      cname:string;
      message:string;
      gender:string;
    }

    public Display() {

        this.Student = {
            name1:(<HTMLInputElement>document.getElementById("name")).value,
            password:(<HTMLInputElement>document.getElementById('password')).value,
            address:(<HTMLInputElement>document.getElementById('address')).value,
            number1:(<HTMLInputElement>document.getElementById('number')).value,
            email:(<HTMLInputElement>document.getElementById('email')).value,
            cname:(<HTMLInputElement>document.getElementById('cname')).value,
            message:(<HTMLInputElement>document.getElementById('message')).value,
            gender:(<HTMLInputElement>document.getElementById('gender')).value
        }

        console.log("name:"+this.Student.name1);
        console.log("password:"+this.Student.password);
        console.log("address:"+this.Student.address);
        console.log("number:"+this.Student.number1);
        console.log("email:"+this.Student.email);
        console.log("cname:"+this.Student.cname);
        console.log("message:"+this.Student.message);
        console.log("gender:"+this.Student.gender);
    }

    c_name(N){
        this.str=N.value;

            if((this.str.length)>=8){
             this.v_name=true;
            }
            else{
              this.v_name=false;
            }
    }

    c_password(P){
        this.str=P.value;
        if(this.str!=""){
            if((this.str.length)<=8){
             this.v_password=true;
            }
        }
        else{
          this.v_password=false;
        }
    }
}
