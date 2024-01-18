import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { ChildComponent } from './child/child.component'
const routes: Routes = [{path:'test',component:TestComponent},{path:'parent/:id',component:ParentchildComponent,
children:[{path:'child/:id',component:ChildComponent},]},

{path:'**',component:TestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
