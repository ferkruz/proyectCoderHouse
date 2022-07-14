import {Component, NgModule, ViewChild} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ModalModule} from '..//modal/modal.module';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  @ViewChild('modalComponent') modal:
    | ModalComponent<NewsletterComponent>
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