import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],

      email: ['', [Validators.required, Validators.email]],
      password: this.formBuilder.control(''),
    });
  }


  get nameControl() {
    return this.userForm.controls['name'];
  }

  get emailControl() {
    return this.userForm.controls['email'];
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      alert('Formulario invalido');
    } else {
      console.log(this.userForm.value);
    }
  }
}

