import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment';
  http = inject(HttpClient);
  public authorise(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
      console.log(res);
      window.alert('Authorized')
    })
  }
  public unauthorise(){
    this.http.get('https://jsonplaceholder.typicode.com/usersasjdhkjasdh').subscribe((res) => {
      console.log(res);
    })
  }
}
