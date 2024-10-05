export class User {
    name: string;
    password: string;
    mail: string;
    categorys: string[]

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.password = obj ? obj.password : '';
        this.mail = obj ? obj.mail : '';
        this.categorys = obj ? obj.categorys : ''
    }
}