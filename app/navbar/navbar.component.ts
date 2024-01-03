import { Component,OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  jsonData:any[]=[];
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
       this.http.get<any>('../assets/JSON/data.json').subscribe(res=>{
       this.jsonData = res;
       console.log(this.jsonData);
   })
  }
}
