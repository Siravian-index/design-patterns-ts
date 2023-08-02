


export class Government {
    private static instance: Government;
    private _name: string
    private counter = 0
    constructor(name: string) {
        this.counter++
        this._name = name

        if (Government.instance) {
            return Government.instance
        }

        Government.instance = this
        return this
    }
}


export class Database {
    private static instance: Database
    private _name = "PostgreSQL"
    private _version = "1.0.2"
    private counter = 0
    private constructor() {
        this.counter++
    }

    public static getInstance(): Database {
        if (Database.instance) {
            return Database.instance
        }
        Database.instance = new Database()
        return Database.instance
    }
}


