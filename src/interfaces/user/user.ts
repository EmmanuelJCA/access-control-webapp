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
}

export enum EGender {
  Male = 'm',
  Female = 'f'
}
