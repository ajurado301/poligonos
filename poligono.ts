
// Clase abstracta Poligono
abstract class Poligono {

    // Atributos estáticos (Para uso sin instanciar la clase)
    public static TRIANGULO = "Triangulo";
    public static CUADRADO = "Cuadrado";
    public static CIRCULO = "Circulo";

    // Atributos protegidos (para uso exclusivo de las clases hijas)
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
    public setBase(base: number): void { this.base = base };
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
class Cuadrado extends Poligono {

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

// Clase Circulo
class Circulo extends Poligono {

    // Atributo privado
    private radio: number;

    // Constructor
    constructor() {
        super();
        this.radio = 0;
        this.tipo = Poligono.CIRCULO;
        this.numeroLados = Infinity;
    }

    // getters y setters
    // radio
    public getRadio(): number { return this.radio };
    public setRadio(radio: number): void { this.radio = radio }

    // Métodos públicos heredados
    public calcularArea(): number {
        return Math.PI * (this.radio ** 2);
    }
    public calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

// Clase abstracta Factory
export abstract class Factory {

    // Método público
    public static getInstance(tipo: string): any {
        let result: any;
        switch (tipo) {
            case Poligono.TRIANGULO:
                result = new Triangulo();
                break;
            case Poligono.CUADRADO:
                result = new Cuadrado();
                break;
            case Poligono.CIRCULO:
                result = new Circulo();
                break;
        };
        return result;
    }
}

