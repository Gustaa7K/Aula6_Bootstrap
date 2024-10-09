import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensagem: string = '';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    const usuario = form.value.usuario;
    const senha = form.value.senha;

    if (usuario === 'admin' && senha === '123') {
      this.router.navigate(['/home', usuario]);
    } else {
      this.mensagem = 'Usuário ou senha inválido';
    }
  }
}



