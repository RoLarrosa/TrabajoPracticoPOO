export class Libro {
    public titulo: string;
    public autor: string;
    private disponible: boolean;
  
    constructor(titulo: string, autor: string){
      this.titulo = titulo;
      this.autor = autor;
      this.disponible = true;
    }
  
    
    // Método para prestar el libro
    prestar(): void{
      if (this.disponible){
        this.disponible = false;
        console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
        console.log(`El libro "${this.titulo}" no está disponible para prestar.`);
        }
    }
  
    // Método para devolver el libro
    devolver(): void {
      if (!this.disponible) {
        this.disponible = true;
        console.log(`El libro "${this.titulo}" ha sido devuelto.`);
        } else {
        console.log(`El libro "${this.titulo}" ya está disponible.`);
        }
    }
  
    // Método para verificar si el libro está disponible
    estaDisponible(): boolean {
      return this.disponible;
    }
}