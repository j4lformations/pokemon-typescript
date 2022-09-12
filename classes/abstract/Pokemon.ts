export abstract class Pokemon {

    protected constructor(private nom: string, private poids: number) {
    }

    getNom(): string {
        return this.nom;
    }

    getPoids(){
        return this.poids;
    }

    abstract getVitesse():number;

    toString() {
        return `Je suis le Pokemon ${this.nom}\nMon poids est ${this.poids} kg\nMa vitesse est ${this.getVitesse()} km/h\n`;
    }
}