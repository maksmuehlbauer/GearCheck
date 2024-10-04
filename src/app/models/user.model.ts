export class User {
    name: string;
    password: string;
    mail: string;

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.password = obj ? obj.password : '';
        this.mail = obj ? obj.mail : '';
    }
}