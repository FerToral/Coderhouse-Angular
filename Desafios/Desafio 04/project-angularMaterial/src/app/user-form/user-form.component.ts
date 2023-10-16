import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],

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
