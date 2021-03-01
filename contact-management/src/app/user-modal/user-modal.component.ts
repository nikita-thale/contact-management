import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-user-modal",
  templateUrl: "./user-modal.component.html",
  styleUrls: ["./user-modal.component.css"]
})
export class UserModalComponent implements OnInit {
  @Input() user: User;
  @Input() userlist: any;
  // @Output() public newuser = new EventEmitter<any>();
  form = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.minLength(10)])
  });
  constructor(public activeModal: NgbActiveModal) {}

  get firstname() {
    return this.form.get("firstName");
  }

  ngOnInit() {
    if (!this.user) {
      this.user = {} as User;
    }
  }

  onSubmit() {
    // alert(JSON.stringify(this.form.value));
    // let newid = this.userlist.length+1;
    // this.newuser.emit(this.form.value);
    console.log(this.user, this.userlist, this.userlist.length);
    if (this.userlist.length > 0) {
      this.userlist[this.userlist.length + 1] = {
        id: this.userlist.length + 1,
        email: this.user.email,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        avatar:
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        phone: this.user.phone,
        status: true
      };
    }

    console.log(this.userlist);
  }
}
