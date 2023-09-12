import { Libro } from './Libro'

export class Biblioteca {
    private libros: Libro[];
  
    constructor() {
        this.libros = [];
    }
  
    // Método para agregar un libro a la biblioteca
    agregarLibro(libro: Libro): void {
        this.libros.push(libro);
        console.log(`El libro "${libro.titulo}" ha sido agregado a la biblioteca.`);
    }
  
    // Método para listar libros disponibles
    listarLibrosDisponibles(): void {
        console.log('Libros disponibles en la biblioteca:');
        for (const libro of this.libros) {
            if (libro.estaDisponible()) {
            console.log(`- "${libro.titulo}" por ${libro.autor}`);
            }
        }
    }
}