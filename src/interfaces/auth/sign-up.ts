import { IProfile } from "../user/user";

export interface ISignUp extends IProfile {
  email:    string;
  password: string;
}
