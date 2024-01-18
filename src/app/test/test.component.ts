import { Component } from '@angular/core';
import { TestService } from './test.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  name = "helloangular"
emplist:any=[]
  isdisabled = false

greeting =""
  issuccess:boolean=false
  iserror=true
  msg="grrrr"

  color="green"

error=""
products =[{name:"a",age:4},     {name: "b"},  {name:"c"}]
  show= false
  messageclass = {

    "success": this.issuccess,

    "error": this.iserror
  }
  messagestyle={
    color:"red",

  }
constructor(private testService:TestService, private router:Router){}
  submit(){
    this.greeting="welcome to html"
  }

  log(message:string)
  {
   
   const a= this.testService.login().subscribe(res=>this.emplist=res,e=>this.error='some error occured')
   console.log(a,'kkk')
    this.greeting=message
  }
goto(){
  this.router.navigate(['parent/1'])
}
  
}
