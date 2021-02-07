export class ResetPasswordRequest{

    constructor(
        public token:string,
        public newPassword:string
    ){}
}