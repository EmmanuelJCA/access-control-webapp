export interface IUser {
  userId:   string;
  email:    string;
  isActive: boolean;
  profile:  IProfile;
  token:    string;
}

export interface IProfile {
  identification: string;
  firstName:      string;
  lastName:       string;
  gender:         EGender;
  birthdate:      string;
  phone:          string;
}

export enum EGender {
  Male = 'm',
  Female = 'f'
}
