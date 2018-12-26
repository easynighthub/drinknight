import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../core/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  uid: string;
  name: string;
  email: string;
  image: string;
  provider: string;


}


@Component({
  selector: 'app-page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  private itemsCollection: AngularFirestoreCollection<FirebaseUserModel>;
  items: Observable<FirebaseUserModel[]>;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private bd: AngularFirestore
  ) {
    this.itemsCollection = bd.collection<FirebaseUserModel>('users');

    this.items = this.itemsCollection.valueChanges();
    console.log(this.items);



  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        console.log(data);
        this.user = data;
        const uid = this.user.uid;
        const email = this.user.email;
        const image = this.user.image;
        const name = this.user.name;
        const provider = this.user.provider;

        const item: Item = { uid, name, email, image, provider};
        // this.itemsCollection.doc(uid).set(item);

        this.createForm(this.user.name);
      }
    });
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value) {
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err));
  }

  logout() {
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log('Logout error', error);
    });
  }
}
