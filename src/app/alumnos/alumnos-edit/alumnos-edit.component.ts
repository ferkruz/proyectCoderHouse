import {Component, NgModule, ViewChild} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ModalModule} from '../../components/modal/modal.module';
import {ModalComponent} from '../modal/modal.component';
@Component({
  selector: 'app-alumnos-edit',
  templateUrl: './alumnos-edit.component.html',
  styleUrls: ['./alumnos-edit.component.scss']
})
export class AlumnosEditComponent {
  @ViewChild('modalComponent') modal:
    | ModalComponent<AlumnosEditComponent>
    | undefined;

  newsletterForm: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    this.newsletterForm = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

  async createRecord(): Promise<void> {
    console.log(this.newsletterForm.value);

    await this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}