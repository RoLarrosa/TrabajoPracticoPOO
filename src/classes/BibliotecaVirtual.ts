import { Libro } from './Libro'
import { Biblioteca } from './Biblioteca'

  
// Crear instancias de libros
const libro1 = new Libro('El Dragon Azul', 'Leo Batic');
const libro2 = new Libro('Orgullo y Prejuicio', 'Jane Austen');
const libro3 = new Libro('Cancion de Hielo y Fuego', 'George R. R. Martin');

// Crear instancia de biblioteca
const biblioteca = new Biblioteca();

// Agregar libros a la biblioteca
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

// Listar libros disponibles
biblioteca.listarLibrosDisponibles();

// Prestar un libro
libro1.prestar();
libro2.prestar();

// Listar libros disponibles después de prestar algunos
biblioteca.listarLibrosDisponibles();

// Devolver un libro
libro2.devolver();

// Listar libros disponibles después de devolver uno
biblioteca.listarLibrosDisponibles();
