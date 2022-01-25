// Importación de la clase
import { Factory } from './poligono';

// Enum con los diferentes tipos de polígono aceptados
enum Tipo {
    Triangulo = "Triangulo",
    Cuadrado = "Cuadrado",
    Circulo = "Circulo"
}
// Variables con los datos de los diferentes polígonos
// Triángulo
let baseTriangulo = 10;
let alturaTriangulo = baseTriangulo * Math.sqrt(3) / 2;
// Cuadrado
let longitudLadosCuadrado = 15;
// Círculo
let radioCirculo = 5;

// Crear un objeto de cada tipo e inicializar sus atributos
let miTriangulo: any = Factory.getInstance(Tipo.Triangulo);
let miCuadrado: any = Factory.getInstance(Tipo.Cuadrado);
let miCirculo: any = Factory.getInstance(Tipo.Circulo);

miTriangulo.setBase(baseTriangulo);
miTriangulo.setAltura(alturaTriangulo);
miCuadrado.setLongitudLados(longitudLadosCuadrado);
miCirculo.setRadio(radioCirculo);

// Invocar métodos calcularArea y calcularPerimetro de cada objeto para inicializar dichos atributos
miTriangulo.calcularArea();
miTriangulo.calcularPerimetro();
miCuadrado.calcularArea();
miCuadrado.calcularPerimetro();
miCirculo.calcularArea();
miCirculo.calcularPerimetro();

// Mostrar la información de cada objeto con sus métodos toString()
console.log("\n" + miTriangulo.toString());
console.log(miCuadrado.toString());
console.log(miCirculo.toString() + "\n");
