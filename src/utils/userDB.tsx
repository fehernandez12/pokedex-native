export interface UserData {
  username: string;
  password: string;
}

export interface UserDetails {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const user: UserData = {
  username: "deffeater",
  password: "123456",
};

export const userDetails: UserDetails = {
  username: "deffeater",
  firstName: "Felipe",
  lastName: "Hernández",
  email: "feehernandezba@gmail.com",
};
