export class FirebaseUserModel {
  image: string;
  name: string;
  provider: string;
  uid: string;
  email: string;

  constructor() {
    this.image = '';
    this.name = '';
    this.provider = '';
    this.uid = '';
    this.email = '';
  }
}
