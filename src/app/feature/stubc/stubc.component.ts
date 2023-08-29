import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stubc',
  templateUrl: './stubc.component.html',
  styleUrls: ['./stubc.component.css']
})
export class StubcComponent implements OnInit{

constructor(private router: Router) { }

ngOnInit() {

}

goTo(){
  this.router.navigate(['/home']);
}

}
