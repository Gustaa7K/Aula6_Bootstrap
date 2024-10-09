import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  mensagem: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.mensagem = 'Salvo com sucesso';
      console.log(form.value); // Aqui você pode ver os dados do formulário
      form.reset();
    }
  }
}

