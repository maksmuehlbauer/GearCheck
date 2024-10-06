export class User {
    id: string;
    name: string;
    password: string;
    mail: string;
    categorys: string[];
    createdAt: Date = new Date()

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.name = obj ? obj.name : '';
        this.password = obj ? obj.password : '';
        this.mail = obj ? obj.mail : '';
        this.categorys = obj ? obj.categorys : '';
        this.createdAt = obj ? obj.createdAt : new Date();
    }

    public toJSON() {
        return {
            id: this.id,
            name: this.name,
            password: this.password,
            mail: this.mail,
            categorys: this.categorys,
            createdAt: this.createdAt
        }
    }
}