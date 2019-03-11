export class UserDataModel {
  FirstName: string;
  LastName: string;
  KingdomHall: string;
  Available: boolean;
  /**
   *
   */
  constructor(
    firstName: string,
    lastName: string,
    kingdomHall: string,
    available: boolean
  ) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.KingdomHall = kingdomHall;
    this.Available = available;
  }
}
