export type FormState = {
  userInfo: [];
  userPrefs: [];
  isOpen: boolean;
  nextForm: boolean;
  user: any;
};

export type UserState = {
  userId: string;
  gender: string;
  firstName: string;
  lastName: string;
  preference: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: number;
  ethnicity: string;
  birthday: number;
  height: number;
  weight: number;
  religion: string;
  college: string;
  smoker: string;
  drinker: string;
  interests: string[];
};
