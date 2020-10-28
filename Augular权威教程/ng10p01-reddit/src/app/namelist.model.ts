
export class BigHexo {
    name: string;
    attack: number;
    constructor(name: string, attack?: number) {
        this.name = name;
        this.attack = attack || 60;
    }
    addAttack() {
        this.attack++;
    }
    subAttack() {
        this.attack--;
    }
}
