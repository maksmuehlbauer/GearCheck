export class User {
    name: string;
    password: string;
    mail: string;
    categorys: string[];
    createdAt: Date = new Date()

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.password = obj ? obj.password : '';
        this.mail = obj ? obj.mail : '';
        this.categorys = obj ? obj.categorys : '';
        this.createdAt = obj ? obj.createdAt : new Date();
    }

    public toJSON() {
        return {
            name: this.name,
            password: this.password,
            mail: this.mail,
            categorys: this.categorys,
            createdAt: this.createdAt
        }
    }
}