import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog-service';

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    ContactListComponent,
    UserModalComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [UserModalComponent, ConfirmationDialogComponent],
  imports: [BrowserModule, FormsModule, NgbModule, ReactiveFormsModule],
  providers: [NgbActiveModal, ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
