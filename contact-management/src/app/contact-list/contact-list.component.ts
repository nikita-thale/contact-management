import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { User } from '../models/user.model';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog-service';

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private confirmationDialogService: ConfirmationDialogService
  ) {}
  users = [
    {
      id: 0,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      phone: "9763458273",
      status: true
    },
    {
      id: 1,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      phone: "9763458273",
      status: true
    },
    {
      id: 2,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      phone: "9763458273",
      status: true
    },
    {
      id: 3,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      phone: "9763458273",
      status: true
    },
    {
      id: 4,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
      phone: "9763458273",
      status: true
    },
    {
      id: 5,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
      phone: "9763458273",
      status: true
    }
  ];
  keysearch: string = "";
  ngOnInit() {
    console.log(this.users);
  }

  open(user: User, userlist) {
    console.log(user);
    const modalRef = this.modalService.open(UserModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.userlist = userlist;
  }

  onSearchSubmit(key) {
    this.users = this.users.filter(
      user => user.first_name === key
    );
  }

  public openConfirmationDialog(idx) {
    console.log(idx);
    this.confirmationDialogService
      .confirm("Please confirm..", "Do you really want to delete... ?")
      .then(confirmed => {
        console.log("User confirmed:", confirmed);
        if (confirmed) {
          this.users[idx].status = false;
          console.log(this.users);
        }
      })
      .catch(() =>
        console.log(
          "User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)"
        )
      );
  }
}
