export class User {

  id: number;
  name: string;
  username: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  nameCompany: string;
  catchPhrase: string;
  bs: string;

  static fromJson(json: any): User {
    const user = new User();
    user.id = json.id;
    user.name = json.name;
    user.email = json.email;
    user.username = json.username;

    user.street = json.address.street;
    user.suite = json.address.suite;
    user.city = json.address.city;
    user.zipcode = json.zipcode;
    user.nameCompany = json.company.name;
    user.catchPhrase = json.company.catchPhrase;
    user.bs = json.company.bs;
    return user;
  }

  generateAddress(): string {
    return `Address: ${this.street} ${this.suite}, ${this.city}`;
  }
}
