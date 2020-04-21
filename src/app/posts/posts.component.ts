import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts;

  constructor(private ser : ConfigService) {  

   }
   
   showConfig(){
    this.ser
        .getConfig()
        .pipe(map(res=>{ 
          let arr=[];
          for (let obj in res){
            //console.log(obj);
            arr.push({...res[obj],"aakriti":"priya"});
            
          }
          console.log(arr);
          return arr;
        })
          )
        .subscribe(response=>{      
      this.posts=response;
      console.log(response);
    })
   }
  

  ngOnInit(): void {
  }

}
