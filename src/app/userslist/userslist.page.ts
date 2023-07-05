import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

  users: any[]=[];
  
  
  constructor(private http:HttpClient ,private userService:UserService 
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res =>{
  
        this.users = res.results;
        console.log(this.users)

      });
    }
    onClick(i:number){
      this.userService.getUsers().subscribe(res =>{
        const user ={
      name: 'Nombre:         ' + res.results[i].name.title + ' ' + res.results[i].name.first + ' ' + res.results[i].name.last,
      gender: 'Genero:         ' + res.results[i].gender,
      email: 'Email:         ' + res.results[i].email,
      login: 'Cuenta:        Usuario: ' + res.results[i].login.username +  '                 Contraseña: ' + res.results[i].login.password,
      edad: 'Edad: ' + res.results[i].dob.age,
      location: 'Ubicacion: Pais: ' + res.results[i].location.country + '    Ciudad: ' + res.results[i].location.city + '     Estado: ' + res.results[i].location.state,
      cell: 'Celular:         ' + res.results[i].cell
        }
        alert(`${user.name}\n\n${user.gender}\n\n${user.email}\n\n${user.login}\n\n${user.edad}\n\n${user.location}\n\n${user.cell}\n\n`);
     })
     }
  }


