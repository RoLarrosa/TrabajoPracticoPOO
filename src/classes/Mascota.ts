export class Mascota {
    nombre: string;
    nivelFelicidad: number;
    nivelHambre: number;
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.nivelFelicidad = 30; // Nivel de felicidad inicial
      this.nivelHambre = 30;   // Nivel de hambre inicial
    }
  
    // Método para alimentar a la mascota
    alimentar(comida: string) {
      if (this.nivelHambre < 100) {
        console.log(`${this.nombre} ha sido alimentado con ${comida}.`);
        this.nivelHambre += 20;
        this.nivelFelicidad += 10;
      } else {
        console.log(`${this.nombre} no tiene hambre en este momento.`);
      }
    }
  
    // Método para jugar con la mascota
    jugar(juguete: string) {
      if (this.nivelFelicidad < 100) {
        console.log(`${this.nombre} está jugando con ${juguete}.`);
        this.nivelFelicidad += 20;
        this.nivelHambre -= 10;
      } else {
        console.log(`${this.nombre} está muy feliz en este momento.`);
      }
    }
  
    // Método para mostrar el estado de la mascota
    mostrarEstado() {
      console.log(`Estado de ${this.nombre}:`);
      console.log(`Nivel de felicidad: ${this.nivelFelicidad}`);
      console.log(`Nivel de hambre: ${this.nivelHambre}`);
    }
}