
// Clase abstracta Poligono
abstract class Poligono {

    // Atributos estáticos
    public static TRIANGULO = "Triangulo";
    public static CUADRADO = "Cuadrado";
    public static CIRCULO = "Circulo";

    // Atributos protegidos
    protected numeroLados: number;
    protected longitudLados: number;
    protected base: number;
    protected altura: number;
    protected tipo: string;

    // Constructor
    constructor() {
        this.numeroLados = 0;
        this.longitudLados = 0;
        this.base = 0;
        this.altura = 0;
        this.tipo = "";
    }

    // getters y setters
    // numeroLados
    public getNumeroLados(): number { return this.numeroLados };
    // longitudLados
    public getLongitudLados(): number { return this.longitudLados };
    public setLongitudLados(longitudLados: number): void { this.longitudLados = longitudLados };
    // base
    public getBase(): number { return this.base };
    public setBase(base: number): void { this.longitudLados = base };
    // altura
    public getAltura(): number { return this.altura };
    public setAltura(altura: number): void { this.altura = altura };
    // longitugLados
    public getTipo(): string { return this.tipo };
    public setTipo(tipo: string): void { this.tipo = tipo };

    // Métodos públicos abstractos
    public abstract calcularArea(): number;
    public abstract calcularPerimetro(): number;

    // Método público
    public toString(): string {
        let result: string = `El polígono es un ${this.tipo} con ${this.numeroLados} lados cuyo área es ${this.calcularArea()} y su perímetro ${this.calcularPerimetro()}`;
        return result;
    }
}

// Clase Triangulo
class Triangulo extends Poligono {

    // Constructor
    constructor() {
        super();
        this.tipo = Poligono.TRIANGULO;
        this.numeroLados = 3;
    }

    // Métodos públicos heredados
    public calcularArea(): number {
        return this.base * this.altura / 2;
    }
    public calcularPerimetro(): number {
        return this.base * 3;
    }
}

// Clase Cuadrado
class Cuadrdado extends Poligono {

    // Constructor
    constructor() {
        super();
        this.tipo = Poligono.CUADRADO;
        this.numeroLados = 4;
    }

    // Métodos públicos heredados
    public calcularArea(): number {
        return this.longitudLados ** 2;
    }
    public calcularPerimetro(): number {
        return this.longitudLados * 4;
    }
}

