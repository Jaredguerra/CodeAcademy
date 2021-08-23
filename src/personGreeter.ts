export class PersonGreeter {
    constructor(
        private firstName: string,
        private secondName: string,
        private dateOfBirth?: Date,
    ) {}
    greet() {
        console.log(`Hello ${this.firstName} ${}})
    }
}
