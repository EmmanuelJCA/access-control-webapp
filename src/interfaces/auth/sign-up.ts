import { IProfile } from "../user/user";

export interface ISignUp {
  email:    string;
  password: string;
  profile : IProfile;
}
