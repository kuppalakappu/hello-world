import { Component, Input,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.scss']
})
export class ParentchildComponent implements OnInit {
id="0"
  @Input()  a:string = ""
   empname:string = "qqqqq"
   constructor(private route:ActivatedRoute,private router:Router){}
log(msg:any){
  console.log(msg)
}
child(){
  this.router.navigate(['child/1'],{relativeTo:this.route})
}
ngOnInit(): void {
  this.route.paramMap.subscribe(params=>{
    this.id=params.get("id") || "0"
  })
}

goto(){
  this.router.navigate(["test"])
}
}


