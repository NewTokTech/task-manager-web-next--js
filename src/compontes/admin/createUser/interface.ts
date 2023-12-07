interface User {
  fullName: string ;
    email: string ;
    address: string ;
    phone: number | undefined;
    accountNumber: number | undefined;
    IFC: number | undefined ;
    Branch: string ;
    password: string ;
    role: string ;
  }

  export default User;